let tasks = [];

function updateTaskList() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  tasks.forEach((task, i) => {
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item';
    listItem.innerHTML = `
      <span>${task}</span>
      <button class="btn btn-success btn-sm mx-2" onclick="toggleTaskCompleted(${i})">Complete</button>
      <button class="btn btn-warning btn-sm" onclick="editTask(${i})">Edit</button>
      <button class="btn btn-danger btn-sm float-right" onclick="deleteTask(${i})">Delete</button>
    `;
    taskList.appendChild(listItem);
  });
}

function addTask() {
  const taskText = document.getElementById('taskInput').value.trim();
  if (taskText !== '') {
    tasks.push(taskText);
    updateTaskList();
    document.getElementById('taskInput').value = '';
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  updateTaskList();
}

function editTask(index) {
  const updatedTaskText = prompt('Edit task:', tasks[index]);
  if (updatedTaskText !== null && updatedTaskText.trim() !== '') {
    tasks[index] = updatedTaskText.trim();
    updateTaskList();
  }
}

function toggleTaskCompleted(index) {
  tasks[index] = tasks[index].startsWith('✅') ? tasks[index].slice(2) : `✅ ${tasks[index]}`;
  updateTaskList();
}
