import { taskList } from './data';
import { getDeleteButton } from './deleteTask';

export function renderTaskList() {
    const taskListElement = document.getElementById('taskList');
    taskListElement.innerHTML = '';
    
    taskList.map((task, index) => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';

        listItem.append(task);
        listItem.appendChild(getDeleteButton(index));
        taskListElement.appendChild(listItem);
    });
}