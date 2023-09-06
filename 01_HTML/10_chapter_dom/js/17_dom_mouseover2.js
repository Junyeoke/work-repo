// 도형 조작
// 선택함수 : #rect
let myRect = document.querySelector("#rect");

// 마우스 위로 이벤트 함수 :onmouseover="함수명()"
// .addEventListener("click", function(){});
myRect.addEventListener("mouseover", function(){
    // 마우스가 위로 올라가면 함수 실행
    myRect.style.backgroundColor = "green";
    myRect.style.borderRadius = "50%";
})

// 마우스 밖으로 나가면 함수
myRect.addEventListener("mouseout", function(){
    // 마우스가 밖으로 나가면 함수 실행
    myRect.style.backgroundColor = "";
    myRect.style.borderRadius = "";
})