import { ADDTASK, CHECKCOMPLETED, DELETETASK, EDITTASK, UPDATECOUNTID } from "../Actions/Action";


const initialState={
    listTAsks:[],
    idCount:1,
}
const Reducer=(state=initialState,action)=>{
    switch(action.type){

        case ADDTASK:  
            const updatedState = {
            ...state,
            listTAsks: [...state.listTAsks, action.payload], // Add new task to the list
    
            }; 
            return updatedState;
        case DELETETASK: 
            return {...state,
                    listTAsks:state.listTAsks.filter( (e) => e.id !== action.playload)
             };
         case EDITTASK: 
             return {...state,
                     listTAsks:state.listTAsks.map( (e) => e.id == action.payload.id? 
                     {...e,...action.payload.taskEdit}:e )
              };  
        case CHECKCOMPLETED: 
              return {...state,
                      listTAsks:state.listTAsks.map( (e) => e.id == action.payload.id? 
                      {...e,...action.payload.checkStatus}:e )
               };   
        
        case UPDATECOUNTID: 
               return {...state,idCount:action.payload.idCount};
     
        default: return state;
    }
}
export default Reducer;