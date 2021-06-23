const checkRatio = document.querySelectorAll(".calculRatio")
// Color Ratio 
checkRatio.forEach(e => {
    if (e.innerHTML < "50") {
        e.parentNode.classList.add("under50")
    } else if (e.innerHTML < "70") {
        e.parentNode.classList.add("under70")

    } else {
        e.parentNode.classList.add("over70")
    }
});
// Color Ratio end