// FRONT END FILE TO INTERACT WITH THE DOM
const chooseDay = document.getElementById('chooseDay');
const dayOfWeek = ["Monday","Tuesday","Wedn.","Thurs.","Friday","Saturday","Sunday"];
const inputToDo = document.getElementById("toDo");
const inputWorkout = document.getElementById("workout");
const inputMeal = document.getElementById("meal");
const inputBuy = document.getElementById("buy");
let i = 0;
let theDay = `<p>${dayOfWeek[i]}</p>`;
chooseDay.addEventListener('click', (e) => {
    chooseDay.innerHTML="";
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
        let inputValue = inputToDo.value
        console.log(inputValue);
    }
})
// Workout 
inputWorkout.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        let inputValue = inputWorkout.value
        console.log(inputValue);
    }
})
// Meal 
inputMeal.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        let inputValue = inputMeal.value
        console.log(inputValue);
    }
})
// Buy 
inputBuy.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        let inputValue = inputBuy.value
        console.log(inputValue);
    }
})
// Take activies input end


