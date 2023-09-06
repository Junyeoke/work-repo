// 1) 부호를 바꾸어 출력한다.
// 입력 : -1
// 출력 : 1

// let num = Number(prompt("숫자를 입력하세요"));
// alert(num * -1);

// 2)
// 입력 : -214783649
// 출력 : -214783649
// let num2 = Number(prompt("숫자를 입력하세요"));
// alert(num2);

// 3) 정수 2개 입력된다. a를 b로 나눈 몫을 출력한다.
// 입력 1(a) : 1
// 입력 2(b) : 3
// 출력 : 0
// 힌트 : parseInt(실수) -> 정수, parseInt(문자열) -> 정수
// let a = Number(prompt("숫자입력"));
// let b = Number(prompt("숫자입력"));
// alert(parseInt(a/b));

// 4) 정수 2개 입력된다. a를 b로 나눈 나머지를 출력한다.
// 입력 1 : 10
// 입력 2 : 3
// 출력 : 1
// let num = Number(prompt("숫자1"));
// let num2 = Number(prompt("숫자2"));
// alert(parseInt(num % num2));

// 5) 입력된 정수에 1을 더해 출력한다.
// 입력 : 2147483647
// 출력 : 2147483648
// let num3 = Number(prompt("숫자입력"));
// alert(num3 + 1);

// 6) 정수 2개 입력받아 자동 계산하기
// 첫 줄에 합
// 둘째 줄에 차(빼기),
// 셋째 줄에 곱,
// 넷째 줄에 몫,
// 다섯째 줄에 나머지,
// 입력 1: 10
// 입력 2: 3
// 출력 : 13
//   7
//   30
//   3
//   1
// let num4 = Number(prompt("숫자1"));
// let num5 = Number(prompt("숫자2"));
// let sum = num4 + num5 + "\n";
// let minus = num4 - num5 + "\n";
// let double = num4 * num5 + "\n";
// let divide = parseInt(num4 / num5) + "\n";
// let remain = (num4 % num5) + "\n";
// console.log(sum + minus + double + divide + remain);


// 7) 정수 3개 입력받아 합과 평균 출력하기
// 입력 1 : 1
// 입력 2 : 2
// 입력 3 : 3
// let num1 = Number(prompt("숫자1"));
// let num2 = Number(prompt("숫자2"));
// let num3 = Number(prompt("숫자3"));
// let sum = parseInt(num1 + num2 + num3);
// let avg = sum / 3;
// alert(sum+"\n"+avg);


// 8) 정수 1개 입력받아 2배 곱해 출력하기(설명)
// 입력 : 1024
// 출력 : 2048
// let val = parseInt(prompt("정수입력"));
// alert(val * 2);

// 9) 두 정수(a,b) 입력받아 비교하기1(설명)
// a가 b보다 큰 경우 1을, 그렇지 않은 경우 0을 출력한다.
// 입력 1(a): 9
// 입력 2(b): 1

// let val1 = Number(prompt("정수1"));
// let val2 = Number(prompt("정수2"));
// if(val1 > val2) {
//     alert(1);
// } else {
//     alert(0);
// }

// 9) 두 정수 (a,b) 입력받아 비교하기2(설명)
// a와 b의 값이 같은 경우 1을, 그렇지 않은 경우 0을 출력한다.

// let a = Number(prompt("정수1"));
// let b = Number(prompt("정수2"));
// if(a === b) {
//     alert(1);
// } else {
//     alert(0);
// }

// 10) // 참 거짓 바꾸기(설명)
// 입력된 값이 0이면 1, 1이면 0을 출력한다.
// (단, 0 또는 1 만 입력된다.)
// let num = Number(prompt("숫자입력"));
// if(num === 0) {
//     alert(1);
// } else {
//     alert(0);
// }

// 11) 정수 3개 입력받아 가장 작은 수 출력하기(설명)
// 가장 작은 값을 출력한다.
// 입력 1: 3
// 입력 2: -1
// 입력 3: 5
// 출력 : -1

// let val = Number(prompt("숫자입력"));
// let val2 = Number(prompt("숫자입력"));
// let val3 = Number(prompt("숫자입력"));
// alert(Math.min(val, val2, val3));

// 12) 정수 3개 입력받아 짝수만 출력하기
// let a = Number(prompt("숫자입력"));
// let b = Number(prompt("숫자입력"));
// let c = Number(prompt("숫자입력"));
// let result = "";
// if(a % 2 === 0) {
//     result += a + "\n";
// }

// if(b % 2 === 0) {
//     result += b + "\n";
// }

// if(c % 2 === 0) {
//     result += c + "\n";
// }

// alert(result);


// 13) 정수 3개 입력받아 짝/홀 출력하기(설명)
// odd(홀수), even(짝수) // 나머지 연산으로 판단!
// 입력 1: 1
// 입력 2: 2
// 입력 3: 8
// 출력 : odd
//       even
//       even
// let num = Number(prompt("숫자입력"));
// let num2 = Number(prompt("숫자입력"));
// let num3 = Number(prompt("숫자입력"));
// let result1 = "";
// if(num % 2 === 0) {
//     result1 += "even" + "\n"; 
// } else {
//     result1 += "odd" + "\n";
// }
// if(num2 % 2 === 0) {
//     result1 += "even" + "\n"; 
// } else {
//     result1 += "odd" + "\n";
// }
// if(num3 % 2 === 0) {
//     result1 += "even" + "\n"; 
// } else {
//     result1 += "odd" + "\n";
// }
// alert(result1);

// 14)

// let score = Number(prompt("점수를 입력해주세요"));
// if (score >= 90 && score < 100) {
//     alert("A");
// } else if (score >= 70 && score < 90) {
//     alert("B");
// } else if (score >= 40 && score < 70) {
//     alert("C");
// } else if (score >= 0 && score < 40) {
//     alert("D");
// }

// 15) 평가 출력
// 평가 : 내용
// A : best!!!
// B : good!!
// C : run!
// D : slowly~
// 나머지 문자들 : what?
// 입력 : A
// 출력 : best!!!

// let test = prompt("평가를 입력하세요");
// if(test === "A") {
//     alert("best!!!");
// } else if (test === "B"){
//     alert("good!!");
// } else if (test === "C") {
//     alert("run!")
// } else if (test === "D") {
//     alert("slowly~");
// } else {
//     alert("what?");
// }

// 16) 정수 판별
// 양수이면 "양수", 음수이면 "음수", 0이면 0을 출력하시오.
// 힌트 : 입력값 > 0 (양수)
// 입력 : 5
// 출력 : 양수
// let val = Number(prompt("정수를 입력하세요"));
// if (val > 0) {
//     alert("양수");
// } else if(val < 0) {
//     alert("음수");
// } else {
//     alert("0");
// }

// 17) 비만도 측정 0
// BMI 수치   비만 판정
// ~10 이하   정상
// 11~20 이하   과체중
// 20 초과   비만
// 비만도를 입력받아서 위의 문자열로 출력하세요
// 입력 : 15 
// 출력 : 과체중

// let bmi = Number(prompt("BMI 수치를 입력하세요"));
// if (bmi <= 10) {
//     alert("정상");
// } else if (bmi >= 11 && bmi <= 20) {
//     alert("과체중");
// } else {
//     alert("비만");
// }