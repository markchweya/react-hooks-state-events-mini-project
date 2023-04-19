import React from "react";
import React, { useState } from "react";

function NewTaskForm({onTaskFormSubmit, categories}) {
  const optionElements = categories.filter(ele => ele !== "All").map(ele => {
    return(
      <option key={ele}>{ele}</option>
    )
  })
  const [formData, setFormData] = useState({
    text: "",
    category: "Code"
  })

  function handleSubmit(event){
    event.preventDefault()
    onTaskFormSubmit(formData)
  }

  function handleChange(event){
    const name = event.target.name
    const value = event.target.value
    setFormData({...formData, [name]: value})
  }

function NewTaskForm() {
  return (
    <form className="new-task-form">
      <form onSubmit={handleSubmit}className="new-task-form"></form>
      <label>
        Details
        <input type="text" name="text" />
        <input type="text" name="text" onChange = {handleChange} />
      </label>
      <label>
        Category
        <select name="category">
          {/* render <option> elements for each category here */}
          <select name="category" onChange={handleChange}>
          {optionElements}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
