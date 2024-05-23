function addTask() {
    var taskInput = document.getElementById("taskInput");
    var dueDate = document.getElementById("dueDate").value;
    var priority = document.getElementById("priority").value;
    var taskText = taskInput.value.trim();
    if (taskText !== "") {
      var taskList = document.getElementById("taskList");
      var taskItem = document.createElement("li");
      taskItem.innerHTML = `
        <input type="checkbox" class="task-checkbox" onchange="completeTask(this)">
        <span>${taskText}</span>
        <span class="due-date">Due: ${dueDate}</span>
        <span class="priority">Priority: ${priority}</span>
        <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
      `;
      taskList.appendChild(taskItem);
      taskInput.value = "";
    }
  }
  
  function deleteTask(btn) {
    var taskItem = btn.parentNode;
    taskItem.remove();
  }
  
  function completeTask(checkbox) {
    var taskText = checkbox.nextSibling;
    if (checkbox.checked) {
      taskText.style.textDecoration = "line-through";
    } else {
      taskText.style.textDecoration = "none";
    }
  }
  
  
  