// filter 함수
// 함수의 조건이 참인 것만 뽑아서 몇 개만 새로운 배열을 만듦
// 원본배열보다 개수가 작음
// 특징 : 리턴값이 있음
// 예제 1) 아래 배열에서 3보다 큰 수만 뽑아서 새로운 배열을 만드시오.
// 사용법 ) let 변수 = 배열변수.filter((value)=>{조건문;});
// let numbers = [1,2,3,4,5];
// let result = numbers.filter((value)=> value > 3);
// console.log(result);

// 예제 2) 객체 조작
// money가 300000 초과한 사람만 뽑으세요
// let guys = [
//     {name:"YD", money:500000},
//     {name:"Bill", money:400000},
//     {name:"Andy", money:300000},
//     {name:"Roky", money:200000}
// ];

// let result1 = guys.filter((value)=> value.money > 300000);
// console.log(result1);

// 연습문제 1) filter 함수 사용해서 조작하세요.
// 결과 : [1, 2]
// let numbers = [1,2,3,4,5];
// let result = numbers.filter((val)=> val < 3);
// console.log(result);

// 연습문제 2)
// 결과 : [3]
let numbers = [1,2,3,4,5];
let result = numbers.filter((val)=> val > 2 && val < 4);
console.log(result);
