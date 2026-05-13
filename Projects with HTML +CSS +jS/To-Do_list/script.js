console.log("====Operation 1====");

var taskInput = document.getElementById("taskInput");
var addBtn = document.getElementById("addBtn");
var taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

function addTask() {
    var taskValue = taskInput.value.trim();

    if (taskValue === "") {
        alert("Please Enter Task");
        return;
    }

    var li = document.createElement("li");

    li.className = "list-group-item";

    li.innerHTML =
        `
        <span class="task-text">${taskValue}</span>

        <div class="task-buttons">

            <button class="complete-btn">
                <i class="bi bi-check-lg"></i>
            </button>

            <button class="delete-btn">
                <i class="bi bi-trash"></i>
            </button>

        </div>
    `;

    taskList.appendChild(li);

    var completeBtn = li.querySelector(".complete-btn");
    var deleteBtn = li.querySelector(".delete-btn");
    var taskText = li.querySelector(".task-text");

    completeBtn.addEventListener("click", function () {
        taskText.classList.toggle("completed");
    });

    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    taskInput.value = "";
}