// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
const dailyT = document.querySelector(".dailyT")
const dayRatio = document.querySelector(".dayRatio")
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Pick Actual Day 
const date = new Date();
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
const actualDay = weekday[date.getDay()]
console.log(actualDay);

const fetchLifeAppDB = () => {
    fetch('api/loadtask', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(response => response.json())
    .then(data => {
      displayStats(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}
fetchLifeAppDB();

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

const displayStats = (data) => {
    let downCounter = 0
    if (actualDay === "Monday") {
        dailyT.innerHTML = data.allTaskMonday.length
        data.allTaskMonday.forEach(e => {
            if (e.done === 1) {
                downCounter++
            }
            let ratio = dailyT.innerHTML
            ratio = downCounter * 100 / ratio
            dayRatio.innerHTML = Math.round(ratio)
            colorRatio()
        })
    } else if (actualDay === "Thursday") {
        dailyT.innerHTML = data.allTaskThursday.length
        data.allTaskThursday.forEach(e => {
            if (e.done === 1) {
                downCounter++
            }
            let ratio = dailyT.innerHTML
            ratio = downCounter * 100 / ratio
            dayRatio.innerHTML = Math.round(ratio)
            colorRatio()
        })
    } else if (actualDay === "Wednesday") {
        dailyT.innerHTML = data.allTaskWednesday.length
        data.allTaskWednesday.forEach(e => {
            if (e.done === 1) {
                downCounter++
            }
            let ratio = dailyT.innerHTML
            ratio = downCounter * 100 / ratio
            dayRatio.innerHTML = Math.round(ratio)
            colorRatio()
        })
    } else if (actualDay === "Tuesday") {
        dailyT.innerHTML = data.allTaskTuesday.length
        data.allTaskTuesday.forEach(e => {
            if (e.done === 1) {
                downCounter++
            }
            let ratio = dailyT.innerHTML
            ratio = downCounter * 100 / ratio
            dayRatio.innerHTML = Math.round(ratio)
            colorRatio()
        })
    } else if (actualDay === "Friday") {
        dailyT.innerHTML = data.allTaskFriday.length
        data.allTaskFriday.forEach(e => {
            if (e.done === 1) {
                downCounter++
            }
            let ratio = dailyT.innerHTML
            ratio = downCounter * 100 / ratio
            dayRatio.innerHTML = Math.round(ratio)
            colorRatio()
        })
    } else if (actualDay === "Saturday") {
        dailyT.innerHTML = data.allTaskSaturday.length
        data.allTaskSaturday.forEach(e => {
            if (e.done === 1) {
                downCounter++
            }
            let ratio = dailyT.innerHTML
            ratio = downCounter * 100 / ratio
            dayRatio.innerHTML = Math.round(ratio)
            colorRatio()
        })
    } else if (actualDay === "Sunday") {
        dailyT.innerHTML = data.allTaskSunday.length
        data.allTaskSunday.forEach(e => {
            if (e.done === 1) {
                downCounter++
            }
            let ratio = dailyT.innerHTML
            ratio = downCounter * 100 / ratio
            dayRatio.innerHTML = Math.round(ratio)
            colorRatio()
        })
    }
}

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

const colorRatio = () => {
    const checkRatio = document.querySelectorAll(".calculRatio")
    checkRatio.forEach(e => {
        if (e.innerHTML < "50") {
            e.parentNode.classList.add("under50")
        } else if (e.innerHTML < "70") {
            e.parentNode.classList.add("under70")

        } else {
            e.parentNode.classList.add("over70")
        }
    });
} 

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx