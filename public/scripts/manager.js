// FRONT END FILE TO INTERACT WITH THE DOM
const chooseDay = document.getElementById('chooseDay');
const dayOfWeek = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
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
        let tableNameWeek = chooseDay.childNodes[0].innerHTML;
        addTask({table: tableNameWeek, column: "todo", data:inputToDo.value});
        let newTask = `<article class="inputDisplay">${inputToDo.value}</article>`
        taskInput[0].insertAdjacentHTML("beforeend", newTask)
        inputToDo.value = "" 
    }
    
})
// Workout 
inputWorkout.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        let tableNameWeek = chooseDay.childNodes[0].innerHTML;
        addTask({table: tableNameWeek, column: "workout", data:inputWorkout.value});
        let newTask = `<article class="inputDisplay">${inputWorkout.value}</article>`
        taskInput[1].insertAdjacentHTML("beforeend", newTask) 
        inputWorkout.value = "" 
    }
})
// Meal 
inputMeal.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        let tableNameWeek = chooseDay.childNodes[0].innerHTML;
        addTask({table: tableNameWeek, column: "meal", data:inputMeal.value});
        let newTask = `<article class="inputDisplay">${inputMeal.value}</article>`
        taskInput[2].insertAdjacentHTML("beforeend", newTask)
        inputMeal.value = ""  
    }
})
// Buy 
inputBuy.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        let tableNameWeek = chooseDay.childNodes[0].innerHTML;
        addTask({table: tableNameWeek, column: "buy", data:inputBuy.value});
        let newTask = `<article class="inputDisplay">${inputBuy.value}</article>`
        taskInput[3].insertAdjacentHTML("beforeend", newTask)
        inputBuy.value = ""  

    }
})
// Take activies input end


const displayTask = (data) => {
    console.log(data);
}













// Path To DB


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