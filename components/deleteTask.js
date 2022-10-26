   
// Function for create the component 'Delete Button'
const DeleteButton = () => {
// Create a html element 'button'
const deleteButton = document.createElement('button');

// Add the content/text inside the tag button
deleteButton.innerText = 'Delete';

// Monitor this button 'click' 
deleteButton.addEventListener('click', deleteTask);
return deleteButton;
}

// Function to delete the task
const deleteTask = (theEvent) => {
    // Take the element that triggered the event
    const deleteButton = theEvent.target;
    
    // Take the parent node of this target element 
    const deletedTask = deleteButton.parentElement;

    // Remove the node from 'DOM tree'
    deletedTask.remove();

    /* Other possibilty to remove the task
        const taskList = deletedTask.parentElement;
        taskList.removeChild(deletedTask);
    */
}

export default DeleteButton;