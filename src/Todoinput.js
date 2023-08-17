import React , {useState} from 'react'

export const Todoinput = ({addTodoInput}) => {
 const [value,setValue] = useState ("")
 
  const  handleSubmit = e => {
        e.preventDefault (); 
        if(value === ""){
         alert("Add a Task")
        }
        else {
        addTodoInput(value) 
        setValue("") 
        }
    }

  
    return (
        <div >
            <form className="TodoForm" onSubmit ={handleSubmit} >
            <input type = "text" value={value}  className = "todo-input" placeholder ="what is the task today?" onChange={(e) => setValue(e.target.value)}/>
            <button className ="todo-btn" type ="submit" >Add Task</button>   
            </form> 
        </div>
    )
}