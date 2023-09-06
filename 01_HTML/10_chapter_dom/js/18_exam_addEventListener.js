let img = document.querySelector("#cover");
img.addEventListener("mouseover", function(){
    img.src = "./img/boy.jpg";
})

img.addEventListener("mouseout", function(){
    img.src = "./img/girl.jpg";
})