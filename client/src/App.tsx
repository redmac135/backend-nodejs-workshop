import logo from './logo.svg';
import './App.css';
import TaskManager from './components/TaskManager';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <TaskManager />
    </div>
  );
}

export default App;
