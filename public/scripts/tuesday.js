// FRONT END FILE TO INTERACT WITH THE DOM
const chooseDay = document.getElementById('chooseDay');
const inputToDo = document.getElementById("toDo");
const inputWorkout = document.getElementById("workout");
const inputMeal = document.getElementById("meal");
const inputBuy = document.getElementById("buy");
const taskInput = document.querySelectorAll(".taskInput")
const date = new Date();
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
const actualDay = weekday[date.getDay()]
let weekCounter = 1
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
const newWeekTable = () => { 
  if(11 === date.getHours() && 49 === date.getMinutes() && 1 === date.getDay()){
    weekCounter++
  } 
}
setInterval(newWeekTable, 10000);
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
inputToDo.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && inputToDo.value == "") {
        alert("Write something")
    } else {
        if (e.key === 'Enter') {
            addTask({table: chooseDay.innerHTML, column: "todo", data:inputToDo.value});
            let newTask = `<li class="inputDisplay"><p>${inputToDo.value}</p><i class="fas fa-times-circle redHover"></i></li>`
            taskInput[0].insertAdjacentHTML("beforeend", newTask)
            inputToDo.value = ""
            // sortable
            let sortTask = document.getElementById("toDoInput")
            let sortable = Sortable.create(sortTask, {animation: 100, ghostClass: 'myghostclass', dragClass: 'sortable-drag',
          	onChange: function(evt) {
            console.log(evt.newIndex) 
            }})
            // delete
            let deleteBtn = document.querySelectorAll(".redHover")
            deleteBtn.forEach(element => {
                element.addEventListener("click", (closeBtn) => {
                    let taskRemove = closeBtn.target.previousSibling
                    deleteTheTask({table:chooseDay.innerHTML, column: "todo", data:taskRemove.innerHTML})
                    taskRemove.parentNode.remove()
                    })
            });
        }   
    }
}) 
    
// Workout 
inputWorkout.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && inputWorkout.value == "") {
        alert("Write something")
    } else {
        if (e.key === 'Enter') {
            addTask({table: chooseDay.innerHTML, column: "workout", data:inputWorkout.value});
            let newTask = `<li class="inputDisplay"><p>${inputWorkout.value}</p><i class="fas fa-times-circle redHover"></i></li>`
            taskInput[1].insertAdjacentHTML("beforeend", newTask) 
            inputWorkout.value = ""
            // sortable
            let sortTask = document.getElementById("workoutInput")
            let sortable = Sortable.create(sortTask, {animation: 100, ghostClass: 'myghostclass', dragClass: 'sortable-drag',
          	onChange: function(evt) {
            console.log(evt.newIndex) 
            }})
            // delete
            let deleteBtn = document.querySelectorAll(".redHover")
            deleteBtn.forEach(element => {
                element.addEventListener("click", (closeBtn) => {
                    let taskRemove = closeBtn.target.previousSibling
                    deleteTheTask({table:chooseDay.innerHTML, column:"workout", data:taskRemove.innerHTML})
                    taskRemove.parentNode.remove()
                    })
            });
        }   
    } 
})
// Meal 
inputMeal.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && inputMeal.value == "") {
        alert("Write something")
    } else {
        if (e.key === 'Enter') {
            addTask({table: chooseDay.innerHTML, column: "meal", data:inputMeal.value});
            let newTask =  `<li class="inputDisplay"><p>${inputMeal.value}</p><i class="fas fa-times-circle redHover"></i></li>`
            taskInput[2].insertAdjacentHTML("beforeend", newTask)
            inputMeal.value = ""
            // sortable
            let sortTask = document.getElementById("mealInput")
            let sortable = Sortable.create(sortTask, {animation: 100, ghostClass: 'myghostclass', dragClass: 'sortable-drag',
          	onChange: function(evt) {
            console.log(evt.newIndex) 
            }})
            // delete
            let deleteBtn = document.querySelectorAll(".redHover")
            deleteBtn.forEach(element => {
                element.addEventListener("click", (closeBtn) => {
                    let taskRemove = closeBtn.target.previousSibling
                    deleteTheTask({table:chooseDay.innerHTML, column:"meal", data:taskRemove.innerHTML})
                    taskRemove.parentNode.remove()
                    })
            });              
        }   
    } 
})
// Buy 
inputBuy.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && inputBuy.value == "") {
        alert("Write something")
    } else {
        if (e.key === 'Enter') {
            addTask({table: chooseDay.innerHTML, column: "buy", data:inputBuy.value});
            let newTask = `<li class="inputDisplay"><p>${inputBuy.value}</p><i class="fas fa-times-circle redHover"></i></li>`
            taskInput[3].insertAdjacentHTML("beforeend", newTask)
            inputBuy.value = ""
            // sortable
            let sortTask = document.getElementById("buyInput")
            let sortable = Sortable.create(sortTask, {animation: 100, ghostClass: 'myghostclass', dragClass: 'sortable-drag',
          	onChange: function(evt) {
            console.log(evt.newIndex) 
            }})
            // delete
            let deleteBtn = document.querySelectorAll(".redHover")
            deleteBtn.forEach(element => {
                element.addEventListener("click", (closeBtn) => {
                    let taskRemove = closeBtn.target.previousSibling
                    deleteTheTask({table:chooseDay.innerHTML, column:"buy", data:taskRemove.innerHTML})
                    taskRemove.parentNode.remove()
                    })
            }); 
        }   
    } 
})

const displayTask = (data) => {
  data.allTaskTuesday.forEach(el => {
    if(el.todo != null){
    let newTask = `<li class="inputDisplay"><p>${el.todo}</p><i class="fas fa-times-circle redHover"></i></li>`
    taskInput[0].insertAdjacentHTML("beforeend", newTask)
    // sortable
    let sortTask = document.getElementById("toDoInput")
    let sortable = Sortable.create(sortTask, {animation: 100, ghostClass: 'myghostclass', dragClass: 'sortable-drag',
    onChange: function(evt) {
    console.log(evt.newIndex) 
    }})
    }
  });
  data.allTaskTuesday.forEach(el => {
    if(el.workout != null){
    let newTask = `<li class="inputDisplay"><p>${el.workout}</p><i class="fas fa-times-circle redHover"></i></li>`
    taskInput[1].insertAdjacentHTML("beforeend", newTask)
    // sortable
    let sortTask = document.getElementById("workoutInput")
    let sortable = Sortable.create(sortTask, {animation: 100, ghostClass: 'myghostclass', dragClass: 'sortable-drag',
    onChange: function(evt) {
    console.log(evt.newIndex) 
    }})
    }
  });
  data.allTaskTuesday.forEach(el => {
    if(el.meal != null){
    let newTask = `<li class="inputDisplay"><p>${el.meal}</p><i class="fas fa-times-circle redHover"></i></li>`
    taskInput[2].insertAdjacentHTML("beforeend", newTask)
    // sortable
    let sortTask = document.getElementById("mealInput")
    let sortable = Sortable.create(sortTask, {animation: 100, ghostClass: 'myghostclass', dragClass: 'sortable-drag',
    onChange: function(evt) {
    console.log(evt.newIndex) 
    }})
    }
  });
  data.allTaskTuesday.forEach(el => {
    if(el.buy != null){
    let newTask = `<li class="inputDisplay"><p>${el.buy}</p><i class="fas fa-times-circle redHover"></i></li>`
    taskInput[3].insertAdjacentHTML("beforeend", newTask)
    // sortable
    let sortTask = document.getElementById("buyInput")
    let sortable = Sortable.create(sortTask, {animation: 100, ghostClass: 'myghostclass', dragClass: 'sortable-drag',
    onChange: function(evt) {
    console.log(evt.newIndex) 
    }})
    }
  });
  let deleteBtn = document.querySelectorAll(".redHover")
  deleteBtn.forEach(element => {
    element.addEventListener("click", (closeBtn) => {
        let taskRemove = closeBtn.target.previousSibling
        deleteTheTask({table:chooseDay.innerHTML, column:"todo", data:taskRemove.innerHTML})
        deleteTheTask({table:chooseDay.innerHTML, column:"workout", data:taskRemove.innerHTML})
        deleteTheTask({table:chooseDay.innerHTML, column:"meal", data:taskRemove.innerHTML})
        deleteTheTask({table:chooseDay.innerHTML, column:"buy", data:taskRemove.innerHTML})
        taskRemove.parentNode.remove()
        })
}); 
}







const addTask = (infos) => {
    fetch('api/addtask', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(infos),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }


  const loadtask = () => {
    fetch('api/loadtask', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      displayTask(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    
  }
  loadtask();

const deleteTheTask = (info) => {
    fetch('api/deletetask', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(info),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    })
  }
// Take activies input end
