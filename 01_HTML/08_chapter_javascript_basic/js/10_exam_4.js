// 1) 1 부터 100 까지 출력하기

// for (let i = 1; i <= 100; i++) {
//     console.log(i);
// }

// 2) 1부터 n까지 출력하기
// let result = "";
// let n = Number(prompt("숫자를 입력하세요"));
// for (let i = 1; i <= n; i++) {
//     result += i + " ";
// }
// console.log(result)

// 3) a 부터 b까지 출력하기
// 입력예시 a : 3
// 입력예시 b : 8

// let a = Number(prompt("숫자1"));
// let b = Number(prompt("숫자2"));
// let resultMin = Math.min(a, b); // 최소값
// let resultMax = Math.max(a, b); // 최대값
// let result1 = " " // 문자열 붙이기, 빈 문자열로 초기화
// for(let i = resultMin; i <= resultMax; i++) {
    // 문자열 붙이기 : 문자열 + 숫자 -> 문자열 (자동 자료형변환)
//     result1 += i + " ";
// }
// console.log(result1);

// 4) 별 출력하기
// 입력 : 5 / 출력 : *****

// let star = Number(prompt("숫자를 입력하세요"));
// let result = " ";
// for(let i = 0; i < star; i++){
//     result += "*"
// } 
// console.log(result);


// 5) 1 ~ 10 까지 합계를 구해서 아래와 같이 화면에 출력해 보세요
// 출력 : "1~10까지의 합계 : 55"
// TODO : 누적합
// 누적합을 위한 임시변수

// let result1 = 0; // 0으로 초기화
// for(let i = 1; i <= 10; i++){
    // 누적합
//     result1 += i;
// } 
// console.log('"1~10까지의 합계 : ' + result1 + '"');

