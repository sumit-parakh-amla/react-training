import { taskList } from "./data";
import { renderTaskList } from "./taskList";

export function getDeleteButton(index) {
    const deleteBtn = document.createElement('i');
    deleteBtn.className = 'fa fa-trash float-right';
    deleteBtn.dataset['index'] = index;
    deleteBtn.onclick = deleteImage;
    return deleteBtn;
}

function deleteImage(e) {
    taskList.splice(e.target.dataset.index, 1);
    renderTaskList();
}