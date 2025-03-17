import './App.css';
import TaskForm from './Components/TaskForm'
import TasksList from './Components/TasksList'
function App() {
  return (
    <div style={{display:'flex',flexDirection:'row'}}>
        <TasksList />
        <TaskForm />
    </div>
  );
}

export default App;
