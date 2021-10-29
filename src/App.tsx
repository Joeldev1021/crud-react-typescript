import React, { ChangeEvent, useState } from "react";
import "./App.css";
import CardTask from "./components/CardTask";
import FormTask from "./components/FormTask";
import Navbar from "./components/Navbar";
import { TaskProps } from "./interface/index";

interface Props {
  title: string;
}


function App({ title }: Props) {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  const [singleTask, setSingleTask] = useState<TaskProps>({
    title: "",
    description: "",
  });
 
  const addTasks = (task: TaskProps): void => {
    
    setTasks([...tasks, { ...task, id: Date.now() }]);
  };

  const deleteTask = (id: number): void => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editeTask = (id: number): void => {
     console.log(id)
     setSingleTask(tasks.filter((task) => task.id == id)[0]);
  };

  const updateTask = (taskEdite: TaskProps): void => {
    setTasks(tasks.map(t => t.id === taskEdite.id ? taskEdite : t));
  }

  return (
    <div>
      <Navbar />
      <div className="container ">
        <h1>{title}</h1>
        <FormTask addTask={addTasks} singleTask={singleTask} updateTask={updateTask} />
        <div className="row row-cols-5">
          <CardTask tasks={tasks} deleteTask={deleteTask} editeTask={editeTask} />
        </div>
      </div>
    </div>
  );
}

export default App;
