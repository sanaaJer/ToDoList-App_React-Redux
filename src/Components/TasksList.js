import React from 'react'
import CardTask from './TaskItem';
import { useSelector } from 'react-redux';
import { buttonColor, iconsColor, primaryColor } from '../colors';

 function TasksList() {
   // inline-style
   const secListStyle={ display: 'flex',flexDirection: 'column',width:'40%', padding:'0 1em 1em 1em', backgroundColor:primaryColor,color:'black',borderRadius:18,margin:'4em auto'}
  
  // Get tasks from Redux store
  const listTasks = useSelector((state) => state.listTAsks); 

  return (
 // display list Tasks component section
  <section style={secListStyle}>
    <h1>TO DO LIST </h1>
    {
      // map functon to diisplay list of tasks usnig Component CardTask
      listTasks.map((e)=> (<CardTask {...e} />))
    }
  </section>

    
  )
}

export default TasksList;