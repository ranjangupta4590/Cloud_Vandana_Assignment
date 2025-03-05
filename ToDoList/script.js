window.onload = function() {
    loadTasks();
};

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    const li = createTaskElement(taskText);
    taskList.appendChild(li);

    saveTask(taskText);

    taskInput.value = '';
}

//new task
function createTaskElement(taskText) {
    const li = document.createElement('li');

    const span = document.createElement('span');
    span.textContent = taskText;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.onclick = () => {
        li.remove();
        removeTask(taskText);
    };

    li.appendChild(span);
    li.appendChild(removeBtn);
    return li;
}

// Save task to localStorage
function saveTask(taskText) {
    const tasks = getTasks();
    tasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Remove task from localStorage
function removeTask(taskText) {
    const tasks = getTasks().filter(task => task !== taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Load all tasks
function loadTasks() {
    const taskList = document.getElementById('taskList');
    const tasks = getTasks();

    tasks.forEach(taskText => {
        const li = createTaskElement(taskText);
        taskList.appendChild(li);
    });
}

function getTasks() {
    return JSON.parse(localStorage.getItem('tasks')) || [];
}
