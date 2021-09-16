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

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
