import React, { Component } from 'react';

import Header from '../header';
import TodoList from '../todo-list';
import TodoAdd from '../todo-add';
import TodoSearch from '../todo-search';
import TodoFilters from '../todo-filters';

import './TodoApp.css';

export class TodoApp extends Component {
  state = {
    items: [],
    search: '',
    filter: 'all',
    
  };

  idCounter = 100;

  createItem = label => {
    return {
      id: ++this.idCounter,
      label,
      complete: false,
    };
  };

  handleItemAdd = label => {
    this.setState(prevState => {
      const newItem = this.createItem(label);
      const items = [...prevState.items, newItem];
      return { items };
    });
  };

  
  handleItemDelete = id => {
    this.setState(prevState => {
      const itemIndex = prevState.items.findIndex(
        item => item.id === id,
      );
      const items = [
        ...prevState.items.slice(0, itemIndex),
        ...prevState.items.slice(itemIndex + 1),
      ];
      return { items };
    });
  };

  handleToggleComplete = id => {
    this.setState(prevState => {
      const itemIndex = prevState.items.findIndex(
        item => item.id === id,
      );
      const oldItem = prevState.items[itemIndex];
      const newValue = !oldItem.complete;
      const changedItem = { ...oldItem, complete: newValue };
      const items = [
        ...prevState.items.slice(0, itemIndex),
        changedItem,
        ...prevState.items.slice(itemIndex + 1),
      ];
      return { items };
    });
  };

  handleSearchChange = search => {
    this.setState({ search });
  };

  handleFilterChange = filter => {
    this.setState({ filter });
  };

  searchItems = (items, search) => {
    return items.filter(({ label }) =>
      label.toLowerCase().includes(search.toLowerCase()),
    );
  };

  filterItems = (items, filter) => {
    switch (filter) {
      case 'all':
        return items;
      case 'complete':
        return items.filter(({ complete }) => complete);
      case 'active':
        return items.filter(({ complete }) => !complete);
      default:
        return items;
    }
  };

  render() {
    
    
    const { items, search, filter } = this.state;
    const completeItemsCount = items.filter(({ complete }) => complete).length;
    const activeItemsCount = items.length - completeItemsCount;
    const visibleItems = this.searchItems(
      this.filterItems(items, filter),search,
    );
    return (
      <div className="todoapp">
        <Header complete={completeItemsCount} active={activeItemsCount} />
        <main>
          <TodoSearch onSearchChange={this.handleSearchChange} />
          <TodoFilters
            onFilterChange={this.handleFilterChange}
            filter={filter}/>
          <TodoAdd onItemAdd={this.handleItemAdd} />
          <TodoList
            items={visibleItems}
            
            onItemDelete={this.handleItemDelete}
            onToggleComplete={this.handleToggleComplete}/>
          
        </main>
      </div>
    );
  }
}
