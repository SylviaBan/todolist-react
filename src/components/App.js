import logo from '../logo.svg';
import '../App.css';
import TodoList from "./TodoList";
import NavBar from "./NavBar";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Router, Route } from 'react-router-dom';
import AddTask from "./AddTask";

function App() {

  return (
    <div className="App">
        <main>
            <TodoList />
            <NavBar />
            <Router>
                <Route path="/add-task" component={AddTask} />
                <Route path="/" exact component={TodoList} />
            </Router>
        </main>
    </div>
  );
}

export default App;