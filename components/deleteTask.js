   
// Function for create the component 'Delete Button'
const DeleteButton = (uptade, id) => {
    // Create a html element 'button'
    const deleteButton = document.createElement('button');

    // Add the content/text inside the tag button
    deleteButton.innerText = 'Delete';

    // Monitor this button 'click' 
    deleteButton.addEventListener('click', () => {
        deleteTask(uptade, id)
    });

    return deleteButton;
}

// Function to delete the task
const deleteTask = (uptade, id) => {
    // Get the data task of the localStorage
    const createdTask = JSON.parse(localStorage.getItem('tasks'));

    // Remove the task
    createdTask.splice(id, 1);

    // Uptade the data task in the localStorage
    localStorage.setItem('tasks', JSON.stringify(createdTask))

    // Uptade the screen
    uptade()
}

export default DeleteButton;