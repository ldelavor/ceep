import { orderDate, removeDuplicated } from '../services/filterDate.js';
import { createDateItems } from './createDateItems.js';

export const showTask = () => {
    // Obtain the task list (<ul>)
    const taskList = document.querySelector('[data-taskList]');

    // Get the datatask in localStorage
    const createdTask = JSON.parse(localStorage.getItem('tasks')) || [];

    // Clean the HTML content in <ul> (tasks list) 
    taskList.innerHTML = "";

    // Remove the duplicated dates => Organise the same tasks inside the respective date node <li> 
    const uniqueDate = removeDuplicated(createdTask);

    // Sort the dates
    orderDate(uniqueDate);

    // Add the date item (<li>: node child) containg all the day task to the task list (<ul>: node parent)
    uniqueDate.forEach((day) => {
        taskList.appendChild(createDateItems(day)); 
    })
}