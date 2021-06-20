const date = new Date();
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
const actualDay = weekday[date.getDay()]
const displayBox = document.querySelector(".displayTaskToday")
const activityName = document.querySelectorAll(".activityName")
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
const displayCurrentDay = () => {
    let day = document.querySelector("#chooseDay")
    day.insertAdjacentHTML('beforeend', actualDay)
}
displayCurrentDay()
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
const getCurrentPlannedTask = () => {
  
}
getCurrentPlannedTask()

console.log(actualDay);
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

    
    


// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
const displayAllDB = (data) => {
        let i = 0;
        let j = 0;
        let k = 0;
        let l = 0;
    if (actualDay === "Monday") {
        
        data.allTaskMonday.forEach(el => {
            if(el.todo != null){
            let newTaskDB = `<section class="boxTasks" id="${i}"><p class="fontStyleTask">${el.todo}</p><button class="uptBtn done-${el.done}" data-done="${el.done}" data-id="${el.monday_id}"></button></section>`
            activityName[0].insertAdjacentHTML("beforeend", newTaskDB)
            const listId = document.getElementById(`${i}`)
            listId.addEventListener('click', (el) =>{
                listId.lastChild.classList.toggle('done-1');
                console.log(listId.lastChild.dataset.done);
                if(listId.lastChild.dataset.done === "0"){
                    listId.lastChild.dataset.done = "1";
                }else{
                    listId.lastChild.dataset.done = "0";
                }
                updateDone({table: "monday", condition: "monday_id",monday_id: listId.lastChild.dataset.id, done: listId.lastChild.dataset.done})
            })  
            }
        });
        data.allTaskMonday.forEach(el => {
            if(el.workout != null){
                let newTaskDB = `<section class="boxTasks" id="${j}"><p class="fontStyleTask">${el.workout}</p><button class="uptBtn done-${el.done}" data-done="${el.done}" data-id="${el.monday_id}"></button></section>`
                activityName[1].insertAdjacentHTML("beforeend", newTaskDB)
                const listId = document.getElementById(`${j}`)
                listId.addEventListener('click', (el) =>{
                    listId.lastChild.classList.toggle('done-1');
                    console.log(listId.lastChild.dataset.done);
                    if(listId.lastChild.dataset.done === "0"){
                        listId.lastChild.dataset.done = "1";
                    }else{
                        listId.lastChild.dataset.done = "0";
                    }
                    updateDone({table: "monday", condition: "monday_id",monday_id: listId.lastChild.dataset.id, done: listId.lastChild.dataset.done})
                })                
            }
        });
        data.allTaskMonday.forEach(el => {
            if(el.meal != null){
                let newTaskDB = `<section class="boxTasks" id="${k}"><p class="fontStyleTask">${el.meal}</p><button class="uptBtn done-${el.done}" data-done="${el.done}" data-id="${el.monday_id}"></button></section>`
                activityName[2].insertAdjacentHTML("beforeend", newTaskDB)
                const listId = document.getElementById(`${k}`)
                listId.addEventListener('click', (el) =>{
                    listId.lastChild.classList.toggle('done-1');
                    console.log(listId.lastChild.dataset.done);
                    if(listId.lastChild.dataset.done === "0"){
                        listId.lastChild.dataset.done = "1";
                    }else{
                        listId.lastChild.dataset.done = "0";
                    }
                    updateDone({table: "monday", condition: "monday_id",monday_id: listId.lastChild.dataset.id, done: listId.lastChild.dataset.done})
                })                
            }
        });
        data.allTaskMonday.forEach(el => {
            if(el.buy != null){
                let newTaskDB = `<section class="boxTasks" id="${l}"><p class="fontStyleTask">${el.buy}</p><button class="uptBtn done-${el.done}" data-done="${el.done}" data-id="${el.monday_id}"></button></section>`
                activityName[3].insertAdjacentHTML("beforeend", newTaskDB)
                const listId = document.getElementById(`${l}`)
                listId.addEventListener('click', (el) =>{
                    listId.lastChild.classList.toggle('done-1');
                    console.log(listId.lastChild.dataset.done);
                    if(listId.lastChild.dataset.done === "0"){
                        listId.lastChild.dataset.done = "1";
                    }else{
                        listId.lastChild.dataset.done = "0";
                    }
                    updateDone({table: "monday", condition: "monday_id",monday_id: listId.lastChild.dataset.id, done: listId.lastChild.dataset.done})
                })                
            }
        });
        
     
    } else if (actualDay === "Tuesday") {
        data.allTaskTuesday.forEach(el => {
            if(el.todo != null){
            let newTaskDB = `<section class="boxTasks" id="${i}"><p class="fontStyleTask">${el.todo}</p><button class="uptBtn done-${el.done}" data-done="${el.done}" data-id="${el.tuesday_id}"></button></section>`
            activityName[0].insertAdjacentHTML("beforeend", newTaskDB)
            const listId = document.getElementById(`${i}`)
            listId.addEventListener('click', (el) =>{
                listId.lastChild.classList.toggle('done-1');
                console.log(listId.lastChild.dataset.done);
                if(listId.lastChild.dataset.done === "0"){
                    listId.lastChild.dataset.done = "1";
                }else{
                    listId.lastChild.dataset.done = "0";
                }
                updateDone({table: "tuesday", condition: "tuesday_id",tuesday_id: listId.lastChild.dataset.id, done: listId.lastChild.dataset.done})
            })            
            }
        });
        data.allTaskTuesday.forEach(el => {
            if(el.workout != null){
                let newTaskDB = `<section class="boxTasks" id="${j}"><p class="fontStyleTask">${el.workout}</p><button class="uptBtn done-${el.done}" data-done="${el.done}" data-id="${el.tuesday_id}"></button></section>`
                activityName[1].insertAdjacentHTML("beforeend", newTaskDB)
                const listId = document.getElementById(`${j}`)
                listId.addEventListener('click', (el) =>{
                    listId.lastChild.classList.toggle('done-1');
                    console.log(listId.lastChild.dataset.done);
                    if(listId.lastChild.dataset.done === "0"){
                        listId.lastChild.dataset.done = "1";
                    }else{
                        listId.lastChild.dataset.done = "0";
                    }
                    updateDone({table: "tuesday", condition: "tuesday_id",tuesday_id: listId.lastChild.dataset.id, done: listId.lastChild.dataset.done})
                })                
            }
        });
        data.allTaskTuesday.forEach(el => {
            if(el.meal != null){
                let newTaskDB = `<section class="boxTasks" id="${k}"><p class="fontStyleTask">${el.meal}</p><button class="uptBtn done-${el.done}" data-done="${el.done}" data-id="${el.tuesday_id}"></button></section>`
                activityName[2].insertAdjacentHTML("beforeend", newTaskDB)
                const listId = document.getElementById(`${k}`)
                listId.addEventListener('click', (el) =>{
                    listId.lastChild.classList.toggle('done-1');
                    console.log(listId.lastChild.dataset.done);
                    if(listId.lastChild.dataset.done === "0"){
                        listId.lastChild.dataset.done = "1";
                    }else{
                        listId.lastChild.dataset.done = "0";
                    }
                    updateDone({table: "tuesday", condition: "tuesday_id",tuesday_id: listId.lastChild.dataset.id, done: listId.lastChild.dataset.done})
                })                
            }
        });
        data.allTaskTuesday.forEach(el => {
            if(el.buy != null){
                let newTaskDB = `<section class="boxTasks" id="${l}"><p class="fontStyleTask">${el.buy}</p><button class="uptBtn done-${el.done}" data-done="${el.done}" data-id="${el.tuesday_id}"></button></section>`
                activityName[3].insertAdjacentHTML("beforeend", newTaskDB)
                const listId = document.getElementById(`${l}`)
                listId.addEventListener('click', (el) =>{
                    listId.lastChild.classList.toggle('done-1');
                    console.log(listId.lastChild.dataset.done);
                    if(listId.lastChild.dataset.done === "0"){
                        listId.lastChild.dataset.done = "1";
                    }else{
                        listId.lastChild.dataset.done = "0";
                    }
                    updateDone({table: "tuesday", condition: "tuesday_id",tuesday_id: listId.lastChild.dataset.id, done: listId.lastChild.dataset.done})
                })                
            }
        });
    } else if (actualDay === "Wednesday") {
        data.allTaskWednesday.forEach(el => {
            if(el.todo != null){
            let newTaskDB = `<section class="boxTasks" id="${i}"><p class="fontStyleTask">${el.todo}</p><button class="uptBtn done-${el.done}" data-done="${el.done}" data-id="${el.wednesday_id}"></button></section>`
            activityName[0].insertAdjacentHTML("beforeend", newTaskDB)
            const listId = document.getElementById(`${i}`)
            listId.addEventListener('click', (el) =>{
                listId.lastChild.classList.toggle('done-1');
                console.log(listId.lastChild.dataset.done);
                if(listId.lastChild.dataset.done === "0"){
                    listId.lastChild.dataset.done = "1";
                }else{
                    listId.lastChild.dataset.done = "0";
                }
                updateDone({table: "wednesday", condition: "wednesday_id",wednesday_id: listId.lastChild.dataset.id, done: listId.lastChild.dataset.done})
            })            
            }
        });
        data.allTaskWednesday.forEach(el => {
            if(el.workout != null){
                let newTaskDB = `<section class="boxTasks" id="${j}"><p class="fontStyleTask">${el.workout}</p><button class="uptBtn done-${el.done}" data-done="${el.done}" data-id="${el.wednesday_id}"></button></section>`
                activityName[1].insertAdjacentHTML("beforeend", newTaskDB)
                const listId = document.getElementById(`${j}`)
                listId.addEventListener('click', (el) =>{
                    listId.lastChild.classList.toggle('done-1');
                    console.log(listId.lastChild.dataset.done);
                    if(listId.lastChild.dataset.done === "0"){
                        listId.lastChild.dataset.done = "1";
                    }else{
                        listId.lastChild.dataset.done = "0";
                    }
                    updateDone({table: "wednesday", condition: "wednesday_id",wednesday_id: listId.lastChild.dataset.id, done: listId.lastChild.dataset.done})
                })                
            }
        });
        data.allTaskWednesday.forEach(el => {
            if(el.meal != null){
                let newTaskDB = `<section class="boxTasks"><p class="fontStyleTask">${el.meal}</p><button class="uptBtn done-${el.done}" data-done="${el.done}" data-id="${el.wednesday_id}"></button></section>`
                activityName[2].insertAdjacentHTML("beforeend", newTaskDB)
                const listId = document.getElementById(`${i}`)
                listId.addEventListener('click', (el) =>{
                    listId.lastChild.classList.toggle('done-1');
                    console.log(listId.lastChild.dataset.done);
                    if(listId.lastChild.dataset.done === "0"){
                        listId.lastChild.dataset.done = "1";
                    }else{
                        listId.lastChild.dataset.done = "0";
                    }
                    updateDone({table: "wednesday", condition: "wednesday_id",wednesday_id: listId.lastChild.dataset.id, done: listId.lastChild.dataset.done})
                })                
            }
        });
        data.allTaskWednesday.forEach(el => {
            if(el.buy != null){
                let newTaskDB = `<section class="boxTasks" id="${k}"><p class="fontStyleTask">${el.buy}</p><button class="uptBtn done-${el.done}" data-done="${el.done}" data-id="${el.wednesday_id}"></button></section>`
                activityName[3].insertAdjacentHTML("beforeend", newTaskDB)
                const listId = document.getElementById(`${k}`)
                listId.addEventListener('click', (el) =>{
                    listId.lastChild.classList.toggle('done-1');
                    console.log(listId.lastChild.dataset.done);
                    if(listId.lastChild.dataset.done === "0"){
                        listId.lastChild.dataset.done = "1";
                    }else{
                        listId.lastChild.dataset.done = "0";
                    }
                    updateDone({table: "wednesday", condition: "wednesday_id",wednesday_id: listId.lastChild.dataset.id, done: listId.lastChild.dataset.done})
                })                
            }
        });
    } else if (actualDay === "Thursday") {
        data.allTaskThursday.forEach(el => {
            if(el.todo != null){
            let newTaskDB = `<section class="boxTasks" id="${i}"><p class="fontStyleTask">${el.todo}</p><button class="uptBtn done-${el.done}" data-done="${el.done}" data-id="${el.thursday_id}"></button></section>`
            activityName[0].insertAdjacentHTML("beforeend", newTaskDB)
            const listId = document.getElementById(`${i}`)
            listId.addEventListener('click', (el) =>{
                listId.lastChild.classList.toggle('done-1');
                console.log(listId.lastChild.dataset.done);
                if(listId.lastChild.dataset.done === "0"){
                    listId.lastChild.dataset.done = "1";
                }else{
                    listId.lastChild.dataset.done = "0";
                }
                updateDone({table: "thursday", condition: "thursday_id",thursday_id: listId.lastChild.dataset.id, done: listId.lastChild.dataset.done})
            })            
            }
        });
        data.allTaskThursday.forEach(el => {
            if(el.workout != null){
                let newTaskDB = `<section class="boxTasks" id="${j}"><p class="fontStyleTask">${el.workout}</p><button class="uptBtn done-${el.done}" data-done="${el.done}" data-id="${el.thursday_id}"></button></section>`
                activityName[1].insertAdjacentHTML("beforeend", newTaskDB)
                const listId = document.getElementById(`${j}`)
                listId.addEventListener('click', (el) =>{
                    listId.lastChild.classList.toggle('done-1');
                    console.log(listId.lastChild.dataset.done);
                    if(listId.lastChild.dataset.done === "0"){
                        listId.lastChild.dataset.done = "1";
                    }else{
                        listId.lastChild.dataset.done = "0";
                    }
                    updateDone({table: "thursday", condition: "thursday_id",thursday_id: listId.lastChild.dataset.id, done: listId.lastChild.dataset.done})
                })                
            }
        });
        data.allTaskThursday.forEach(el => {
            if(el.meal != null){
                let newTaskDB = `<section class="boxTasks" id="${k}"><p class="fontStyleTask">${el.meal}</p><button class="uptBtn done-${el.done}" data-done="${el.done}" data-id="${el.thursday_id}"></button></section>`
                activityName[2].insertAdjacentHTML("beforeend", newTaskDB)
                const listId = document.getElementById(`${k}`)
                listId.addEventListener('click', (el) =>{
                    listId.lastChild.classList.toggle('done-1');
                    console.log(listId.lastChild.dataset.done);
                    if(listId.lastChild.dataset.done === "0"){
                        listId.lastChild.dataset.done = "1";
                    }else{
                        listId.lastChild.dataset.done = "0";
                    }
                    updateDone({table: "thursday", condition: "thursday_id",thursday_id: listId.lastChild.dataset.id, done: listId.lastChild.dataset.done})
                })                
            }
        });
        data.allTaskThursday.forEach(el => {
            if(el.buy != null){
                let newTaskDB = `<section class="boxTasks" id="${l}"><p class="fontStyleTask">${el.buy}</p><button class="uptBtn done-${el.done}" data-done="${el.done}" data-id="${el.thursday_id}"></button></section>`
                activityName[3].insertAdjacentHTML("beforeend", newTaskDB)
                const listId = document.getElementById(`${l}`)
                listId.addEventListener('click', (el) =>{
                    listId.lastChild.classList.toggle('done-1');
                    console.log(listId.lastChild.dataset.done);
                    if(listId.lastChild.dataset.done === "0"){
                        listId.lastChild.dataset.done = "1";
                    }else{
                        listId.lastChild.dataset.done = "0";
                    }
                    updateDone({table: "thursday", condition: "thursday_id",thursday_id: listId.lastChild.dataset.id, done: listId.lastChild.dataset.done})
                })                
            }
        });
    } else if (actualDay === "Friday") {
        data.allTaskFriday.forEach(el => {
            if(el.todo != null){
            let newTaskDB = `<section class="boxTasks" id="${i}"><p class="fontStyleTask">${el.todo}</p><button class="uptBtn done-${el.done}" data-done="${el.done}" data-id="${el.thursday_id}"></button></section>`
            activityName[0].insertAdjacentHTML("beforeend", newTaskDB)
            const listId = document.getElementById(`${i}`)
            listId.addEventListener('click', (el) =>{
                listId.lastChild.classList.toggle('done-1');
                console.log(listId.lastChild.dataset.done);
                if(listId.lastChild.dataset.done === "0"){
                    listId.lastChild.dataset.done = "1";
                }else{
                    listId.lastChild.dataset.done = "0";
                }
                updateDone({table: "friday", condition: "friday_id",friday_id: listId.lastChild.dataset.id, done: listId.lastChild.dataset.done})
            })            
            }
        });
        data.allTaskFriday.forEach(el => {
            if(el.workout != null){
                let newTaskDB = `<section class="boxTasks" id="${j}"><p class="fontStyleTask">${el.workout}</p><button class="uptBtn done-${el.done}" data-done="${el.done}" data-id="${el.friday_id}"></button></section>`
                activityName[1].insertAdjacentHTML("beforeend", newTaskDB)
                const listId = document.getElementById(`${j}`)
                listId.addEventListener('click', (el) =>{
                    listId.lastChild.classList.toggle('done-1');
                    console.log(listId.lastChild.dataset.done);
                    if(listId.lastChild.dataset.done === "0"){
                        listId.lastChild.dataset.done = "1";
                    }else{
                        listId.lastChild.dataset.done = "0";
                    }
                    updateDone({table: "friday", condition: "friday_id",friday_id: listId.lastChild.dataset.id, done: listId.lastChild.dataset.done})
                })                
            }
        });
        data.allTaskFriday.forEach(el => {
            if(el.meal != null){
                let newTaskDB = `<section class="boxTasks" id="${k}"><p class="fontStyleTask">${el.meal}</p><button class="uptBtn done-${el.done}" data-done="${el.done}" data-id="${el.friday_id}"></button></section>`
                activityName[2].insertAdjacentHTML("beforeend", newTaskDB)
                const listId = document.getElementById(`${k}`)
                listId.addEventListener('click', (el) =>{
                    listId.lastChild.classList.toggle('done-1');
                    console.log(listId.lastChild.dataset.done);
                    if(listId.lastChild.dataset.done === "0"){
                        listId.lastChild.dataset.done = "1";
                    }else{
                        listId.lastChild.dataset.done = "0";
                    }
                    updateDone({table: "friday", condition: "friday_id",friday_id: listId.lastChild.dataset.id, done: listId.lastChild.dataset.done})
                })                
            }
        });
        data.allTaskFriday.forEach(el => {
            if(el.buy != null){
                let newTaskDB = `<section class="boxTasks" id="${l}"><p class="fontStyleTask">${el.buy}</p><button class="uptBtn done-${el.done}" data-done="${el.done}" data-id="${el.friday_id}"></button></section>`
                activityName[3].insertAdjacentHTML("beforeend", newTaskDB)
                const listId = document.getElementById(`${l}`)
                listId.addEventListener('click', (el) =>{
                    listId.lastChild.classList.toggle('done-1');
                    console.log(listId.lastChild.dataset.done);
                    if(listId.lastChild.dataset.done === "0"){
                        listId.lastChild.dataset.done = "1";
                    }else{
                        listId.lastChild.dataset.done = "0";
                    }
                    updateDone({table: "friday", condition: "friday_id",friday_id: listId.lastChild.dataset.id, done: listId.lastChild.dataset.done})
                })
            }
        });
    } else if (actualDay === "Saturday") {
        data.allTaskSaturday.forEach(el => {
            if(el.todo != null){
            let newTaskDB = `<section class="boxTasks" id="${i}"><p class="fontStyleTask">${el.todo}</p><button class="uptBtn done-${el.done}" data-done="${el.done}" data-id="${el.saturday_id}"></button></section>`
            activityName[0].insertAdjacentHTML("beforeend", newTaskDB)
            const listId = document.getElementById(`${i}`)
            listId.addEventListener('click', (el) =>{
                listId.lastChild.classList.toggle('done-1');
                console.log(listId.lastChild.dataset.done);
                if(listId.lastChild.dataset.done === "0"){
                    listId.lastChild.dataset.done = "1";
                }else{
                    listId.lastChild.dataset.done = "0";
                }
                updateDone({table: "saturday", condition: "saturday_id",saturday_id: listId.lastChild.dataset.id, done: listId.lastChild.dataset.done})
            })
            }
        });
        data.allTaskSaturday.forEach(el => {
            if(el.workout != null){
                let newTaskDB = `<section class="boxTasks" id="${j}"><p class="fontStyleTask">${el.workout}</p><button class="uptBtn done-${el.done}" data-done="${el.done}" data-id="${el.saturday_id}"></button></section>`
                activityName[1].insertAdjacentHTML("beforeend", newTaskDB)
                const listId = document.getElementById(`${j}`)
                listId.addEventListener('click', (el) =>{
                    listId.lastChild.classList.toggle('done-1');
                    console.log(listId.lastChild.dataset.done);
                    if(listId.lastChild.dataset.done === "0"){
                        listId.lastChild.dataset.done = "1";
                    }else{
                        listId.lastChild.dataset.done = "0";
                    }
                updateDone({table: "saturday", condition: "saturday_id",saturday_id: listId.lastChild.dataset.id, done: listId.lastChild.dataset.done})
            })
            }
        });
        data.allTaskSaturday.forEach(el => {
            if(el.meal != null){
                let newTaskDB = `<section class="boxTasks" id="${k}"><p class="fontStyleTask">${el.meal}</p><button class="uptBtn done-${el.done}" data-done="${el.done}" data-id="${el.saturday_id}"></button></section>`
                activityName[2].insertAdjacentHTML("beforeend", newTaskDB)
                const listId = document.getElementById(`${k}`)
                listId.addEventListener('click', (el) =>{
                    listId.lastChild.classList.toggle('done-1');
                    console.log(listId.lastChild.dataset.done);
                    if(listId.lastChild.dataset.done === "0"){
                        listId.lastChild.dataset.done = "1";
                    }else{
                        listId.lastChild.dataset.done = "0";
                    }
                updateDone({table: "saturday", condition: "saturday_id",saturday_id: listId.lastChild.dataset.id, done: listId.lastChild.dataset.done})
            })
            }
        });
        data.allTaskSaturday.forEach(el => {
            if(el.buy != null){
                let newTaskDB = `<section class="boxTasks" id="${l}"><p class="fontStyleTask">${el.buy}</p><button class="uptBtn done-${el.done}" data-done="${el.done}" data-id="${el.saturday_id}"></button></section>`
                activityName[3].insertAdjacentHTML("beforeend", newTaskDB)
                const listId = document.getElementById(`${l}`)
                listId.addEventListener('click', (el) =>{
                listId.lastChild.classList.toggle('done-1');
                console.log(listId.lastChild.dataset.done);
                if(listId.lastChild.dataset.done === "0"){
                    listId.lastChild.dataset.done = "1";
                }else{
                    listId.lastChild.dataset.done = "0";
                }
                updateDone({table: "saturday", condition: "saturday_id",saturday_id: listId.lastChild.dataset.id, done: listId.lastChild.dataset.done})
            })
            }
        });
    } else if (actualDay === "Sunday") {
        data.allTaskSunday.forEach(el => {
            i++;
            if(el.todo != null){
                console.log("done-" + el.done);
            let newTaskDB = `<section class="boxTasks" id="${i}"><p class="fontStyleTask">${el.todo}</p><button class="uptBtn done-${el.done}" data-done="${el.done}" data-id="${el.sunday_id}"></button></section>`
            activityName[0].insertAdjacentHTML("beforeend", newTaskDB)
            const listId = document.getElementById(`${i}`)
            listId.addEventListener('click', (el) =>{
                listId.lastChild.classList.toggle('done-1');
                console.log(listId.lastChild.dataset.done);
                if(listId.lastChild.dataset.done === "0"){
                    listId.lastChild.dataset.done = "1";
                }else{
                    listId.lastChild.dataset.done = "0";
                }
                updateDone({table: "sunday", condition: "sunday_id",sunday_id: listId.lastChild.dataset.id, done: listId.lastChild.dataset.done})
            })
            
            }
            
        });
        data.allTaskSunday.forEach(el => {
            j++;
            if(el.workout != null){
                let newTaskDB = `<section class="boxTasks" id="${j}"><p class="fontStyleTask">${el.workout}</p><button class="uptBtn done-${el.done}" data-done="${el.done}" data-id="${el.sunday_id}"></button></section>`
                activityName[1].insertAdjacentHTML("beforeend", newTaskDB)
                const listId = document.getElementById(`${j}`)
                listId.addEventListener('click', (el) =>{
                    listId.lastChild.classList.toggle('done-1');
                    if(listId.lastChild.dataset.done === "0"){
                        listId.lastChild.dataset.done = "1";
                    }else{
                        listId.lastChild.dataset.done = "0";
                    }
                    updateDone({table: "sunday", condition: "sunday_id",sunday_id: listId.lastChild.dataset.id, done: listId.lastChild.dataset.done})
                })
                
            }
        });
        data.allTaskSunday.forEach(el => {
            k++;
            if(el.meal != null){
                let newTaskDB = `<section class="boxTasks" id="${k}"><p class="fontStyleTask">${el.meal}</p><button class="uptBtn done-${el.done}" data-done="${el.done}" data-id="${el.sunday_id}"></button></section>`
                activityName[2].insertAdjacentHTML("beforeend", newTaskDB)
                const listId = document.getElementById(`${k}`)
                listId.addEventListener('click', (el) =>{
                    listId.lastChild.classList.toggle('done-1');
                    if(listId.lastChild.dataset.done === "0"){
                        listId.lastChild.dataset.done = "1";
                    }else{
                        listId.lastChild.dataset.done = "0";
                    }
                    updateDone({table: "sunday", condition: "sunday_id",sunday_id: listId.lastChild.dataset.id, done: listId.lastChild.dataset.done})
                })
                
            }
           
        });
        data.allTaskSunday.forEach(el => {
            l++;
            if(el.buy != null){
                let newTaskDB = `<section class="boxTasks" id="${l}"><p class="fontStyleTask">${el.buy}</p><button class="uptBtn done-${el.done}" data-done="${el.done}" data-id="${el.sunday_id}"></button></section>`
                activityName[3].insertAdjacentHTML("beforeend", newTaskDB)
                const listId = document.getElementById(`${l}`)
                console.log(listId.lastChild);
                listId.addEventListener('click', (el) =>{
                    listId.lastChild.classList.toggle('done-1');
                    if(listId.lastChild.dataset.done === "0"){
                        listId.lastChild.dataset.done = "1";
                    }else{
                        listId.lastChild.dataset.done = "0";
                    }
                    updateDone({table: "sunday", condition: "sunday_id", sunday_id: listId.lastChild.dataset.id, done: listId.lastChild.dataset.done})
                })
                
            }
           
        });
    }
    let numTaskToday = document.querySelector(".numTaskToday")
            let allTasks = document.querySelectorAll(".boxTasks").length
            numTaskToday.insertAdjacentHTML('beforeend', allTasks)
            console.log(allTasks);
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

const updateDone = (info) => {
    console.log(info);
    fetch('api/tasks/update', {
      method: 'POST',
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
    });
  }

  