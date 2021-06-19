const date = new Date();
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
const actualDay = weekday[date.getDay()]
let displayBox = document.querySelector(".displayTaskToday")
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
const displayCurrentDay = () => {
    let day = document.querySelector("#chooseDay")
    day.innerHTML = actualDay
}
displayCurrentDay()
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
const getCurrentPlannedTask = () => {
    let numTaskToday = document.querySelector(".numTaskToday")
    let allTasks = document.querySelectorAll(".dbTaskDisplay").length
    numTaskToday.innerHTML = allTasks
}
getCurrentPlannedTask()
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
const displayToDoDB = (data) => {
    if (actualDay === "Monday") {
        data.allTaskMonday.forEach(el => {
            if(el.todo != null){
            let newTaskDB = `<article class="dbTaskDisplay" id="#">
            <h1 class="activityName">To Do</h1>
                <section class="boxTasks">
                    <p class="fontStyleTask">${el.todo}</p>
                    <button class="uptBtn"></button>
                </section>
            </article>`
            displayBox.insertAdjacentHTML("beforeend", newTaskDB)
            }
        });
    } else if (actualDay === "Tuesday") {
        data.allTaskTuesday.forEach(el => {
            if(el.todo != null){
            let newTaskDB = `<article class="dbTaskDisplay" id="#">
            <h1 class="activityName">To Do</h1>
                <section class="boxTasks">
                    <p class="fontStyleTask">${el.todo}</p>
                    <button class="uptBtn"></button>
                </section>
            </article>`
            displayBox.insertAdjacentHTML("beforeend", newTaskDB)
            }
        });
    } else if (actualDay === "Wednesday") {
        data.allTaskWednesday.forEach(el => {
            if(el.todo != null){
            let newTaskDB = `<article class="dbTaskDisplay" id="#">
            <h1 class="activityName">To Do</h1>
                <section class="boxTasks">
                    <p class="fontStyleTask">${el.todo}</p>
                    <button class="uptBtn"></button>
                </section>
            </article>`
            displayBox.insertAdjacentHTML("beforeend", newTaskDB)
            }
        });
    } else if (actualDay === "Thursday") {
        data.allTaskThursday.forEach(el => {
            if(el.todo != null){
            let newTaskDB = `<article class="dbTaskDisplay" id="#">
            <h1 class="activityName">To Do</h1>
                <section class="boxTasks">
                    <p class="fontStyleTask">${el.todo}</p>
                    <button class="uptBtn"></button>
                </section>
            </article>`
            displayBox.insertAdjacentHTML("beforeend", newTaskDB)
            }
        });
    } else if (actualDay === "Friday") {
        data.allTaskFriday.forEach(el => {
            if(el.todo != null){
            let newTaskDB = `<article class="dbTaskDisplay" id="#">
            <h1 class="activityName">To Do</h1>
                <section class="boxTasks">
                    <p class="fontStyleTask">${el.todo}</p>
                    <button class="uptBtn"></button>
                </section>
            </article>`
            displayBox.insertAdjacentHTML("beforeend", newTaskDB)
            }
        });
    } else if (actualDay === "Saturday") {
        data.allTaskSaturday.forEach(el => {
            if(el.todo != null){
            let newTaskDB = `<article class="dbTaskDisplay" id="#">
            <h1 class="activityName">To Do</h1>
                <section class="boxTasks">
                    <p class="fontStyleTask">${el.todo}</p>
                    <button class="uptBtn"></button>
                </section>
            </article>`
            displayBox.insertAdjacentHTML("beforeend", newTaskDB)
            }
        });
    } else if (actualDay === "Sunday") {
        data.allTaskSunday.forEach(el => {
            if(el.todo != null){
            let newTaskDB = `<article class="dbTaskDisplay" id="#">
            <h1 class="activityName">To Do</h1>
                <section class="boxTasks">
                    <p class="fontStyleTask">${el.todo}</p>
                    <button class="uptBtn"></button>
                </section>
            </article>`
            displayBox.insertAdjacentHTML("beforeend", newTaskDB)
            }
        });
    }
}

const displayWorkoutDB = (data) => {
    if (actualDay === "Monday") {
        data.allTaskMonday.forEach(el => {
            if(el.workout != null){
            let newTaskDB = `<article class="dbTaskDisplay" id="#">
            <h1 class="activityName">Workout</h1>
                <section class="boxTasks">
                    <p class="fontStyleTask">${el.workout}</p>
                    <button class="uptBtn"></button>
                </section>
            </article>`
            displayBox.insertAdjacentHTML("beforeend", newTaskDB)
            }
        });
    } else if (actualDay === "Tuesday") {
        data.allTaskTuesday.forEach(el => {
            if(el.workout != null){
            let newTaskDB = `<article class="dbTaskDisplay" id="#">
            <h1 class="activityName">Workout</h1>
                <section class="boxTasks">
                    <p class="fontStyleTask">${el.workout}</p>
                    <button class="uptBtn"></button>
                </section>
            </article>`
            displayBox.insertAdjacentHTML("beforeend", newTaskDB)
            }
        });
    } else if (actualDay === "Wednesday") {
        data.allTaskWednesday.forEach(el => {
            if(el.workout != null){
            let newTaskDB = `<article class="dbTaskDisplay" id="#">
            <h1 class="activityName">Workout</h1>
                <section class="boxTasks">
                    <p class="fontStyleTask">${el.workout}</p>
                    <button class="uptBtn"></button>
                </section>
            </article>`
            displayBox.insertAdjacentHTML("beforeend", newTaskDB)
            }
        });
    } else if (actualDay === "Thursday") {
        data.allTaskThursday.forEach(el => {
            if(el.workout != null){
            let newTaskDB = `<article class="dbTaskDisplay" id="#">
            <h1 class="activityName">Workout</h1>
                <section class="boxTasks">
                    <p class="fontStyleTask">${el.workout}</p>
                    <button class="uptBtn"></button>
                </section>
            </article>`
            displayBox.insertAdjacentHTML("beforeend", newTaskDB)
            }
        });
    } else if (actualDay === "Friday") {
        data.allTaskFriday.forEach(el => {
            if(el.workout != null){
            let newTaskDB = `<article class="dbTaskDisplay" id="#">
            <h1 class="activityName">Workout</h1>
                <section class="boxTasks">
                    <p class="fontStyleTask">${el.workout}</p>
                    <button class="uptBtn"></button>
                </section>
            </article>`
            displayBox.insertAdjacentHTML("beforeend", newTaskDB)
            }
        });
    } else if (actualDay === "Saturday") {
        data.allTaskSaturday.forEach(el => {
            if(el.workout != null){
            let newTaskDB = `<article class="dbTaskDisplay" id="#">
            <h1 class="activityName">Workout</h1>
                <section class="boxTasks">
                    <p class="fontStyleTask">${el.workout}</p>
                    <button class="uptBtn"></button>
                </section>
            </article>`
            displayBox.insertAdjacentHTML("beforeend", newTaskDB)
            }
        });
    } else if (actualDay === "Sunday") {
        data.allTaskSunday.forEach(el => {
            if(el.workout != null){
            let newTaskDB = `<article class="dbTaskDisplay" id="#">
            <h1 class="activityName">Workout</h1>
                <section class="boxTasks">
                    <p class="fontStyleTask">${el.workout}</p>
                    <button class="uptBtn"></button>
                </section>
            </article>`
            displayBox.insertAdjacentHTML("beforeend", newTaskDB)
            }
        });
    }
}

const displayMealDB = (data) => {
    if (actualDay === "Monday") {
        data.allTaskMonday.forEach(el => {
            if(el.meal != null){
            let newTaskDB = `<article class="dbTaskDisplay" id="#">
            <h1 class="activityName">Meal</h1>
                <section class="boxTasks">
                    <p class="fontStyleTask">${el.meal}</p>
                    <button class="uptBtn"></button>
                </section>
            </article>`
            displayBox.insertAdjacentHTML("beforeend", newTaskDB)
            }
        });
    } else if (actualDay === "Tuesday") {
        data.allTaskTuesday.forEach(el => {
            if(el.meal != null){
            let newTaskDB = `<article class="dbTaskDisplay" id="#">
            <h1 class="activityName">Meal</h1>
                <section class="boxTasks">
                    <p class="fontStyleTask">${el.meal}</p>
                    <button class="uptBtn"></button>
                </section>
            </article>`
            displayBox.insertAdjacentHTML("beforeend", newTaskDB)
            }
        });
    } else if (actualDay === "Wednesday") {
        data.allTaskWednesday.forEach(el => {
            if(el.meal != null){
            let newTaskDB = `<article class="dbTaskDisplay" id="#">
            <h1 class="activityName">Meal</h1>
                <section class="boxTasks">
                    <p class="fontStyleTask">${el.meal}</p>
                    <button class="uptBtn"></button>
                </section>
            </article>`
            displayBox.insertAdjacentHTML("beforeend", newTaskDB)
            }
        });
    } else if (actualDay === "Thursday") {
        data.allTaskThursday.forEach(el => {
            if(el.meal != null){
            let newTaskDB = `<article class="dbTaskDisplay" id="#">
            <h1 class="activityName">Meal</h1>
                <section class="boxTasks">
                    <p class="fontStyleTask">${el.meal}</p>
                    <button class="uptBtn"></button>
                </section>
            </article>`
            displayBox.insertAdjacentHTML("beforeend", newTaskDB)
            }
        });
    } else if (actualDay === "Friday") {
        data.allTaskFriday.forEach(el => {
            if(el.meal != null){
            let newTaskDB = `<article class="dbTaskDisplay" id="#">
            <h1 class="activityName">Meal</h1>
                <section class="boxTasks">
                    <p class="fontStyleTask">${el.meal}</p>
                    <button class="uptBtn"></button>
                </section>
            </article>`
            displayBox.insertAdjacentHTML("beforeend", newTaskDB)
            }
        });
    } else if (actualDay === "Saturday") {
        data.allTaskSaturday.forEach(el => {
            if(el.meal != null){
            let newTaskDB = `<article class="dbTaskDisplay" id="#">
            <h1 class="activityName">Meal</h1>
                <section class="boxTasks">
                    <p class="fontStyleTask">${el.meal}</p>
                    <button class="uptBtn"></button>
                </section>
            </article>`
            displayBox.insertAdjacentHTML("beforeend", newTaskDB)
            }
        });
    } else if (actualDay === "Sunday") {
        data.allTaskSunday.forEach(el => {
            if(el.meal != null){
            let newTaskDB = `<article class="dbTaskDisplay" id="#">
            <h1 class="activityName">Meal</h1>
                <section class="boxTasks">
                    <p class="fontStyleTask">${el.meal}</p>
                    <button class="uptBtn"></button>
                </section>
            </article>`
            displayBox.insertAdjacentHTML("beforeend", newTaskDB)
            }
        });
    }
}

const displayBuyDB = (data) => {
    if (actualDay === "Monday") {
        data.allTaskMonday.forEach(el => {
            if(el.buy != null){
            let newTaskDB = `<article class="dbTaskDisplay" id="#">
            <h1 class="activityName">Buy</h1>
                <section class="boxTasks">
                    <p class="fontStyleTask">${el.buy}</p>
                    <button class="uptBtn"></button>
                </section>
            </article>`
            displayBox.insertAdjacentHTML("beforeend", newTaskDB)
            }
        });
    } else if (actualDay === "Tuesday") {
        data.allTaskTuesday.forEach(el => {
            if(el.buy != null){
            let newTaskDB = `<article class="dbTaskDisplay" id="#">
            <h1 class="activityName">Buy</h1>
                <section class="boxTasks">
                    <p class="fontStyleTask">${el.buy}</p>
                    <button class="uptBtn"></button>
                </section>
            </article>`
            displayBox.insertAdjacentHTML("beforeend", newTaskDB)
            }
        });
    } else if (actualDay === "Wednesday") {
        data.allTaskWednesday.forEach(el => {
            if(el.buy != null){
            let newTaskDB = `<article class="dbTaskDisplay" id="#">
            <h1 class="activityName">Buy</h1>
                <section class="boxTasks">
                    <p class="fontStyleTask">${el.buy}</p>
                    <button class="uptBtn"></button>
                </section>
            </article>`
            displayBox.insertAdjacentHTML("beforeend", newTaskDB)
            }
        });
    } else if (actualDay === "Thursday") {
        data.allTaskThursday.forEach(el => {
            if(el.buy != null){
            let newTaskDB = `<article class="dbTaskDisplay" id="#">
            <h1 class="activityName">Buy</h1>
                <section class="boxTasks">
                    <p class="fontStyleTask">${el.buy}</p>
                    <button class="uptBtn"></button>
                </section>
            </article>`
            displayBox.insertAdjacentHTML("beforeend", newTaskDB)
            }
        });
    } else if (actualDay === "Friday") {
        data.allTaskFriday.forEach(el => {
            if(el.buy != null){
            let newTaskDB = `<article class="dbTaskDisplay" id="#">
            <h1 class="activityName">Buy</h1>
                <section class="boxTasks">
                    <p class="fontStyleTask">${el.buy}</p>
                    <button class="uptBtn"></button>
                </section>
            </article>`
            displayBox.insertAdjacentHTML("beforeend", newTaskDB)
            }
        });
    } else if (actualDay === "Saturday") {
        data.allTaskSaturday.forEach(el => {
            if(el.buy != null){
            let newTaskDB = `<article class="dbTaskDisplay" id="#">
            <h1 class="activityName">Buy</h1>
                <section class="boxTasks">
                    <p class="fontStyleTask">${el.buy}</p>
                    <button class="uptBtn"></button>
                </section>
            </article>`
            displayBox.insertAdjacentHTML("beforeend", newTaskDB)
            }
        });
    } else if (actualDay === "Sunday") {
        data.allTaskSunday.forEach(el => {
            if(el.buy != null){
            let newTaskDB = `<article class="dbTaskDisplay" id="#">
            <h1 class="activityName">Buy</h1>
                <section class="boxTasks">
                    <p class="fontStyleTask">${el.buy}</p>
                    <button class="uptBtn"></button>
                </section>
            </article>`
            displayBox.insertAdjacentHTML("beforeend", newTaskDB)
            }
        });
    }
}

// fetch copy/pasted, could be store in a "usefull" js files, 
// to have less code.
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
      displayToDoDB(data);
      displayWorkoutDB(data);
      displayMealDB(data)
      displayBuyDB(data)
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    
  }
  loadtask();

  