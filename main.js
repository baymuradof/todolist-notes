const adderFormEL = document.querySelector("#adder-form");
const adderInputEl = document.querySelector("#create-task")
const notelistTAsksEl = document.querySelector("#notelist-tasks")

adderFormEL.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(adderInputEl.value);
    const taskEl = document.createElement("div");
    taskEl.innerHTML = adderInputEl.value;
    notelistTAsksEl.appendChild(taskEl)
    console.log
})