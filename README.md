# 1823_DOM

This project objective is learning about manipule the DOM - Document Object Manager

The app.js is main javaScript file. The button 'New item' will be selectioned by DOM, and it will be monitoring when it's clicked.
After that, the funcion handleNewItem (in createTask.js) will call.

In the handleNewItem, it will get the input values (date and text content) and assignment a boolen to done task. After the method showTask will call to show all the tasks created and storaged in the localStorage API browser.

The showTask will get the data task in the localStorage, it will be analyse the dates (removing the duplicated dates and sorting them). After, for each unique date, the task item containg the hour and the buttons (complete and delete) will be created.

