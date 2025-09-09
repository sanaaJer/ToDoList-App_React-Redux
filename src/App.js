import './styles/App.css';
import TaskForm from './Components/TaskForm'
import TasksList from './Components/TasksList'



function App() {
  // inline style conts
  const divStyle={display:'flex',flexWrap: 'wrap',flexDirection:'row',gap:'40px'}

  return (
    <div style={divStyle}>
        <TasksList />
        <TaskForm />
    </div>
  );
}

export default App;
