import { Task } from "./createTask.js";

export const createDateItems = (date) => {
    // Get the data tasks created
    const createdTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    
    // Create a HTML element <li>
    const topDate = document.createElement('li');

    // Create the content to the element <li> created 
    const dateContent = `<p class="content-data"> ${moment(date, 'DD/MM/YYYY').format('DD/MM/YYYY')} </p>`;

    // Add a date content inside the HTML <li> created
    topDate.innerHTML = dateContent;

    // For each item <li> of date, the tasks items attached on this date (an other <li> element) will be include in.
    createdTasks.forEach((task, id) => {
        // Take just the date of the task evaluated
        const day = task.dateFormatted;
        // Verify the difference between the date of the list being created and the tasks date 
        const diff = moment(date, 'DD/MM/YYYY').format('YYYYMMDD') - moment(day, 'DD/MM/YYYY').format('YYYYMMDD')

        // Add the task with the same date
        if (diff == 0) {
            // Add 'the <li> task' inside 'the <li> date'
            topDate.appendChild(Task(task, id)) 
        }
    })
    
    return topDate
}