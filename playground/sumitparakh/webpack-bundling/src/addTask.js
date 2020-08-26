import { getDeleteButton } from "./deleteTask";
import { taskList } from './data';
import { renderTaskList } from "./taskList";

export function addTask(e) {
    if (e.keyCode === 13 && e.target.value) {
        taskList.push(e.target.value);

        renderTaskList();
        e.target.value = '';
        e.target.focus();
    }
}