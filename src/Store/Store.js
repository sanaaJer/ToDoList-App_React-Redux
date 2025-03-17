import { createStore } from "redux";
import Reducer from "../Reducers/Reducer";
import { loadState, saveState } from "../SessionStorage/sessoinStorage";



// store creation by providing the reducer , we add a loadstate fuction,will load state from sessionStorage
const store = createStore(Reducer, loadState());

//saveState will save the updated state to sessionStorage whenever the Redux state changes.
store.subscribe(() => {
  saveState(store.getState());
});


 export default store;