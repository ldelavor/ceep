// Function for create a component 'Conclude Button'
const CompleteButton = () => {
    // Create a html element 'button'
    const completeButton = document.createElement('button');

    // Add the CSS class to the button created
    completeButton.classList.add('check-button');

    // Add the content/text inside the tag button
    completeButton.innerText = 'Complete';

    // Monitor this button 'click' 
    completeButton.addEventListener('click', completeTask);
    return completeButton;
}

// Function to modify something in the task when it's complete.
const completeTask = (theEvent) => {
    // Take the element that triggered the event
    const completeButton = theEvent.target;
    
    // Take the parent node of this target element 
    const completedTask = completeButton.parentElement;

    // Add the CSS style to the task item when the event 'click' is triggered
    completedTask.classList.toggle('done');
}

export default CompleteButton;