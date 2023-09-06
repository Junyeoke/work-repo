// TODO: 1131
// let input = prompt("문자하나입력");
// console.log(input);

// TODO: 1132
// let input = prompt("단어입력");
// console.log(input);

// TODO: 1133
// let input = prompt("공백이 있는 문자열 입력");
// console.log(input);

// TODO: 1295 알파벳 대소문자 변환

//   let a = prompt("알파벳입력").split("");
//   let result = "";
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] === a[i].toUpperCase()) {
//       result += a[i].toLowerCase();
//     } else {
//       result += a[i].toUpperCase();
//     }
//   }
//   console.log(result);

// TODO: 1406
// 문제 설명
// 영단어 하나가 입력된다.

// 그 단어가 love이면 I love you. 를 출력하시오.

// let answer = prompt("단어입력");
// if (answer === "love") {
//   console.log("I love you.");
// }

// TODO: 1408 ///
// 문제 설명
// 인터넷 서비스들은 대부분 아이디와 패스워드(password)를 이용한다.
// 이때 사용되는 패스워드는 여러 가지 방법으로 암호화되어 저장된다.

// [어떤 인터넷 서비스의 2가지 암호화 방법]

// - 입력받은 문자의 ASCII 코드값 + 2

// - (입력받은 문자의 ASCII 코드값 * 7) % 80 + 48

// 사용자의 패스워드를 2가지 방법으로 암호화한 결과를 출력하는 프로그램을 작성하시오.

// 입력
// 첫 번째 줄에
// 자 이내로 구성된 암호를 입력한다.(단, 입력되는 암호에 공백은 포함되어있지 않다.)

// 출력
// ① 첫 번째 줄에는 첫 번째 방식으로 암호화한 결과를 출력 한다.

// ② 두 번째 줄에는 두 번째 방식으로 암호화한 결과를 출력 한다.

// 입력 예시
// TEST

// 출력 예시
// VGUV
// L3EL

// let result1 = "";
// let result2 = "";
// let str = prompt("암호를 입력하세요");
// for (let i = 0; i < str.length; i++) {
//   result1 += String.fromCharCode(str.charCodeAt(i) + 2);
//   result2 += String.fromCharCode((str.charCodeAt(i) * 7) % 80 + 48);

// }
// console.log(result1);
// console.log(result2);

// TODO: 1410
// TODO: 1414

// TODO: 1418 : t를 찾아라
// 어떤 문자열이 있을 때 문자 t의 위치를 모두 찾아 출력하시오.

// 입력
// 공백이 없는 문자열이 한 줄 입력된다.(10글자 이하)

// 출력
// 소문자 t의 위치를 공백으로 분리하여 모두 출력하시오.

// 입력 예시
// test

// 출력 예시
// 1 4

// TODO: 1419
// TODO: 1733

// let a = prompt("입력하세요");
// if (a === "IOI") {
//   console.log("IOI is the International Olympiad in Informatics.");
// } else {
//   console.log("I don't care.");
// }

// TODO: 1734

// let id = prompt("id를 입력하세요");
// alert("welcome!" + " " + id);

// TODO: 1754
// let a = prompt("숫자를 입력하시오").split(" ");
// if(a[0] > a[1]){
//     console.log(a[1] + " " + a[0]);
// } else {
//     console.log(a[0] + " " + a[1]);
// }

// TODO: 1990
// let a = +prompt("숫자를 입력하세요");
// if (a % 3 === 0) {
//   console.log("1");
// } else {
//   console.log("0");
// }

// TODO: 2721 // 
// turtle
// error
// robot
// let a = prompt("입력1");
// let b = prompt("입력2").split("");
// let c = prompt("입력3").split("");

// let result = a.indexOf(a.length);
// console.log(result);
// if (
//   a.indexOf(a.length) === b.indexOf(0) &&
//   b.indexOf(b.length) === c.indexOf(1)
// ) {
//   console.log("good!");
// } else {
//   console.log("bad");
// }
