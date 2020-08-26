window.onload = function () {
    var taskList = [];
    var taskElement = document.getElementById('task');
    var taskListElement = document.getElementById('taskList');

    function renderList() {
        taskListElement.innerHTML = '';
        for (var i = 0; i < taskList.length; i++) {
            var listItem = document.createElement('li');
            listItem.className = 'list-group-item';
            listItem.append(taskList[i]);
            var deleteBtn = document.createElement('i');
            deleteBtn.className = 'fa fa-trash float-right';
            deleteBtn.dataset['index'] = i;
            deleteBtn.onclick = function (e) {
                taskList.splice(e.target.dataset.index, 1);
                renderList();
            }
            listItem.appendChild(deleteBtn);
            taskListElement.appendChild(listItem);
        }
    }

    taskElement.onkeydown = function (e) {
        if (e.keyCode === 13 && e.target.value) {
            taskList.push(e.target.value);
            console.log({taskList, value: e.target.value});
            renderList();
            e.target.value = '';
            e.target.focus();
        }
    }
}
