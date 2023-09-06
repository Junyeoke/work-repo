// 시계 예제 : 계속 시간이 흘러가는 예제
// 선택함수 : #clock(div)
let clock = document.querySelector("#clock");

// 사용법 : setInterval(함수(), 밀리초)
//          계속 몇초마다 코드를 반복 실행하는 함수

setInterval(function(){
    // 반복할 코딩
    let now = new Date();
    clock.innerHTML = now;
}, 1000) // 1초마다 함수()반복