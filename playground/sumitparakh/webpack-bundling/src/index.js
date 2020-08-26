import { addTask } from './addTask';

window.onload = () => {
    var taskElement = document.getElementById('task');
    taskElement.onkeydown = addTask
};