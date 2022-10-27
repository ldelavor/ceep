import { showTask } from "./showTask.js";

export const handleNewItem = (event) => {
    // Prevent the event default behavior of the form - to send data
    event.preventDefault(); 

    // Create an array to storage the tasks already created
    const tasksCreated = JSON.parse(localStorage.getItem('tasks')) || [];

    // Obtain the written text in the input
    const inputToNewTask = document.querySelector('[data-form-input]');
    const inputTask = inputToNewTask.value;

    // Obtain the chosen date
    const timetable = document.querySelector('[data-form-date]');
    const dateChoosen = moment(timetable.value);
    const dateFormatted = dateChoosen.format('DD/MM/YYYY');
    const hourTime = dateChoosen.format('HH:mm');
    const doneCheck = false;

    // Create an object containing the data needed to create a new task
    const dataToNewTask = {
        inputTask,
        dateFormatted,
        hourTime,
        doneCheck
    }

    // Update the task array
    const tasksUptade = [...tasksCreated, dataToNewTask];

    // Uptade the list of task in the localStorage 
    localStorage.setItem('tasks', JSON.stringify(tasksUptade));

    // Cleaning the input after created the new task
    inputToNewTask.value = "";

    // Show the tasks already added
    showTask()
}