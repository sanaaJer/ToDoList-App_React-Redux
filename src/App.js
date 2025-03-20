import './styles/App.css';
import TaskForm from './Components/TaskForm'
import TasksList from './Components/TasksList'



function App() {
  // inline style conts
  const divStyle={display:'flex',flexDirection:'row'}

  return (
    <div style={divStyle}>
        <TasksList />
        <TaskForm />
    </div>
  );
}

export default App;
