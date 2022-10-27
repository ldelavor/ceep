// Function for create a component 'Conclude Button'
const CompleteButton = (update, id) => {
    // Create a html element 'button'
    const completeButton = document.createElement('button');

    // Add the CSS class to the button created
    completeButton.classList.add('check-button');

    // Add the content/text inside the tag button
    completeButton.innerText = 'Complete';

    // Monitoring the button 'click' 
    completeButton.addEventListener('click', () => {
        completeTask(update, id);
    });

    return completeButton;
}

// Function to modify something in the task when it's complete.
const completeTask = (uptade, id) => {
    // Get the data task of the localStorage
    const createTask = JSON.parse(localStorage.getItem('tasks'));

    // Change the doneCheck value
    createTask[id].doneCheck = !createTask[id].doneCheck;

    // Uptade the data task in the localStorage
    localStorage.setItem('tasks', JSON.stringify(createTask));
    
    // Uptade the screen
    uptade();
}

export default CompleteButton;