import React, { useState } from "react";
import TaskList from "./TaskList";


export default function TaskApp() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);
  
  const handleSubmit = () => {
    if (text.trim() === "") return;
    setTasks(prev => [...prev, { id: Date.now(), text }]);
    setText("")
   
  };

  
  const handleDelete = (id) => {
    // TODO: filter tasks by id to remove the clicked one
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  
  const handleClearAll = () => {
    // TODO: set tasks to empty array
    setTasks([]);
  };

  return (
    <section className="card">
      {/*Controlled Input */}
      <div className="inputRow">
        <input
          type="text"
          placeholder="Type a task..."
          className="input"
          // TODO: value={text}
          value={text}
          // TODO: onChange={(e) => setText(e.target.value)}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSubmit();
          }}
        />

        

        <button className="btn btn--primary" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      {/* <p>{text}</p>  */}

      {/*Render Task List and Enable Delete */}
      {/*Pass tasks and onDelete */}
      <TaskList /* tasks={tasks} onDelete={handleDelete} */ 
      tasks={tasks} onDelete={handleDelete}/>

      {/*Clear All */}
      <div className="footerRow">
        <button className="btn btn--ghost" onClick={handleClearAll}>
          Clear All
        </button>
      </div>
    </section>
  );
}
