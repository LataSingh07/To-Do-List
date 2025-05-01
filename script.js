let tasks = [];

function Addtask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();

    if (taskText === '') return;

    const task = { text: taskText, completed: false };
    tasks.push(task);
    input.value = '';
    renderTasks();
}

function renderTasks(filter = 'all') {
    const list = document.getElementById('tasklist');
    list.innerHTML = '';

    const filtered = tasks.filter(task => {
        if (filter === 'all') return true;
        return filter === 'completed' ? task.completed : !task.completed;
    });

    filtered.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task.text;
        li.style.textDecoration = task.completed ? 'line-through' : 'none';
        li.onclick = () => {
            tasks[index].completed = !tasks[index].completed;
            renderTasks(filter);
        };
        list.appendChild(li);
    });
}

function setfilter(filter) {
    renderTasks(filter);
}
