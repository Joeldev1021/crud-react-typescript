import React, { ChangeEvent, useState } from "react";
import { TaskProps } from "../interface/index";

interface formPros {
  addTask: (task: TaskProps) => void;
}

const initialValue = {
  id: 0,
  title: "",
  description: "",
};

const FormTask = ({ addTask }: formPros) => {
  const [task, setTask] = useState(initialValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement> ) => {
    setTask({
      ...task,
      id: Date.now(),
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    
    e.preventDefault();
    
    addTask(task);
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
