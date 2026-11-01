
import { useState, useEffect } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");

 
  const [tasks, setTasks] = useState(() => {
    let getData = localStorage.getItem("taskList")
    return getData ? JSON.parse(getData) : [
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Learn HTML", completed: false },
    { id: 3, text: "Learn CSS", completed: false },
  ]
  });

  // localStorage.setItem("taskList", JSON.stringify(tasks))

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(tasks))
  }, [tasks])


  const [filterItems, setFilterItems] = useState("all");

  function addTask() {
    if (inputValue.trim() !== "") {
      const newTask = {
        id: Date.now(),
        text: inputValue.trim(),
        completed: false,
      };

      setTasks(previousTasks => [...previousTasks, newTask]);
      setInputValue("");
    }
  }

  function toggleTask(idToToggle) {
    setTasks(previousTasks =>
      previousTasks.map(task =>
        task.id === idToToggle
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  function deleteTask(idToDelete) {
    setTasks(previousTasks =>
      previousTasks.filter(task => task.id !== idToDelete)
    );
  }

  const filteredTasks = tasks.filter(task => {
    if (filterItems === "active") {
      return !task.completed;
    }

    if (filterItems === "completed") {
      return task.completed;
    }

    return true;
  });

  return (
    <>
      <h1>My Todo List</h1>

      <input
        type="text"
        placeholder="Enter a task..."
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />

      <button onClick={addTask}>Add Task</button>

      <hr />

      <button onClick={() => setFilterItems("all")}>All</button>
      <button onClick={() => setFilterItems("active")}>Active</button>
      <button onClick={() => setFilterItems("completed")}>
        Completed
      </button>

      <hr />

      {filteredTasks.map(task => (
        <div key={task.id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
            aria-label={`Mark ${task.text} as completed`}
          />

          <span
            style={{
              textDecoration: task.completed ? "line-through" : "none",
            }}
          >
            {task.text}
          </span>

          {" "}

          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
      ))}
    </>
  );
}

export default App;
