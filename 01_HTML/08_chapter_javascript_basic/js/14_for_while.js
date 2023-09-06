// 반복문 : for(80%) === while 문
// 예제 1)
// 입력 : 없음
// 출력 : 안녕하세요 5번 출력
// TODO : for문 (반복문 #1)

// for(let i = 1; i <= 5; i++){
//     console.log("안녕하세요");
// }

// TODO : while 문 (반복문 #2)
// 사용법 : 

// 초기값;
// while(조건식) {
//     반복문;
//     증감식;
// }

// let i = 1;  // 초기값

// while(i<=5){ // while(조건식)
//     console.log("안녕하세요");
//     i++; // 증감식
// }

// TODO : do ~ while 문 (반복문 #3)
// 특징 : 조건식이 거짓이라도 1번은 실행함

// let i = 1;  // 초기값

// do {
//     console.log("안녕하세요");
//     i++;    // 증감식
// } while(i<=5); // while(조건문);

// TODO : 반복문 특수형태 : 무한루프(무한히 반복)
// 사용법 : 예제
// while(true) { 반복문; }

// while(true){
//     console.log("안녕하세요");
// }

// TODO : 반복문 특수형태 : 무한루프 (for 문)
// for(;true;){
//     console.log("안녕하세요");
// }

// 예제 : 무한루프 예제(while)
// 입력값이 숫자 5가 입력될때 까지 무한히 화면에 숫자를 출력하세요

// while(true){
//     let num = Number(prompt("숫자를 입력"));
//     if(num === 5){
//         break;
//     }
    // 화면출력
//     console.log(num + "번째 반복입니다.");
// }

// 연습문제
// 숫자를 입력하면 이미지를 화면에 그 숫자만큼 반복해서 출력하세요

let num = Number(prompt("숫자를 입력"));
let result = "";
for(let i = 1; i <= num; i++){
    result += "<img src='./img/fish1.jpg'/>";
}
 document.querySelector("#output").innerHTML = result;
