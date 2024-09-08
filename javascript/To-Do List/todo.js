
function addTask() {
    
    var tasker = document.getElementById('tasker-name');
    var taskText = tasker.value.trim(); // Get task text and remove spaces
    var taskInput = document.getElementById('task-input');
    var taskText = taskInput.value.trim(); // Get task text and remove spaces
  
    if (taskText && tasker === '') {
        alert('Please enter a task!'); // Alert if task is empty
        return;
      }
    
      var taskList = document.getElementById('task-list'); // Get the task list element
      var nameList = document.getElementById('tasker-name');
      var li = document.createElement('li'); // Create a new list item
      li.textContent = taskText; // Set the task text to the list item
    
      var deleteBtn = document.createElement('button'); // Create a delete button
      deleteBtn.textContent = 'Delete'; // Set button text
      deleteBtn.onclick = function() {
        taskList.removeChild(li); // Delete the task when the button is clicked
      };
    
      li.appendChild(deleteBtn); // Add the delete button to the list item
      taskList.appendChild(li); // Add the list item to the task list
    
      taskInput.value = ''; // Clear the input field after adding the task
}
    