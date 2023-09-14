import { useParams } from 'react-router-dom';
import {useEffect, useState} from "react";

export default function TodoList() {

    const [tasks, setTasks] = useState([]);
    const { search } = useParams();


    useEffect(() => {

        fetch('/data.json')
            .then(res => res.json())
            .then(tasks => setTasks(tasks));

    });

    return (
        <body>
        <section id="todo" className="bg-danger-subtle">
            <h1 className="m-3 text-danger-emphasis">Liste de tâches</h1>
            <ul className="list-group m-3">


                {tasks.map(t => (
                    <li className="list-group-item d-flex align-items-center bg-light">
                        {t.name}
                        <button className="btn btn-sm ms-auto btn-outline-success">&#x2714;</button>
                    </li>)
                )}

                <li className="list-group-item d-flex align-items-center bg-light">
                    New tâche
                    <button className="btn btn-sm ms-auto btn-outline-success">&#x2714;</button>
                </li>
                <li className="list-group-item d-flex align-items-center bg-light">
                    New tâche
                    <button className="btn btn-sm ms-auto btn-outline-success">&#x2714;</button>
                </li>
                <li className="list-group-item d-flex align-items-center bg-light">
                    New tâche
                    <button className="btn btn-sm ms-auto btn-outline-success">&#x2714;</button>
                </li>
                <li className="list-group-item d-flex align-items-center bg-light">
                    New tâche
                    <button className="btn btn-sm ms-auto btn-outline-success">&#x2714;</button>
                </li>
            </ul>
        </section>
        </body>
    );
}