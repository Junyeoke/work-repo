// 함수(== 메소드) : js 내장함수(js 미리 만들어 놓은 함수들)
//                 예) .split(), toFixed() 등...
// 함수 사용 이유(why?) : 코드 재사용(코딩 생산성 증가)
//                       코딩 라인이 짧아짐(코딩 효율성 증가)

// TODO : 함수 만드는 법(함수 정의)
// TODO 1) 함수 1st 형태(패턴)
// (1) 함수 정의
//   function 함수명() {
//      실행문;
// }
// (2) 함수사용(호출)
// 함수명();  // 함수 사용(호출)

// 예제)
// 안녕하세요 출력하는 함수를 정의하고 사용해보세요
// (1) 함수정의 : 1번만 정의(함수명 유일)
// function hello (){
//     alert("안녕하세요");
// }
// (2) 함수사용
// hello();
// 코드 재사용(코딩 라인 짧아짐)
// hello();
// hello();

// 에제1) "Hello World" 를 출력하는 함수를 작성하고 함수를 사용(호출)하세요.
// function hello () {
//     alert("Hello World");
// }
// 만약 hello world2 출력하고 싶으면? >> 함수를 수정하거나 새로운 함수를 만든다. 
// >> 이러한 행위는 기존에 동작하던 소스가 오류가 발생할 가능성이 커짐(소스 수정 지양)
// hello();

// TODO 2) 함수 2nd 형태(패턴), 1st 보다 효율적임
// 사용법 : 
// (1) 함수 정의
// function 함수명(매개변수, ...) {
// 실행문 = 실행문 + 매개변수; // 실행문에서 매개변수 활용
// }

// (2) 함수 사용
// 함수명(값); // 매개변수에 값을 넣으면서 사용함
// 예제 2) 매개변수를 이용해서 함수를 정의하고 "안녕하세요" 출력해보세요
// (1) 함수정의
// function hello (params) {
//     alert(params); // 매개변수를 실행문에 활용
// }

// (2) 함수사용(호출)
// hello("안녕하세요"); // 매개변수에 값을 넣으면서 사용함

// TODO 3) 함수 3rd 형태
// 변수의 허용범위(스코프) : 항상 중괄호 안에서만 의미가 있음
// 사용법
// (1) 함수정의
// function 함수명(매개변수, ...){
//    let 결과 = 실행문(매개변수);
//    return 결과;       // 결과 내보내기(함수 밖으로 값을 내보냄)
// }
// (2) 함수 사용(호출)
// let 변수 = 함수명(매개변수);

// 예제 3) 매개변수와 return 이 있는 함수를 정의해서 hello world를 출력하시오.
// (1) 함수정의
// function hello (params){
//     return params + " world"; // params + " world" : 결과 내보내기됨. 
// }
// (2) 함수사용
// let result = hello("hello"); // "hello world" 결과가 나와서 result 변수에 저장됨
// alert(result);

// 예제 4) 어떤 수를 매개변수로 받아서 제곱을 구하는 함수를 작성하세요
// 입력 : f(3)
// 출력 : 9

// 함수정의
// function f (number){
//     return number*number;
// }
// 함수사용
// let result = f(3);
// alert(result);

// 예제 5) 원의 넓이 구하기 함수를 작성하세요
// 원의 넓이 공식 : 반지름 * 반지름 * 3.14
// 입력 : 5
// 출력 : 78.5


// 함수정의
// function getCircle (r) {
//     let result = r * r * 3.14;
//     return result;
// }
// 함수사용
// let num = Number(prompt("반지름을 입력하세요"));
// let result2 = getCircle(num);
// alert(result2);

// 예제 6) 원의 둘레 구하기 함수를 작성하세요
// 원의 둘레 공식 : 반지름 * 2 * 3.14
// 입력 : 6
// 출력 : 37.68

// let r = Number(prompt("반지름을 입력하세요"));
// function getCircle (r) {
//     let result = r * 2 * 3.14
//     return result;
// }
// let num = Number(prompt("반지름을 입력하세요"));
// let result2 = getCircle(num);
// alert(result2);

// 예제 7) 시작수 , 끝수가 주어지면 시작수~끝수까지의 합계를
//     구하는 함수를 작성하세요.
// 입력 1: 100
// 입력 2: 300
// 결과 :  40200

// let a = Number(prompt("시작수를 입력하세요"));
// let b = Number(prompt("끝 수를 입력하세요"));

function sumInt(first, end){
    let sumVal = 0; // 누적합 변수
    for(let i = first; i <= end; i++){
        sumVal += i;
        
    }
    return sumVal;
}

// 함수사용
let a = Number(prompt("첫수를 입력"));
let b = Number(prompt("끝수를 입력"));

let result = sumInt(a, b);
alert(result);

