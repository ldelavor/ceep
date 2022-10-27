import { handleNewItem } from "./components/handleNewItem.js";
import { showTask } from "./components/showTask.js";

// Obtaining the button ('New item')
const buttonTask = document.querySelector('[data-form-button]');

// Creating a new task after the button click
buttonTask.addEventListener('click', handleNewItem);

// Show the tasks already added in the screen
showTask();