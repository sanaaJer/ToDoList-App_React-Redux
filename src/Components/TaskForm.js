import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addtask, updateIdCount } from '../Actions/Action';

export default function AddTask() {
  
  // get access to the dispatch function from the Redux store.
  const dispatch = useDispatch();
  // read last id state from redux store 
  const idCount = useSelector((state) => state.idCount); // Get Id from Redux
  
  // Create refs for input's form
  const [newTask, setNewTAsk] = useState({
    title: '',
    description: '',
    id:idCount,
    completed:false
  });


  // Handle submit Add task form
  const addTaskSubmit = (e) => {
     e.preventDefault();
    // Dispatch action to Redux
     dispatch(addtask(newTask)); 
    // update Id in redux store
    dispatch(updateIdCount(idCount+1))
    // Clear newTask state values
    setNewTAsk({
      title: '',
      description: '',
      id: idCount + 1, // Prepare for the next task's ID
    });
  };

  return (
    <section className="formsection">
      <h1>ADD NEW TASK</h1>
      {/* form section element */}
      <form onSubmit={addTaskSubmit}>
         {/* Name title task input */}
        <input
          className='titleInput'
          value={newTask.title}
          name="title"
          type="text"
          placeholder="Enter task name"
          onChange={(e) =>
            // update local newTask state 
            setNewTAsk((prevState) => ({ ...prevState, title: e.target.value }))
          }
          required
        />
        {/* Description input */}
        <textarea
          name="description"
          value={newTask.description}
          type="text"
          placeholder="Enter description"
          onChange={(e) =>
            // update local newTask state 
            setNewTAsk((prevState) => ({ ...prevState, description: e.target.value }))
          }
          required
        />
        <input type="submit" value="Add Task" />
      </form>
    </section>
  );
}
