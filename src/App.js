import logo from './logo.svg';
import './App.css';
import GitTest from './GitTest';
import Todo from './components/Todo';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
      <GitTest />
      <Todo />
      <Login />
    </div>
  );
}

export default App;
