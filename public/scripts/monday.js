// FRONT END FILE TO INTERACT WITH THE DOM
const chooseDay = document.getElementById('chooseDay');
const inputToDo = document.getElementById("toDo");
const inputWorkout = document.getElementById("workout");
const inputMeal = document.getElementById("meal");
const inputBuy = document.getElementById("buy");
const taskInput = document.querySelectorAll(".taskInput")
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
let w =0;
let x =100;
let y=200;
let z=300;  

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
inputToDo.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && inputToDo.value == "") {
        alert("Write something")
    } else {
        if (e.key === 'Enter') {
            w++;
            addTask({table: chooseDay.innerHTML, column: "todo", data:inputToDo.value, id: w});
            let newTask = `<li class="inputDisplay" data-id=${w}><p>${inputToDo.value}</p><i class="fas fa-times-circle redHover"></i></li>`
            taskInput[0].insertAdjacentHTML("beforeend", newTask)
            inputToDo.value = ""
            // sortable
            let sortTask = document.getElementById("toDoInput")
            let sortable = Sortable.create(sortTask, {animation: 100, ghostClass: 'myghostclass', dragClass: 'sortable-drag',
          	onChange: function(evt) {
            console.log(evt.newIndex)
            let idCondition = "id";
            updatePlace(idCondition);  
            }})
            // delete
            let deleteBtn = document.querySelectorAll(".redHover")
            deleteBtn.forEach(element => {
                element.addEventListener("click", (closeBtn) => {
                    let taskRemove = closeBtn.target.parentNode
                    deleteTheTask({table:chooseDay.innerHTML, column: "id", data:taskRemove.dataset.id})
                    taskRemove.remove()
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
            x++;
            addTask({table: chooseDay.innerHTML, column: "workout", data:inputWorkout.value, id: x});
            let newTask = `<li class="inputDisplay" data-id=${x}><p>${inputWorkout.value}</p><i class="fas fa-times-circle redHover"></i></li>`
            taskInput[1].insertAdjacentHTML("beforeend", newTask) 
            inputWorkout.value = ""
            // sortable
            let sortTask = document.getElementById("workoutInput")
            let sortable = Sortable.create(sortTask, {animation: 100, ghostClass: 'myghostclass', dragClass: 'sortable-drag',
          	onChange: function(evt) {
            console.log(evt.newIndex)
            let idCondition = "id";
            updatePlace(idCondition);  
            }})
            // delete
            let deleteBtn = document.querySelectorAll(".redHover")
            deleteBtn.forEach(element => {
                element.addEventListener("click", (closeBtn) => {
                    let taskRemove = closeBtn.target.parentNode
                    deleteTheTask({table:chooseDay.innerHTML, column:"id", data:taskRemove.dataset.id})
                    taskRemove.remove()
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
            y++;
            addTask({table: chooseDay.innerHTML, column: "meal", data:inputMeal.value, id: y});
            let newTask =  `<li class="inputDisplay" data-id=${y}><p>${inputMeal.value}</p><i class="fas fa-times-circle redHover"></i></li>`
            taskInput[2].insertAdjacentHTML("beforeend", newTask)
            inputMeal.value = ""
            // sortable
            let sortTask = document.getElementById("mealInput")
            let sortable = Sortable.create(sortTask, {animation: 100, ghostClass: 'myghostclass', dragClass: 'sortable-drag',
          	onChange: function(evt) {
            console.log(evt.newIndex)
            let idCondition = "id";
            updatePlace(idCondition); 
            }})
            // delete
            let deleteBtn = document.querySelectorAll(".redHover")
            deleteBtn.forEach(element => {
                element.addEventListener("click", (closeBtn) => {
                    let taskRemove = closeBtn.target.parentNode
                    deleteTheTask({table:chooseDay.innerHTML, column:"id", data:taskRemove.dataset.id})
                    taskRemove.remove()
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
            z++;
            addTask({table: chooseDay.innerHTML, column: "buy", data:inputBuy.value, id: z});
            let newTask = `<li class="inputDisplay" data-id=${z}><p>${inputBuy.value}</p><i class="fas fa-times-circle redHover"></i></li>`
            taskInput[3].insertAdjacentHTML("beforeend", newTask)
            inputBuy.value = ""
            // sortable
            let sortTask = document.getElementById("buyInput")
            let sortable = Sortable.create(sortTask, {animation: 100, ghostClass: 'myghostclass', dragClass: 'sortable-drag',
          	onChange: function(evt) {
            console.log(evt.newIndex) 
            let idCondition = "id";
            updatePlace(idCondition); 
            }}) 
            // delete
            let deleteBtn = document.querySelectorAll(".redHover")
            deleteBtn.forEach(element => {
                element.addEventListener("click", (closeBtn) => {
                    let taskRemove = closeBtn.target.parentNode
                    deleteTheTask({table:chooseDay.innerHTML, column:"id", data:taskRemove.dataset.id})
                    taskRemove.remove()
                    })
            }); 
        }   
    } 
})


const displayTask = (data) => {
  data.allTaskMonday.forEach(el => {
    if(el.todo != null){
    let newTask = `<li class="inputDisplay" data-id=${el.monday_id}><p>${el.todo}</p><i class="fas fa-times-circle redHover"></i></li>`
    taskInput[0].insertAdjacentHTML("beforeend", newTask)
    // sortable
    let sortTask = document.getElementById("toDoInput")
    let sortable = Sortable.create(sortTask, {animation: 100, ghostClass: 'myghostclass', dragClass: 'sortable-drag',
  	onChange: function(evt) {
      let idCondition = "monday_id";
    evt.newIndex;
      
      updatePlace(idCondition);
      //updatePlace({table: "monday",id: evt.item.dataset.id, place:evt.newIndex, condition:"monday_id"});
    }})
    
    //console.log({table: "monday", id: el.monday_id, place: , condition: "monday_id"})
    /*updatePlace*/  
  }});
  data.allTaskMonday.forEach(el => {
    if(el.workout != null){
    let newTask = `<li class="inputDisplay" data-id=${el.monday_id}><p>${el.workout}</p><i class="fas fa-times-circle redHover"></i></li>`
    taskInput[1].insertAdjacentHTML("beforeend", newTask)
    // sortable
    let sortTask = document.getElementById("workoutInput")
    let sortable = Sortable.create(sortTask, {animation: 100, ghostClass: 'myghostclass', dragClass: 'sortable-drag',
  	onChange: function(evt) {
    console.log(evt.newIndex)
    let idCondition = "monday_id";
    updatePlace(idCondition);
    }})
    }
  });
  data.allTaskMonday.forEach(el => {
    if(el.meal != null){
    let newTask = `<li class="inputDisplay" data-id=${el.monday_id}><p>${el.meal}</p><i class="fas fa-times-circle redHover"></i></li>`
    taskInput[2].insertAdjacentHTML("beforeend", newTask)
    // sortable
    let sortTask = document.getElementById("mealInput")
    let sortable = Sortable.create(sortTask, {animation: 100, ghostClass: 'myghostclass', dragClass: 'sortable-drag',
  	onChange: function(evt) {
    console.log(evt.newIndex)
    let idCondition = "monday_id";
    updatePlace(idCondition);
    }})
    }
  });
  data.allTaskMonday.forEach(el => {
    if(el.buy != null){
    let newTask = `<li class="inputDisplay" data-id=${el.monday_id}><p>${el.buy}</p><i class="fas fa-times-circle redHover"></i></li>`
    taskInput[3].insertAdjacentHTML("beforeend", newTask)
    // sortable
    let sortTask = document.getElementById("buyInput")
    let sortable = Sortable.create(sortTask, {animation: 100, ghostClass: 'myghostclass', dragClass: 'sortable-drag',
  	onChange: function(evt) {
    console.log(evt.newIndex)
    let idCondition = "monday_id";
    updatePlace(idCondition);
    }})
    }
  });
  let deleteBtn = document.querySelectorAll(".redHover")
  deleteBtn.forEach(element => {
    element.addEventListener("click", (closeBtn) => {
        let taskRemove = closeBtn.target.parentNode
        console.log(taskRemove.dataset.id);
        deleteTheTask({table:chooseDay.innerHTML, column:"monday_id", data: taskRemove.dataset.id})
        taskRemove.remove()
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

  const updatePlace = (infos) => {
    let inputDisplay = document.querySelectorAll('.inputDisplay');
    for(let i =0; i<inputDisplay.length; i++){
      fetch('api/updateplace', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({table: "monday",id: inputDisplay[i].dataset.id, place:i, condition:infos}),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }
    
  }
// Take activies input end
