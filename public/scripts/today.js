const date = new Date();
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
const actualDay = weekday[date.getDay()]
const displayBox = document.querySelector(".displayTaskToday")
const activityName = document.querySelectorAll(".activityName")
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
const updateBtnHtml = () => {
    let uptBtn = document.querySelectorAll(".uptBtn")
    uptBtn.forEach(element => {
        element.addEventListener("click", (e) => {
            e.target.style.backgroundColor = "#5ed7af"
            e.target.style.boxShadow = "1px 0px 15px rgba(242, 244, 242, 0.25)"
        });
    })
}
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
const displayAllDB = (data) => {
    if (actualDay === "Monday") {
        data.allTaskMonday.forEach(el => {
            if(el.todo != null){
            let newTaskDB = `<section class="boxTasks"><p class="fontStyleTask">${el.todo}</p><button class="uptBtn"></button></section>`
            activityName[0].insertAdjacentHTML("beforeend", newTaskDB)
            updateBtnHtml()
            }
        });
        data.allTaskMonday.forEach(el => {
            if(el.workout != null){
                let newTaskDB = `<section class="boxTasks"><p class="fontStyleTask">${el.workout}</p><button class="uptBtn"></button></section>`
                activityName[1].insertAdjacentHTML("beforeend", newTaskDB)
                updateBtnHtml()
            }
        });
        data.allTaskMonday.forEach(el => {
            if(el.meal != null){
                let newTaskDB = `<section class="boxTasks"><p class="fontStyleTask">${el.meal}</p><button class="uptBtn"></button></section>`
                activityName[2].insertAdjacentHTML("beforeend", newTaskDB)
                updateBtnHtml()
            }
        });
        data.allTaskMonday.forEach(el => {
            if(el.buy != null){
                let newTaskDB = `<section class="boxTasks"><p class="fontStyleTask">${el.buy}</p><button class="uptBtn"></button></section>`
                activityName[3].insertAdjacentHTML("beforeend", newTaskDB)
                updateBtnHtml()
            }
        });
    } else if (actualDay === "Tuesday") {
        data.allTaskTuesday.forEach(el => {
            if(el.todo != null){
            let newTaskDB = `<section class="boxTasks"><p class="fontStyleTask">${el.todo}</p><button class="uptBtn"></button></section>`
            activityName[0].insertAdjacentHTML("beforeend", newTaskDB)
            updateBtnHtml()
            }
        });
        data.allTaskTuesday.forEach(el => {
            if(el.workout != null){
                let newTaskDB = `<section class="boxTasks"><p class="fontStyleTask">${el.workout}</p><button class="uptBtn"></button></section>`
                activityName[1].insertAdjacentHTML("beforeend", newTaskDB)
                updateBtnHtml()
            }
        });
        data.allTaskTuesday.forEach(el => {
            if(el.meal != null){
                let newTaskDB = `<section class="boxTasks"><p class="fontStyleTask">${el.meal}</p><button class="uptBtn"></button></section>`
                activityName[2].insertAdjacentHTML("beforeend", newTaskDB)
                updateBtnHtml()
            }
        });
        data.allTaskTuesday.forEach(el => {
            if(el.buy != null){
                let newTaskDB = `<section class="boxTasks"><p class="fontStyleTask">${el.buy}</p><button class="uptBtn"></button></section>`
                activityName[3].insertAdjacentHTML("beforeend", newTaskDB)
                updateBtnHtml()
            }
        });
    } else if (actualDay === "Wednesday") {
        data.allTaskWednesday.forEach(el => {
            if(el.todo != null){
            let newTaskDB = `<section class="boxTasks"><p class="fontStyleTask">${el.todo}</p><button class="uptBtn"></button></section>`
            activityName[0].insertAdjacentHTML("beforeend", newTaskDB)
            updateBtnHtml()
            }
        });
        data.allTaskWednesday.forEach(el => {
            if(el.workout != null){
                let newTaskDB = `<section class="boxTasks"><p class="fontStyleTask">${el.workout}</p><button class="uptBtn"></button></section>`
                activityName[1].insertAdjacentHTML("beforeend", newTaskDB)
                updateBtnHtml()
            }
        });
        data.allTaskWednesday.forEach(el => {
            if(el.meal != null){
                let newTaskDB = `<section class="boxTasks"><p class="fontStyleTask">${el.meal}</p><button class="uptBtn"></button></section>`
                activityName[2].insertAdjacentHTML("beforeend", newTaskDB)
                updateBtnHtml()
            }
        });
        data.allTaskWednesday.forEach(el => {
            if(el.buy != null){
                let newTaskDB = `<section class="boxTasks"><p class="fontStyleTask">${el.buy}</p><button class="uptBtn"></button></section>`
                activityName[3].insertAdjacentHTML("beforeend", newTaskDB)
                updateBtnHtml()
            }
        });
    } else if (actualDay === "Thursday") {
        data.allTaskThursday.forEach(el => {
            if(el.todo != null){
            let newTaskDB = `<section class="boxTasks"><p class="fontStyleTask">${el.todo}</p><button class="uptBtn"></button></section>`
            activityName[0].insertAdjacentHTML("beforeend", newTaskDB)
            updateBtnHtml()
            }
        });
        data.allTaskThursday.forEach(el => {
            if(el.workout != null){
                let newTaskDB = `<section class="boxTasks"><p class="fontStyleTask">${el.workout}</p><button class="uptBtn"></button></section>`
                activityName[1].insertAdjacentHTML("beforeend", newTaskDB)
                updateBtnHtml()
            }
        });
        data.allTaskThursday.forEach(el => {
            if(el.meal != null){
                let newTaskDB = `<section class="boxTasks"><p class="fontStyleTask">${el.meal}</p><button class="uptBtn"></button></section>`
                activityName[2].insertAdjacentHTML("beforeend", newTaskDB)
                updateBtnHtml()
            }
        });
        data.allTaskThursday.forEach(el => {
            if(el.buy != null){
                let newTaskDB = `<section class="boxTasks"><p class="fontStyleTask">${el.buy}</p><button class="uptBtn"></button></section>`
                activityName[3].insertAdjacentHTML("beforeend", newTaskDB)
                updateBtnHtml()
            }
        });
    } else if (actualDay === "Friday") {
        data.allTaskFriday.forEach(el => {
            if(el.todo != null){
            let newTaskDB = `<section class="boxTasks"><p class="fontStyleTask">${el.todo}</p><button class="uptBtn"></button></section>`
            activityName[0].insertAdjacentHTML("beforeend", newTaskDB)
            updateBtnHtml()
            }
        });
        data.allTaskFriday.forEach(el => {
            if(el.workout != null){
                let newTaskDB = `<section class="boxTasks"><p class="fontStyleTask">${el.workout}</p><button class="uptBtn"></button></section>`
                activityName[1].insertAdjacentHTML("beforeend", newTaskDB)
                updateBtnHtml()
            }
        });
        data.allTaskFriday.forEach(el => {
            if(el.meal != null){
                let newTaskDB = `<section class="boxTasks"><p class="fontStyleTask">${el.meal}</p><button class="uptBtn"></button></section>`
                activityName[2].insertAdjacentHTML("beforeend", newTaskDB)
                updateBtnHtml()
            }
        });
        data.allTaskFriday.forEach(el => {
            if(el.buy != null){
                let newTaskDB = `<section class="boxTasks"><p class="fontStyleTask">${el.buy}</p><button class="uptBtn"></button></section>`
                activityName[3].insertAdjacentHTML("beforeend", newTaskDB)
                updateBtnHtml()
            }
        });
    } else if (actualDay === "Saturday") {
        data.allTaskSaturday.forEach(el => {
            if(el.todo != null){
            let newTaskDB = `<section class="boxTasks"><p class="fontStyleTask">${el.todo}</p><button class="uptBtn"></button></section>`
            activityName[0].insertAdjacentHTML("beforeend", newTaskDB)
            updateBtnHtml()
            }
        });
        data.allTaskSaturday.forEach(el => {
            if(el.workout != null){
                let newTaskDB = `<section class="boxTasks"><p class="fontStyleTask">${el.workout}</p><button class="uptBtn"></button></section>`
                activityName[1].insertAdjacentHTML("beforeend", newTaskDB)
                updateBtnHtml()
            }
        });
        data.allTaskSaturday.forEach(el => {
            if(el.meal != null){
                let newTaskDB = `<section class="boxTasks"><p class="fontStyleTask">${el.meal}</p><button class="uptBtn"></button></section>`
                activityName[2].insertAdjacentHTML("beforeend", newTaskDB)
                updateBtnHtml()
            }
        });
        data.allTaskSaturday.forEach(el => {
            if(el.buy != null){
                let newTaskDB = `<section class="boxTasks"><p class="fontStyleTask">${el.buy}</p><button class="uptBtn"></button></section>`
                activityName[3].insertAdjacentHTML("beforeend", newTaskDB)
                updateBtnHtml()
            }
        });
    } else if (actualDay === "Sunday") {
        data.allTaskSunday.forEach(el => {
            if(el.todo != null){
            let newTaskDB = `<section class="boxTasks"><p class="fontStyleTask">${el.todo}</p><button class="uptBtn"></button></section>`
            activityName[0].insertAdjacentHTML("beforeend", newTaskDB)
            updateBtnHtml()
            }
        });
        data.allTaskSunday.forEach(el => {
            if(el.workout != null){
                let newTaskDB = `<section class="boxTasks"><p class="fontStyleTask">${el.workout}</p><button class="uptBtn"></button></section>`
                activityName[1].insertAdjacentHTML("beforeend", newTaskDB)
                updateBtnHtml()
            }
        });
        data.allTaskSunday.forEach(el => {
            if(el.meal != null){
                let newTaskDB = `<section class="boxTasks"><p class="fontStyleTask">${el.meal}</p><button class="uptBtn"></button></section>`
                activityName[2].insertAdjacentHTML("beforeend", newTaskDB)
                updateBtnHtml()
            }
        });
        data.allTaskSunday.forEach(el => {
            if(el.buy != null){
                let newTaskDB = `<section class="boxTasks"><p class="fontStyleTask">${el.buy}</p><button class="uptBtn"></button></section>`
                activityName[3].insertAdjacentHTML("beforeend", newTaskDB)
                updateBtnHtml()
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
      displayAllDB(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}
loadtask();

  