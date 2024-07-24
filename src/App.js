import logo from './logo.svg';
import './App.css';
import GitTest from './GitTest';
import Todo from './components/Todo';
// import Login from './components/Login/Login';
import { StatefulForm } from './components/StatefulForm';

function App() {
  return (
    <div className="App">
       {/* <GitTest />
      <Todo />
      <Login /> */}
      <StatefulForm />
    </div>
  );
}

export default App;
