import React,{useState} from "react";
export const EditTodoComp = ({editTodo,task})=>{

  const[value,setValue] = useState(task.task)
 
    const  handleSubmit = e => {
          e.preventDefault (); 
          if(value === ""){
           alert("Add a Task")
          }
          else {
          editTodo(value, task.id) 
          setValue("") 
          }
      }
    
    return (
        <div >
            <form className="TodoForm" onSubmit ={handleSubmit} >
            <input type = "text" value={value}  className = "todo-update" placeholder ="update Task" onChange={(e) => setValue(e.target.value)}/>
            <button className ="edit-btn" type ="submit" >Update Task</button>   
            </form> 
        </div>
    )
}