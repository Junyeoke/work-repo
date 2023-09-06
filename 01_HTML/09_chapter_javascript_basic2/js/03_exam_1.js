// 함수 문제 풀이
// 1) 함수를 사용해서 출력하세요
// 입력 : 10
// 출력 : 20

// function sumTen (number) {
//     console.log(number + 10);
// }
// let num1 = Number(prompt("숫자를 입력하세요"));
// sumTen(num1);

// 연습문제 2
// 함수를 사용해서 출력하세요.
// 짝수이면 "even" 출력하고, 홀수이면 "odd" 출력하세요.
// 입력 : 2
// 출력 : even

// function name(params){
//     if(params % 2 === 0){
//         console.log("even");
//     } else {
//         console.log("odd");
//     }
// }
// let num2 = Number(prompt("숫자를 입력하세요"));
// name(num2);

// 함수를 이용해서 아래를 작성하세요.
// 1 ~ 10 까지의 합을 출력하세요.
// 입력 : 10
// 출력 : 55

// 함수정의 (return 값이 없음)
// function name(params) {
//     // 누적합 변수 초기화
//     let sumVal = 0;

//     // params : 끝값(입력된값)
//     for(let i=1;i<=params; i++) {
//         sumVal = sumVal + i; // 누적합(params까지의 누적합)
//     }
//     console.log(sumVal);
// }
// 함수 사용(호출)
// 사용법 :  함수명(값);
// let num = Number(prompt("숫자")); //10
// name(num);

// 4) 함수로 만들어서 풀기(1st, 2nd, 3rd 아무거나)
// 입력 1: 1
// 입력 2: 2
// 입력 3: 3
// 출력 : 1
// 최소값 구하기

// function name(params, params2, params3){
//     resultMin = Math.min(params, params2, params3);
//     console.log(resultMin);
// }

// let num = Number(prompt("값1입력"));
// let num2 = Number(prompt("값2입력"));
// let num3 = Number(prompt("값3입력"));
// name(num, num2, num3);


// 5) 함수로 만들어서 풀기(1st, 2nd, 3rd 아무거나)
// 5의 배수이면 "5의 배수이다" 출력하고,
// 아니면 "5의 배수가 아니다" 라고 출력하세요.
// 입력 : 5
// 출력 : 5의 배수이다.
// 입력값 : 5

// function name(num) {
//     if(num % 5 === 0) {
//         console.log("5의 배수이다.");
//     } else {
//         console.log("5의 배수가 아니다.");
//     }
// }

// let a = Number(prompt("숫자입력"));
// name(a);

// 6) 3가지 숫자를 입력받아 합계와 평균 구하기
// 입력 1 : 80
// 입력 2 : 90
// 입력 3 : 100
// 결과 : 270
//        90
function score (params, params2, params3){
    let sum = params + params2 + params3;
    let avg = sum / 3;
    console.log(sum);
    console.log(avg);
}

let a = Number(prompt("첫번째 숫자입력"));
let b = Number(prompt("두번째 숫자입력"));
let c = Number(prompt("세번째 숫자입력"));
score(a, b, c);