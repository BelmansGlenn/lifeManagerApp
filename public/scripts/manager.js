// FRONT END FILE TO INTERACT WITH THE DOM
const chooseDay = document.getElementById('chooseDay');
const dayOfWeek = ["Monday","Tuesday","Wedn.","Thurs.","Friday","Saturday","Sunday"];
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