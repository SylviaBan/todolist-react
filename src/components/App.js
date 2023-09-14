import '../App.css';
import TodoList from "./TodoList";
import NavBar from "./NavBar";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Routes, Route, useParams, Link} from 'react-router-dom';
import AddTask from "./AddTask";


function Tasks() {
    return (
        <ul>
            <li><Link to='/tasks/1'>Task 1</Link></li>
            <li><Link to='/tasks/2'>Task 2</Link></li>
            <li><Link to='/tasks/3'>Task 3</Link></li>
        </ul>
    )
}

function TaskDetails() {
    const tasks = useParams();
    const taskId = tasks.id;

// Fetch (appel réseau au serveur) vers le backend SPRING BOOT ==> /tasks/2
    // en retour => un json contenant les infos de la voiture
    return (
        <h1>{taskId}</h1>
    )
}


function App() {

    return (
        <div className="App">
            <main>
                <TodoList />
                <NavBar />
                <Routes>
                    <Route path ="/" component={TodoList} />
                    <Route path ="/add-task" component={AddTask} />
                    <Route path ="/tasks" element={<Tasks/>}/>
                    <Route path ="/tasks/:id" element={<TaskDetails/>}/>
                    <Route path ="/tasks/:search" component={TodoList} />
                </Routes>
            </main>
        </div>
    );
}

export default App;