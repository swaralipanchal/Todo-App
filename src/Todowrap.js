import React,{useState} from "react";
import { Todoinput } from "./Todoinput";
import {v4 as uuidv4 } from 'uuid';
import { AllTodos } from "./AllTodos";
import { EditTodoComp } from "./ediTodoComp";
uuidv4();

const Todowrap = () => {
    const [todos,setTodos] = useState ([])

    const addTodoInput  = todo => {
        setTodos([...todos,{id:uuidv4(), task:todo , completed : false , isEditing : false}])
        console.log(todos)
    }

    const toggleComplete = id =>{
        setTodos(todos.map(todo => todo.id === id ?{
            ...todo, completed: !todo.completed} : todo ))
    }
    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id ))
    }
    const editTodo = (id) => {
        setTodos(todos.map(todo => todo.id === id ? {
            ...todo , isEditing : !todo.isEditing 
        }: todo))
    }
    const updateTodo = (task,id) => {
        setTodos(todos.map(todo => todo.id === id ? {
            ...todo ,task, isEditing : !todo.isEditing 
        }: todo))
    }
   

    return (
        <div className="TodoWrapper">
            <h1>Get Things Done!</h1>
            <Todoinput addTodoInput={addTodoInput}/>

            {todos.map ((todo,index)=>(
                todo.isEditing ? (
                  <EditTodoComp editTodo={updateTodo} task ={todo}/>
             ) : (
                <AllTodos task={todo}  key={index} 
                toggleComplete={toggleComplete} 
                deleteTodo={deleteTodo} 
                editTodo={editTodo}/>
             )
               
            ) ) }
        </div>
    )
}

export default Todowrap;