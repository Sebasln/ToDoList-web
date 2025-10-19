document.addEventListener('DOMContentLoaded', function () {

    const addTask = document.getElementById('addTask');
    const taskMakerDiv = document.querySelector(".taskMakerDiv");

    addTask.addEventListener('click', function () {
        taskMakerDiv.classList.toggle('visible');
        
    });



/**`<div class="task ">
                    <h1>nigga1</h1>
                    <p>nigga2</p>
                    <div>
                        <button>Edit</button>
                        <button>Delete</button>
                        <select name="changeState" id="changeState">
                            <option value="">op1</option>
                            <option value="">op2</option>
                        </select>
                    </div>
                </div>` */
});