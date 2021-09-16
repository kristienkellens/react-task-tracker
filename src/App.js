import React, { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors appointment",
      date: "Feb 5th at 3:00PM",
      reminder: true,
    },
    {
      id: 2,
      text: "School meeting",
      date: "Feb 6th at 1:30PM",
      reminder: true,
    },
    {
      id: 3,
      text: "Groceries",
      date: "Feb 5th at 3:30PM",
      reminder: false,
    },
  ]);

  //delete task function
  const deleteTask = (id) => {
    //console.log("delete", id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //toggle reminder function
  const toggleReminder = (id) => {
    //console.log("reminder toggle", id);
    //if task.id = id parametre, map the array and toggle that task's reminder to true/false or vice versa. Else, task remains as is
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No tasks to show"
      )}
    </div>
  );
}

export default App;
