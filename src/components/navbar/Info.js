import React from 'react';
import "./Navbar.css"

const Info = () =>{
  return (
    <div className="infopage">
      <p>The name of the author: Md Saiful Islam</p>
      <p>Short instructions: As a user, I can
        <li>Read a list of tasks.</li>
        <li>Add a task using the mouse or keyboard.</li>
        <li>Mark any task as completed, using the mouse or keyboard.</li>
        <li>Delete any task, using the mouse or keyboard.</li>
        <li>View a specific subset of tasks: All tasks, only the active task, or only the completed tasks.We'll tackle these stories one-by-one.
        <li>The aplication is responsive and supports various screen size.</li>
        </li>
      </p>
    </div>
  );
}
export default Info;

