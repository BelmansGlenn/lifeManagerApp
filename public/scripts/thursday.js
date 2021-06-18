// FRONT END FILE TO INTERACT WITH THE DOM
const chooseDay = document.getElementById('chooseDay');
const inputToDo = document.getElementById("toDo");
const inputWorkout = document.getElementById("workout");
const inputMeal = document.getElementById("meal");
const inputBuy = document.getElementById("buy");
const taskInput = document.querySelectorAll(".taskInput")


inputToDo.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && inputToDo.value == "") {
        alert("Write something")
    } else {
        if (e.key === 'Enter') {
            addTask({table: chooseDay.innerHTML, column: "todo", data:inputToDo.value});
            let newTask = `<article class="inputDisplay"><p>${inputToDo.value}</p><i class="fas fa-times-circle redHover"></i></article>`
            taskInput[0].insertAdjacentHTML("beforeend", newTask)
            inputToDo.value = "" 
            // delete
            let deleteBtn = document.querySelectorAll(".redHover")
            deleteBtn.forEach(element => {
                element.addEventListener("click", (closeBtn) => {
                    let taskRemove = closeBtn.target.previousSibling
                    deleteTheTask({table:chooseDay.innerHTML, column:workout, data:taskRemove.innerHTML})
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
            let newTask = `<article class="inputDisplay"><p>${inputWorkout.value}</p><i class="fas fa-times-circle redHover"></i></article>`
            taskInput[1].insertAdjacentHTML("beforeend", newTask) 
            inputWorkout.value = ""
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
            let newTask =  `<article class="inputDisplay"><p>${inputMeal.value}</p><i class="fas fa-times-circle redHover"></i></article>`
            taskInput[2].insertAdjacentHTML("beforeend", newTask)
            inputMeal.value = ""
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
            let newTask = `<article class="inputDisplay"><p>${inputBuy.value}</p><i class="fas fa-times-circle"></i></article>`
            taskInput[3].insertAdjacentHTML("beforeend", newTask)
            inputBuy.value = "" 
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
  data.allTaskThursday.forEach(el => {
    if(el.todo != null){
    let newTask = `<article class="inputDisplay"><p>${el.todo}</p><i class="fas fa-times-circle redHover"></i></article>`
    taskInput[0].insertAdjacentHTML("beforeend", newTask)
    }
  });
  data.allTaskThursday.forEach(el => {
    if(el.workout != null){
    let newTask = `<article class="inputDisplay"><p>${el.workout}</p><i class="fas fa-times-circle redHover"></i></article>`
    taskInput[1].insertAdjacentHTML("beforeend", newTask)
    }
  });
  data.allTaskThursday.forEach(el => {
    if(el.meal != null){
    let newTask = `<article class="inputDisplay"><p>${el.meal}</p><i class="fas fa-times-circle redHover"></i></article>`
    taskInput[2].insertAdjacentHTML("beforeend", newTask)
    }
  });
  data.allTaskThursday.forEach(el => {
    if(el.buy != null){
    let newTask = `<article class="inputDisplay"><p>${el.buy}</p><i class="fas fa-times-circle redHover"></i></article>`
    taskInput[3].insertAdjacentHTML("beforeend", newTask)
    }
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


