import React, { useState } from 'react';

const Task = ({ task }) => {
    const { id, name } = task;
    const [completed, setCompleted] = useState(task.completed);

    const toggleCompleted = () => {
        setCompleted(!completed);
    };

    return (
        <div className={`${completed ? 'bg-success' : ''}`}>
            <div className="d-flex justify-content-between p-3">
                <div>
                    <p>N° : {id}</p>
                </div>
                <div>
                    <h4>Tâche : {name}</h4>
                </div>
                <div>
                    <p>Progression : {completed ? 'Done' : 'Todo'}</p>
                </div>
            </div>
            <div className="d-flex justify-content-end p-3">
                <button
                    className={`btn btn-lg ms-auto ${completed ? 'btn-info' : 'btn-danger'}`}
                    onClick={toggleCompleted}
                >
                    &#x2714;
                </button>
            </div>
        </div>
    );
};

export default Task;
