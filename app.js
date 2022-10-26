import CompleteButton from "./components/completeTask.js";
import DeleteButton from "./components/deleteTask.js";

const createTask = (theEvent) => {
    // Prevent the event default behavior of the form - to send data
    theEvent.preventDefault(); 

    // Obtain the written text in the input.value
    const inputTask = document.querySelector('[data-form-input]');

    // Obtain the task list (<ul>)
    const taskList = document.querySelector('[data-taskList]')

    // Create a <li> item in the document hmtl
    const task = document.createElement('li');

    // Create the dynamic content (with String Template) that will be add inside the html item <li>
    const taskContent = `<p class="content"> ${inputTask.value} </p>`;

    // Add the task content inside the <li> node as html
    task.innerHTML = taskContent;

    // Add a class to the task item (<li>)
    task.classList.add('task')

    // Add the complete button and delete button. They are attached to the each task created 
    task.appendChild(CompleteButton());
    task.appendChild(DeleteButton());

    // Add the task (<li>: node child) to the task list (<ul>: node parent)
    taskList.appendChild(task);

    // Cleaning the input after added the new task
    inputTask.value = "";
}   

// Obtaining the button ('New item')
const buttonTask = document.querySelector('[data-form-button]');
buttonTask.addEventListener('click', createTask);
