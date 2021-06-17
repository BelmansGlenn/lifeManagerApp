// FRONT END FILE TO INTERACT WITH THE DOM

// Take activies input
// To Do
let inputToDo = document.getElementById("toDo")
inputToDo.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        let inputValue = inputToDo.value
        console.log(inputValue);
    }
})
// Workout 
let inputWorkout = document.getElementById("workout")
inputWorkout.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        let inputValue = inputWorkout.value
        console.log(inputValue);
    }
})
// Meal 
let inputMeal = document.getElementById("meal")
inputMeal.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        let inputValue = inputMeal.value
        console.log(inputValue);
    }
})
// Buy 
let inputBuy = document.getElementById("buy")
inputBuy.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        let inputValue = inputBuy.value
        console.log(inputValue);
    }
})
// Take activies input end





