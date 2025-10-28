document.addEventListener('DOMContentLoaded', function () {

    const addTask = document.getElementById('addTask');
    const taskMakerDiv = document.querySelector(".taskMakerDiv");

    const titleInput = document.getElementById('title');
    const descriptionInput = document.getElementById('description');
    const selectInput = document.getElementById('taskState');
    const addTaskButton = document.getElementById('add');

    const toDoDiv = document.getElementById("toDo");
    const doingDiv = document.getElementById("doing");
    const doneDiv = document.getElementById("done");


    addTask.addEventListener('click', function () {
        taskMakerDiv.classList.toggle('visible');
    });

    addTaskButton.addEventListener('click', function () {
        const titleValue = titleInput.value;
        const descriptionValue = descriptionInput.value;
        const selectValue = selectInput.value;

        if (selectValue == "ToDo") {
            toDoDiv.innerHTML += `<div class="task ">
                    <h1>${titleValue}</h1>
                    <p>${descriptionValue}</p>
                    <div>
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>
                    <div>
                        <button>Doing ></button>
                        <button>Done >></button>
                    </div>
                </div>` ;
        } else if (selectValue == "Doing") {
            doingDiv.innerHTML += `<div class="task ">
                    <h1>${titleValue}</h1>
                    <p>${descriptionValue}</p>
                    <div>
                        <button>Edit</button>
                        <button>Delete</button>                    
                    </div>
                    <div>
                        <button>< To Do</button>
                        <button>Done ></button>
                    </div>
                </div>` ;
        } else {
            doneDiv.innerHTML += `<div class="task ">
                    <h1>${titleValue}</h1>
                    <p>${descriptionValue}</p>
                    <div>
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>
                    <div>
                        <button>< Doing</button>
                        <button><< To do</button>
                    </div>
                </div>` ;
        }

    });







});