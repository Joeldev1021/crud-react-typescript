import { TaskProps } from "../interface";

interface CardTaskProps {
  tasks: TaskProps[];
  deleteTask: (id: number) => void;
  editeTask: (id: number) => void;
}

const CardTask = ({ tasks, deleteTask, editeTask }: CardTaskProps) => {


  return (
    <>
      {tasks.map((task) => {
       
        return (
          <div className="card m-2" key={task.id} style={{ width: "18rem" }}>
            <img className="card-img-top" src="holder.js/100px180/" alt="" />
            <div className="card-body">
              <h4 className="card-title">{task.title}</h4>
              <p className="card-text">{task.description}</p>
            </div>
            <div className="d-flex m-2 justify-content-between">
              <button type="button" className="btn btn-primary" onClick={()=> task.id && editeTask(task.id)}>
              <i className="fas fa-pencil-alt"></i>
              </button>
              <button type="button" className="btn btn-danger" onClick={()=>task.id && deleteTask(task.id)}>
                <i className="fas fa-trash-alt"></i>
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CardTask;
