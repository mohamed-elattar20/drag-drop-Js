let textVal = document.getElementById("textVal");
let form = document.getElementById("form");
let inProgressList = document.getElementById("inProgressList");
let onHoldList = document.getElementById("onHoldList");
let inReviewList = document.getElementById("inReviewList");
let approvedList = document.getElementById("approvedList");
let idCounter = 1;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let task = document.createElement("li");
  task.setAttribute("draggable", "true");
  task.setAttribute("id", idCounter++);
  task.innerHTML = textVal.value;
  textVal.value = "";
  textVal.focus();
  inProgressList.append(task);
  task.addEventListener("dragstart", function (e) {
    e.dataTransfer.setData("text", this.id);
    // console.log(`drag start`);
  });
  saveTasks();
});

let tasksSection = document.getElementsByClassName("tasksSection");
// console.log(tasksSection);

for (let i = 0; i < tasksSection.length; i++) {
  tasksSection[i].addEventListener("dragover", function (e) {
    e.preventDefault();
    // console.log(`drag over`);
  });
  tasksSection[i].addEventListener("drop", function (e) {
    e.preventDefault();
    // console.log(`droped`);
    let draggedTaskId = e.dataTransfer.getData("text");
    // console.log(draggedTaskId);
    this.append(document.getElementById(draggedTaskId));
    saveTasks();
  });
}
function saveTasks() {
  const tasks = {
    inProgressList: Array.from(inProgressList.children).map(
      (task) => task.textContent
    ),
    onHoldList: Array.from(onHoldList.children).map((task) => task.textContent),
    inReviewList: Array.from(inReviewList.children).map(
      (task) => task.textContent
    ),
    approvedList: Array.from(approvedList.children).map(
      (task) => task.textContent
    ),
  };
  // console.log(tasks);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
showFromLocalStorage();
function showFromLocalStorage() {
  let tasksObj = JSON.parse(localStorage.getItem("tasks"));
  if (tasksObj?.inProgressList.length > 0) {
    // let coun1 = 1;
    tasksObj?.inProgressList.map((oneTask) => {
      let task = document.createElement("li");
      task.setAttribute("draggable", "true");
      task.setAttribute("id", idCounter++);
      task.innerHTML = oneTask;
      task.addEventListener("dragstart", function (e) {
        e.dataTransfer.setData("text", this.id);
        // console.log(this.id);
      });
      inProgressList.append(task);
      saveTasks();
    });
  }
  if (tasksObj?.onHoldList.length > 0) {
    // let coun2 = 2;
    tasksObj?.onHoldList.map((oneTask) => {
      let task = document.createElement("li");
      task.setAttribute("draggable", "true");
      task.setAttribute("id", idCounter++);
      task.innerHTML = oneTask;
      task.addEventListener("dragstart", function (e) {
        e.dataTransfer.setData("text", this.id);
        // console.log(this.id);
      });
      onHoldList.append(task);
      saveTasks();
    });
  }
  if (tasksObj?.inReviewList.length > 0) {
    // let coun3 = 3;
    tasksObj?.inReviewList.map((oneTask) => {
      let task = document.createElement("li");
      task.setAttribute("draggable", "true");
      task.setAttribute("id", idCounter++);
      task.innerHTML = oneTask;
      task.addEventListener("dragstart", function (e) {
        e.dataTransfer.setData("text", this.id);
        // console.log(this.id);
      });
      inReviewList.append(task);
      saveTasks();
    });
  }
  if (tasksObj?.approvedList.length > 0) {
    // let coun4 = 4;
    tasksObj?.approvedList.map((oneTask) => {
      let task = document.createElement("li");
      task.setAttribute("draggable", "true");
      task.setAttribute("id", idCounter++);
      task.innerHTML = oneTask;
      task.addEventListener("dragstart", function (e) {
        e.dataTransfer.setData("text", this.id);
        // console.log(this.id);
      });
      approvedList.append(task);
      saveTasks();
    });
  }
}
