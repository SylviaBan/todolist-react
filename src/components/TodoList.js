import { useParams } from 'react-router-dom';
import {useEffect, useState} from "react";
import Task from "./Task";

export default function TodoList() {

    const [tasks, setTasks] = useState([]);
    const { search } = useParams();


    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(tasks => {
                setTasks(tasks)
                console.table(tasks)
            });
    }, []);

    let filteredTasks;
    switch (search) {
        case 'completed':
            filteredTasks = tasks.filter((task) => task.completed)
            break
        default :
            filteredTasks = tasks
            break
    }

    return (
        <body className="bg-danger-subtle">
        <section id="todo" className="py-5">
            <h1 className="text-danger-emphasis">Liste de tâches</h1>
            <ul className="list-group m-5">
                {/*affichage via une boucle - filtrage par tâche complétée ou non*/}
                {filteredTasks.map(t => (
                    <li className="list-group-item d-flex align-items-center bg-light">
                        {/*<Task key={t.id} task={t} />*/}
                        <Task task={t} />
                        <button className="btn btn-sm ms-auto btn-outline-success">&#x2714;</button>
                    </li>)
                )}

                {/*affichage en dur*/}
                <li className="list-group-item d-flex align-items-center bg-light">
                    Ma nouvelle tâche
                    <button className="btn btn-sm ms-auto btn-outline-success">&#x2714;</button>
                </li>
            </ul>
        </section>
        </body>
    );
}