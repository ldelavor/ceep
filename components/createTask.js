import CompleteButton from "./completeTask.js";
import DeleteButton from "./deleteTask.js";
import { showTask } from "./showTask.js";

export const Task = ({inputTask, hourTime, doneCheck}, id) => { // Use object destructuring
    // Create a <li> item in the document hmtl
    const task = document.createElement('li');
   
    // Create the dynamic content (with String Template) that will be add inside the html item <li>
    const taskContent = `<p class="content">${hourTime} * ${inputTask}</p>`;

    // Add the task content inside the <li> node as html
    task.innerHTML = taskContent;

    // Adding classes to the task item (<li>)
    if (doneCheck) {
        task.classList.add('done')
    }
    task.classList.add('task')

    // Add the complete button and delete button. They are attached to the each task created 
    task.appendChild(CompleteButton(showTask, id));
    task.appendChild(DeleteButton(showTask, id));

    return task
}   
