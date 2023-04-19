import React from "react";
import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {


  const [tasksState, setTasksState] = useState( TASKS )


  function handleDelete(event){
    const updatedTasks = tasksState.filter(obj =>{
      return obj.text !== event.target.name
    })

    setTasksState([...updatedTasks])
  }

  function handleFilter(event){
    if (event.target.name !== "All"){
      const updatedTasks = TASKS.filter(obj =>{
        return obj.category === event.target.name
      })
      setTasksState([...updatedTasks])
    } else {
      setTasksState([...TASKS])
    }
  }

  function handleAdd(formData){
    setTasksState([...TASKS, formData])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter />
      <NewTaskForm />
      <TaskList />
       <CategoryFilter categories={CATEGORIES} handleFilter = {handleFilter}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit ={handleAdd}/>
      <TaskList handleDelete = {handleDelete} tasks = {tasksState}/>
    </div>
  );
}

export default App;
