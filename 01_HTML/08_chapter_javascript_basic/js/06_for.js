// 반복문 : for(80%)
// 왜? 같은 명령문을 많은 횟수를 출력하고 싶을때 사용
// 예) alert("hello"); // 10번 출력
// 사용법 : 초기값을 조건식에 넣어 판단해서 참이면 반복, 거짓이면 중단
// for(초기값; 조건식; 증감식){
//      반복문(문장);
// }

// 예제) 안녕하세요를 3번 출력하세요 단, 반복문을 사용하시오.
// for(let k = 0; k < 3; k++) {
//     alert("안녕하세요");
// }

// TODO : 자주 나오는 코딩 3가지 패턴 : 꼭 기억할 것!
// TODO : 1) 카운팅 : 1씩 증가시키기
// 예제) count 변수가 1부터 10까지 1씩 증가하는 코드를 작성하시오.
// let count = 0;
// for(let i = 1; i <= 10; i++) {
//     count += 1; // 카운팅 코드
// }
// console.log(count);

// TODO : 2) 누적합
// 예제) 1부터 10까지 모든 숫자의 합
// let count = 0;
// let sumVal = 0;
// for(let i = 1; i <= 10; i++){
    // i = 1, 1 <= 10, count = 0 + 1 (1), sumVal = 0 + 1 (1)
    // i = 2, 2 <= 10, count = 1 + 1 (2), sumVal = 1 + 2 (3)
    // i = 3, 3 <= 10, count = 2 + 1 (3), sumVal = 3 + 3 (6)
    // i = 4, 4 <= 10, count = 3 + 1 (4), sumVal = 6 + 4 (10)
    // ....
    // i = 10, 10 <= 10, count = 9 + 1 (10), sumVal = 55;
//     count = count + 1;
//     sumVal = sumVal + count;
// }
// console.log(sumVal);

// TODO : 3) 문자열 붙이기
// 예제) ********** 를 화면에 출력하시오.
// let starCount = ""; // 빈문자열로 초기화
// for(let i = 1; i <= 10; i++){
    // 문자열 붙이기(카운팅)
    // i = 1 1 <= 10 (참) starCount = "" + "*" ("*")
    // i = 2 2 <= 10 (참) starCount = "*" + "*" ("**")
    // ...
    // i = 10 10 <= 10 (참) starCount = "*********" + "*" ("**********")
    // i = 11 11 <= 11 (거짓) starCount = "**********";
//     starCount += "*";
// }
// console.log(starCount);

// 연습문제
// 아래 결과 처럼 별 출력하기
// 결과
// *
// **
// ***
// ****
// *****

let starCount = "";
for(let i = 1; i <= 5; i++){
    starCount += "*";
    console.log(starCount);
}
