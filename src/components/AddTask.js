import React, { useState } from 'react';

function AddTask({ onAddTask }) {
    const [taskName, setTaskName] = useState('');

    const handleInputChange = (e) => {
        setTaskName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (taskName.trim() === '') {
            return; // Ne rien faire si le nom de la tâche est vide
        }

        // Appeler la fonction de rappel pour ajouter la tâche
        onAddTask(taskName);

        // Réinitialiser le champ de saisie
        setTaskName('');
    };

    return (
        <div>
            <h2>Ajouter une tâche</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nom de la tâche"
                    value={taskName}
                    onChange={handleInputChange}
                />
                <button type="submit">Ajouter</button>
            </form>
        </div>
    );
}

export default AddTask;
