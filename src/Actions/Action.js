export const ADDTASK='ADDTASK'
export const DELETETASK='DELETETASK'
export const EDITTASK='EDITTASK'
export const CHECKCOMPLETED='CHECKCOMPLETED'
export const UPDATECOUNTID='UPDATECOUNTID'
export const DELETEALL='DELETEALL'

export const addtask = (task) => {
    return {
      type: ADDTASK,
      payload: task,  // The payload should be the task object
    };
  };


export const deletetask=(taskId)=>(
    {type:DELETETASK,
    playload:taskId
    }
);


export const updateTask=(id,taskEdit)=>(
    {type:EDITTASK,
     payload:{id,taskEdit}
    }
);

export const checktask=(id,completed)=>(
  {type:CHECKCOMPLETED,
   payload:{id,completed}
  }
);

export const updateIdCount=(idCount)=>(
  {type:UPDATECOUNTID,
   payload:{idCount}
  }
);

export const deleteAll=()=>(
   {type:DELETEALL}
);
