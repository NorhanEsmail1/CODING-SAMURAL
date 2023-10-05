
  var selectedValue;
  $(document).ready(function() {
    $('.dropdown-item').click(function() {
      selectedValue = $(this).data('value');
      $('#dropdown').text(selectedValue);
      if (selectedValue == 'Importance') {
        $('#addTask').prop('disabled', true);
        alert("Choose the importance of your Task!!!");
      } else {
        
        $('#addTask').prop('disabled', false);
        $('#taskInput').val(selectedValue);
      }
    });
  });

document.querySelector("#addTask").onclick = function () {
    var input = document.querySelector("#input");
    var taskName = input.value.trim();

    if (taskName.length === 0) {
      alert("Kindly Enter Task Name!!!!");
    } else {
      var taskElement = document.createElement("div");
      taskElement.className = "task";
      taskElement.innerHTML = `
        <span class="task-name form-control form-control-lg d-flex align-items-center">
          <input id="check" type="checkbox">
          <label id="list" for="check">${taskName}</label>
          <div class="ml-auto">
          <label  id="droplist" for="check">${selectedValue}</label>
            <button class="edit btn btn-primary btn-sm" type="button">Edit</button>
            <button class="delete btn btn-primary btn-sm" type="button">Delete</button>
          </div>
        </span>
      `;
       
      var tasksContainer = document.querySelector("#tasks");
      tasksContainer.appendChild(taskElement);
      input.value = "";
  
      var deleteButton = taskElement.querySelector(".delete");
      deleteButton.onclick = function () {
        taskElement.remove();
      };
      
      var checkButton = taskElement.querySelector("#check");
      checkButton.onchange = function () {
        var taskLabel = taskElement.querySelector("label");
        if (checkButton.checked) {
          taskLabel.style.textDecoration = "line-through";
        } else {
          taskLabel.style.textDecoration = "none";
        }
      };

      var editButton = taskElement.querySelector(".edit");
      var taskNameElement = taskElement.querySelector(".task-name");
  
      editButton.onclick = function () {
        var modal = document.getElementById("myModal");
        var editInput = document.getElementById("editInput");
        var saveButton = document.getElementById("saveButton");
        var cancelButton = document.getElementById("cancelButton");
  
        editInput.value = taskNameElement.querySelector("label").textContent;
        modal.style.display = "block";
  
        saveButton.onclick = function () {
          var updatedContent = editInput.value.trim();
          if (updatedContent.length === 0) {
            alert("Kindly Enter Task Name!!!!");
            return;
          } else {
            var newLabel = taskNameElement.querySelector("label");
            newLabel.textContent = updatedContent;
            modal.style.display = "none";
          }
        };
  
        cancelButton.onclick = function () {
          modal.style.display = "none";
        };
      };
    }
  };
  
  // Close the modal when clicking outside of it
  window.onclick = function (event) {
    var modal = document.getElementById("myModal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
