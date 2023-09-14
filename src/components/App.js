import '../App.css';
import TodoList from "./TodoList";
import NavBar from "./NavBar";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route, useParams } from 'react-router-dom';
import AddTask from "./AddTask";

function App() {

  return (
    <div className="App">
        <main>
            <TodoList />
            <NavBar />
            <Routes>
                <Route path="/add-task" component={AddTask} />
                <Route path="/" component={TodoList} />
                <Route path="/:search?" component={TodoList} />
            </Routes>
        </main>
    </div>
  );
}

export default App;