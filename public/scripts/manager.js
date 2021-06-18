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
    if (e.key === 'Enter') {
        
        let newTask = `<article class="inputDisplay">${inputToDo.value}</article>`
        taskInput[0].insertAdjacentHTML("beforeend", newTask)
        inputToDo.value = "" 
    }
})
// Workout 
inputWorkout.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        let newTask = `<article class="inputDisplay">${inputWorkout.value}</article>`
        taskInput[1].insertAdjacentHTML("beforeend", newTask) 
        inputWorkout.value = "" 
    }
})
// Meal 
inputMeal.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        let newTask = `<article class="inputDisplay">${inputMeal.value}</article>`
        taskInput[2].insertAdjacentHTML("beforeend", newTask)
        inputMeal.value = ""  
    }
})
// Buy 
inputBuy.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        let newTask = `<article class="inputDisplay">${inputBuy.value}</article>`
        taskInput[3].insertAdjacentHTML("beforeend", newTask)
        inputBuy.value = ""  
    }
})
// Take activies input end



var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
alert(dateTime)