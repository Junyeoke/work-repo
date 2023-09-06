// 문제 풀이
// 1) 증감연산자를 활용해서 화면에 출력하세요
// let x = 10;
// alert(x);
// ++x;
// alert(x);
// ++x;
// alert(x);

// 2) 공식 : price(개당가격) = 1500, num(구매개수) = 3, pay(지불금액) = 10000;
//    잔돈계산 공식 = pay - price * num;

// let price = 1500;                   // 개당가격
// let num = 3;                        // 구매개수
// let pay = 10000;                    // 지불금액
// let change = pay - price * num;     // 잔돈계산 공식

// 출력방법 : alert
// alert("개당 가격 : " + price + "원");
// alert("구매 개수 : " + num + "개");
// alert("지불 금액 : " + pay + "원");
// alert("거스름돈은 " + change + "원입니다.");

// 출력방법 : console.log
// TODO : 문자열 붙이기 : 문자열 + 숫자 => 문자열 + 문자열로 변경됨
// console.log("- 개당 가격 : " + price + "원");
// console.log("- 구매 개수 : " + num + "개");
// console.log("- 지불 금액 : " + pay + "원");
// console.log("- 거스름돈은 " + change + "원입니다.");

// 3) 입력함수 : prompt() 이용해서 입력받기
// 아래 코딩을 완성하세요
// 입력 1 : a
// 입력 2 : b
// 출력 : b a

// 사용법 : let 변수명 = prompt("문자열"); // 문자열 (입력대화상자의 문구)
// let char1 = prompt("1개의 문자가 입력됩니다.");
// let char2 = prompt("1개의 문자가 입력됩니다.");

// alert(char2 + " " + char1);

// 4) 입력받은 정수를 줄을 바꿔 3번 출력
// 단, 줄바꿈 특수문자를 사용해서 한번에 출력하세요
// let num = prompt("정수를 입력하시오.");
// alert(num + "\n" + num + "\n" + num);

// 5) 단어 2개가 입력된다.
// 2개를 거꾸로 붙여서 출력
// 입력 1) hello
// 입력 2) world
// 출력 : worldhello
// let str1 = prompt("단어를 입력하시오");
// let str2 = prompt("단어를 입력하시오");
// alert(str2 + str1);

// 6) 입력 1: Hello
//    입력 2: World
// 출력 : Hello
//        World
// let char1 = prompt("1개의 단어를 입력하시오");
// let char2 = prompt("1개의 단어를 입력하시오");
// alert(char1 + "\n" + char2);

// 7) 두 정수의 합을 출력하시오.
// 입력 1: 123
// 입력 2: -123
// 출력 : 0
// Number(prompt("문자열"))
// let num1 = Number(prompt("정수 1개를 입력하세요"));
// let num2 = Number(prompt("정수 1개를 입력하세요"));
// alert(num1 + num2);

// 