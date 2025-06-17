const taskContainer = document.getElementById('taskContainer');
const addBtn = document.getElementById('addBtn');
const addSpecialBtn = document.getElementById('addSpecialBtn');
const addImageBtn = document.getElementById('addImageBtn');
const deleteBtn = document.getElementById('deleteBtn');
let taskCounter = 1;
function addTask(text = null) {
    const task = document.createElement('div');
    task.className = 'task';
    const taskText = document.createElement('p');
    taskText.textContent = text || `Tarea ${taskCounter++}`;
    const removeBtn = document.createElement('button');
    removeBtn.className = 'remove-btn';
    removeBtn.textContent = '×';
    removeBtn.onclick = function() {
        task.remove();
    };
    task.appendChild(removeBtn);
    task.appendChild(taskText);
    taskContainer.appendChild(task);
}
function addTaskWithImage() {
    const task = document.createElement('div');
    task.className = 'task';
    const taskText = document.createElement('p');
    taskText.textContent = `Tarea con imagen ${taskCounter++}`;
    const image = document.createElement('img');
    image.className = 'task-image';
    image.src = 'https://via.placeholder.com/150';
    image.alt = 'Imagen de tarea';
    const removeBtn = document.createElement('button');
    removeBtn.className = 'remove-btn';
    removeBtn.textContent = '×';
    removeBtn.onclick = function() {
        task.remove();
    };
    task.appendChild(removeBtn);
    task.appendChild(taskText);
    task.appendChild(image);
    taskContainer.appendChild(task);
}
function deleteLastTask() {
    const tasks = document.querySelectorAll('.task');
    if (tasks.length > 0) {
        tasks[tasks.length - 1].remove();
        if (taskCounter > 1) taskCounter--;
    }
}
addBtn.addEventListener('click', () => addTask());
addSpecialBtn.addEventListener('click', () => addTask('Tarea Especial')); 
addImageBtn.addEventListener('click', addTaskWithImage); 
deleteBtn.addEventListener('click', deleteLastTask);