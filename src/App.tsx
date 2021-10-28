import React, { ChangeEvent, useState } from "react";
import "./App.css";
import CardTask from "./components/CardTask";
import FormTask from "./components/FormTask";
import Navbar from "./components/Navbar";
import { TaskProps } from "./interface/index"


interface Props {
  title: string;
}

function App({ title }: Props) {

const [tasks, setTasks] = useState<TaskProps[]>([]);


const addTasks = (task: TaskProps):void => {
   setTasks([...tasks, {...task}]);
   
}
  return (
    <div>
      <Navbar />
      <div className="container ">
        <h1>{title}</h1>
         <FormTask addTask={addTasks}/>
          <div className="row row-cols-5">
          <CardTask tasks={tasks}/>
         </div>
        </div>
    </div>
  );
}

export default App;
