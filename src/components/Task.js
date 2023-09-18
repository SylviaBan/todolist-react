import React from 'react';

const Task = ({task}) => {
    return (
        <div className="task">
            <p>ID : {task.id}</p>
            <h4>Nom : {task.name}</h4>
            <p>Complété : {task.completed ? 'Oui' : 'Non'}</p>

        </div>
    );
};

export default Task;