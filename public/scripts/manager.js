// FRONT END FILE TO INTERACT WITH THE DOM
const chooseDay = document.getElementById('chooseDay');
const dayOfWeek = ["Monday","Tuesday","Wedn.","Thurs.","Friday","Saturday","Sunday"];
const inputToDo = document.getElementById("toDo");
const inputWorkout = document.getElementById("workout");
const inputMeal = document.getElementById("meal");
const inputBuy = document.getElementById("buy");
const taskInput = document.querySelectorAll(".taskInput")
let i = 0;
let theDay = `<p>${dayOfWeek[i]}</p>`;
chooseDay.addEventListener('click', (e) => {
    // let theDay = `<p>${dayOfWeek[i]}</p>`;
    chooseDay.innerHTML="";
    // chooseDay.style.transition = "all ease 3s"
    // chooseDay.style.transform = "rotate(360deg)" 
    // chooseDay.style.border = "5px solid rgb(102 231 189)" 
    // chooseDay.style.color = "rgb(102 231 189)" 
    // chooseDay.style.boxShadow = "0px 3px 15px #4cfc4cad;" 
    // let input = document.querySelectorAll(".input")
    // input.forEach(element => {
    //     element.style.border = "3px solid rgb(102 231 189)" 
    //     element.style.transition = "all ease 3s"
    // });
    e.preventDefault();
    if(i<dayOfWeek.length-1){
        i++;   
        theDay = `<p>${dayOfWeek[i]}</p>`;
        chooseDay.insertAdjacentHTML("beforeend", theDay);
    }else{
        i = 0;
        theDay = `<p>${dayOfWeek[i]}</p>`;
        chooseDay.insertAdjacentHTML("beforeend", theDay);
    }
    
})

chooseDay.insertAdjacentHTML("beforeend", theDay);

// Take activies input
// To Do
inputToDo.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && inputToDo.value == "") {
        alert("Write something")
    } else {
        if (e.key === 'Enter') {
            let newTask = `<article class="inputDisplay"><p>${inputToDo.value}</p><i class="fas fa-times-circle redHover"></i></article>`
            taskInput[0].insertAdjacentHTML("beforeend", newTask)
            inputToDo.value = "" 
        }   
    } 
})
// Workout 
inputWorkout.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && inputWorkout.value == "") {
        alert("Write something")
    } else {
        if (e.key === 'Enter') {
            let newTask = `<article class="inputDisplay"><p>${inputWorkout.value}</p><i class="fas fa-times-circle redHover"></i></article>`
            taskInput[1].insertAdjacentHTML("beforeend", newTask) 
            inputWorkout.value = ""
        }   
    } 
})
// Meal 
inputMeal.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && inputMeal.value == "") {
        alert("Write something")
    } else {
        if (e.key === 'Enter') {
            let newTask =  `<article class="inputDisplay"><p>${inputMeal.value}</p><i class="fas fa-times-circle redHover"></i></article>`
            taskInput[2].insertAdjacentHTML("beforeend", newTask)
            inputMeal.value = ""  
        }   
    } 
})
// Buy 
inputBuy.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && inputBuy.value == "") {
        alert("Write something")
    } else {
        if (e.key === 'Enter') {
            let newTask = `<article class="inputDisplay"><p>${inputBuy.value}</p><i class="fas fa-times-circle"></i></article>`
            taskInput[3].insertAdjacentHTML("beforeend", newTask)
            inputBuy.value = "" 
        }   
    } 
})
// Take activies input end

