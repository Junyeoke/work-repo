
function setToggle(){
    let cont = document.querySelector("#content");
    let result = cont.classList.contains("dark");
    if(result === true) {
        cont.classList.toggle("light");
    } else {
        cont.classList.toggle("dark");
    }
}

