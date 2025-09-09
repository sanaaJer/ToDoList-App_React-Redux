import React, { useState } from 'react'
import CardTask from './TaskItem';
import { useDispatch, useSelector } from 'react-redux';
import {   primaryColor } from '../colors';
import { deleteAll } from '../Actions/Action';

 function TasksList() {
  // inline-style
  const secListStyle={ display: 'flex',flexDirection: 'column',width:'50%', padding:'0 1em 1em 1em', backgroundColor:primaryColor,color:'black',borderRadius:18,margin:'4em auto'}
  
  // Get tasks from Redux store
  const listTasks = useSelector((state) => state.listTAsks); 
  // get access to the dispatch function from the Redux store.
  const dispatch = useDispatch();

  // local state track value of selected element
  const [valueOption,setValueOption]=useState('all');


  // handle chande of select element's value
  const handleChange=(e)=>{
     setValueOption(e.target.value)   
  }

  // handle delete all tasks
  const handleDeleteAll=()=>{ dispatch(deleteAll())}

  return (
 // return list Tasks Component section
  <section style={secListStyle}>
    <h1>To-Do List </h1>
    <select
            id="selectElement"
            value={valueOption}
            onChange={handleChange}
            
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="active">Active</option>
    </select>
    <button  onClick={handleDeleteAll}>Delete all </button>

    {

      // map functon to display list of tasks usnig Component CardTask
      (valueOption==='all'?
      listTasks:(valueOption==='completed')?
      listTasks.filter((e)=>e.completed===true)
      :listTasks.filter((e)=>e.completed===false)  
      ).map((e)=> <CardTask {...e} />)

    }
  </section>

    
  )
}

export default TasksList;
