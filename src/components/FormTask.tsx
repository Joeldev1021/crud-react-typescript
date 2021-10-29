import React, { ChangeEvent, useEffect, useState } from "react";
import { TaskProps } from "../interface/index";

interface formPros {
  addTask: (task: TaskProps) => void;
  singleTask: TaskProps;
  updateTask: (task: TaskProps) => void;
}

const initialValue = {
  title: "",
  description: "",
};

const FormTask = ({ addTask, singleTask, updateTask  }: formPros) => {
  const [task, setTask] = useState<TaskProps>(initialValue);

  useEffect(() => {
    if(singleTask.id) {
      setTask(singleTask);
    }
  }, [singleTask])

  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement> ) => {
    setTask({
      ...task, 
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(singleTask.id) {
      updateTask(task);
    }else {
      addTask(task);
    }
    setTask(initialValue);
  };

  

  return (
    <div className="col-md-4 mx-3">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            value={task.title}
            onChange={(e) => handleChange(e)}
            type="text"
            className="form-control"
            name="title"
            aria-describedby="emailHelpId"
            placeholder="Title"
          />
        </div>
        <label htmlFor="descrition"></label>
        <div className="form-group">
          <div className="form-group">
            <textarea
              className="form-control"
              onChange={(e) => handleChange(e)}
              value={task.description}
              name="description"
              placeholder="description"
            ></textarea>
          </div>
         
        </div>
        <button className="btn btn-primary">
          send
        </button>
      </form>
    </div>
  );
};

export default FormTask;
