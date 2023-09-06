// TODO 1110
// 정수형으로 변수를 선언하고, 변수에 정수값을 저장한 후
// 변수에 저장되어 있는 값을 그대로 출력해보자.
// 풀이
// let n = Number(prompt("정수를 입력해주세요"));
// document.querySelector("#texta").innerHTML = n;

// TODO 1111
// 어떤 정수가 입력되면 %를 붙여 출력하시오.
// 풀이
// let x = Number(prompt("정수를 입력해주세요"));
// document.querySelector("#texta").innerHTML = x + "%";

// TODO 1112
// 문제 설명
// 입력 받은 두 정수를 출력한다.
// 입력
// 두 정수를 차례대로 입력받는다.
// 출력
// 입력받은 순서대로 출력한다.
// 풀이
// let a = Number(prompt("첫번째 정수를 입력하세요"));
// let b = Number(prompt("첫번째 정수를 입력하세요"));
// document.querySelector("#texta").innerHTML = a + " " + b;

// TODO 1113
// 문제 설명
// 두 정수를 입력받아 순서를 바꿔서 출력하시오.
// 입력
// 두 정수를 입력받는다.
// 출력
// 순서를 바꿔서 출력한다.
// 풀이
// let a = Number(prompt("첫번째 정수를 입력하세요"));
// let b = Number(prompt("첫번째 정수를 입력하세요"));
// document.querySelector("#texta").innerHTML = b + " " + a;

// TODO 1114
// 문제 설명
// 두 정수를 입력받아 합을 출력한다.
// 입력
// 두 정수를 입력받는다.
// 출력
// 두정수의 합을 출력한다.
// let a = Number(prompt("첫번째 정수를 입력하세요"));
// let b = Number(prompt("첫번째 정수를 입력하세요"));
// document.querySelector("#texta").innerHTML = a + b;

// TODO 1115
// 문제 설명
// 두 정수의 덧셈의 결과를 출력한다.
// 두 수는 int 범위를 넘어선 64비트 정수형 값이다.
// 입력
// 두 정수 a, b가 입력된다. (-263 <= a+b <= 263-1)
// 출력
// 두 정수의 합을 출력한다.
// let a = Number(prompt("첫번째 정수를 입력하세요"));
// let b = Number(prompt("첫번째 정수를 입력하세요"));
// document.querySelector("#texta").innerHTML = a + b;

// TODO 1116
// 문제 설명
// 두 정수를 입력받아 아래와 같이 출력하시오.
// 예)  3 2
// 3+2=5
// 3-2=1
// 3*2=6
// 3/2=1
// 입력
// 두 정수 a, b를 입력받는다.
// 출력
// a와 b에 대한 사칙연산 결과를 양식에 맞추어 출력한다.
// let a = Number(prompt("첫번째 정수를 입력하세요"));
// let b = Number(prompt("두번째 정수를 입력하세요"));
// let plus = a + "+" + b + "=" + (a + b);
// let minus = a + "-" + b + "=" + (a - b);
// let double = a + "*" + b + "=" + (a * b);
// let divide = a + "/" + b + "=" + (a / b);
// document.querySelector("#texta").innerHTML = plus+"\n"+minus+"\n"+double+"\n"+divide;

// TODO  1117
// 문제 설명
// 두 실수를 입력받아 두 실수의 곱을 출력하되 소수 둘째자리까지 출력하시오.
// 입력
// 두 실수를 입력받는다.
// 출력
// 두 실수의 곱을 소수 둘째자리까지 출력한다.

// let a = Number(prompt("첫번째 실수를 입력하세요"));
// let b = Number(prompt("두번째 실수를 입력하세요"));
// let result = (a * b).toFixed(2);
// document.querySelector("#texta").innerHTML = result;

// TODO 1118
// 문제 설명
// 삼각형의 넓이를 구하는 프로그램을 작성한다.

// 삼각형의 넓이 = 밑변 * 높이 / 2

// 입력
// 밑변(a)과 높이(b)가 정수로 입력된다.

// 출력
// 삼각형의 넓이를 소수 첫째자리까지 출력한다.
// let a = Number(prompt("밑변을 입력하세요"));
// let b = Number(prompt("높이를 입력하세요"));
// let result = ((a * b) / 2).toFixed(1);
// document.querySelector("#texta").innerHTML = result;

// TODO 1119
// 문제 설명
// 하루는 24시간이다.
// 일(day)이 입력으로 주어지면 시간으로 변환하시오.

// 입력
// 일(day)이 입력된다.

// 출력
// 시간으로 변환해서 출력한다.

// 입력 예시   
// 2

// 출력 예시
// 48

// let day = Number(prompt("일(day)를 입력하세요"));
// let result = day * 24;
// document.querySelector("#texta").innerHTML = result;

// TODO 1120
// 문제 설명
// 세 정수가 입력되면 평균을 출력하시오.

// 입력
// 세 정수가 입력된다.

// 출력
// 세 수의 평균을 소수 둘째자리까지 출력하시오.

// 입력 예시   
// 1 2 3

// 출력 예시
// 2.00

// let a = Number(prompt("첫번째 정수를 입력하세요"));
// let b = Number(prompt("두번째 정수를 입력하세요"));
// let c = Number(prompt("세번째 정수를 입력하세요"));
// let result = ((a + b + c) / 3).toFixed(2);
// document.querySelector("#texta").innerHTML = result;

// TODO 1121
// 문제 설명
// 정수 계산에서 나머지를 구하시오.

// 예를 들어

// 7 / 5 의 나머지는 2입니다.

// 입력
// 두 정수 a, b를 입력받는다.

// a는 피제수, b는 제수를 나타낸다.

// 예) 7 5 가 입력되었다면  ====>   7  /  5 를 뜻함

// 출력
// 나머지를 출력한다.

// 입력 예시   
// 7 5

// 출력 예시
// 2

// let a = Number(prompt("첫번째 정수를 입력하세요"));
// let b = Number(prompt("두번째 정수를 입력하세요"));
// let result = a % b
// document.querySelector("#texta").innerHTML = result;

// TODO 1122
// 문제 설명
// 초를 입력받아 분 / 초의 형태로 출력하시오.
// 예)
// 60  ====>   1 0    (1분 0초를 뜻함)
// 70    ====>    1  10       (1분 10초를 뜻함)

// 입력
// 초가 입력된다.(자연수)

// 출력
// 분, 초 순서로 출력한다.

// 입력 예시   
// 70

// 출력 예시
// 1 10

// let sec = Number(prompt("초를 입력하세요"));
// let result = (sec / 60).toFixed(0) + " " + (sec % 60).toFixed(0);
// document.querySelector("#texta").innerHTML = result;


// TODO 1123
// 문제 설명
// 섭씨 온도가 입력되면 화씨 온도로 변환하시오.

// 화씨 온도 = 9 / 5 * 섭씨온도 + 32

// 입력
// 섭씨 온도가 입력된다. (정수)

// 출력
// 화씨온도를 소수 셋째자리 까지 출력한다. (실수)

// 입력 예시   
// 30

// 출력 예시
// 86.000

// let tem = Number(prompt("섭씨온도를 입력하세요"));
// let result = (((9 / 5) * tem) + 32).toFixed(3);
// document.querySelector("#texta").innerHTML = result;

// TODO 1125
// 문제 설명
// 10진수 정수를 입력받아 8진수와 16진수로 출력한다.
// 입력
// 10진수 정수 하나가 입력된다.

// 출력
// 8진수와 16진수를 차례대로 출력한다.

// (16진수는 대문자 출력)

// 입력 예시   
// 10

// 출력 예시
// 12 A

// let num = Number(prompt("10진수 정수를 입력하세요"));
// let result1 = num.toString(8);
// let result2 = num.toString(16);
// document.querySelector("#texta").innerHTML = result1 + " " + result2;

// TODO 1131
// 문제 설명
// 입력된 문자를 그대로 출력한다.

// 입력
// 문자 하나가 입력된다.

// 출력
// 입력받은문자를 그대로 출력된다.

// 입력 예시   
// a

// 출력 예시
// a

// let char = prompt("문자를 입력하세요");
// document.querySelector("#texta").innerHTML = char;

// TODO 1132
// 문제 설명
// 한 단어를 입력받아 출력한다.

// 입력
// 한 단어가 입력으로 주어진다.(단어 길이는 8글자 이하)

// 출력
// 입력받은 단어를 그대로 출력한다.

// 입력 예시   
// cat

// 출력 예시
// cat

// let str = prompt("단어를 입력하세요");
// document.querySelector("#texta").innerHTML = str;

// TODO 1133
// 문제 설명
// scanf("%s", str);를 사용하면 공백이후의 문자를 입력받지 못한다.

// 공백이 있는 문자열을 입력받아 출력해보자.

// 입력
// 공백이 포함된 문자열이 입력된다. (최대길이 30)

// 출력
// 입력받은 문자열을 그대로 출력한다.

// 입력 예시   
// black sheep wall

// 출력 예시
// black sheep wall

// let str = prompt("문자열을 입력하세요");
// document.querySelector("#texta").innerHTML = str;

// TODO 1135
// 문제 설명
// 두 정수(a, b)를 입력받아 a가 b보다 크거나 같으면(이상) 1, a가 b보다 작으면(미만) 0을 출력하는 프로그램을 작성해보자.

// 참고)
// 어떤 값을 비교하기 위해 관계연산자를 사용할 수 있다.
// 관계연산자는 주어진 2개 값을 비교하고, 그 결과가 참인 경우, 참(true)을 나타내는 정수값 1로 계산되고 거짓인 경우, 거짓(false)를 나타내는 정수값 0으로 계산된다.
// 관계연산자도 일반적인 사칙연산자처럼 주어진 두 수를 이용해 계산을 수행하고 그 결과를 1(참), 또는 0(거짓)으로 계산해 주는 연산자이다.
// 관계연산자의 종류는 다음과 같다. >, <, >=, <=, ==(같다), !=(다르다)

// 입력
// 두 정수 a, b가 공백을 두고 입력된다.(a,b는 int형 범위)

// 출력
// a가 b보다 크거나 같을 경우 1, 그렇지 않은 경우 0을 출력한다.

// 입력 예시   
// 2 3

// 출력 예시
// 0

// let a = Number(prompt("첫 번째 정수를 입력하세요"));
// let b = Number(prompt("두 번째 정수를 입력하세요"));
// if (a >= b) {
//     document.querySelector("#texta").innerHTML = 1;
// } else if (a < b) {
//     document.querySelector("#texta").innerHTML = 0;
// }

// TODO 1136
// 문제 설명
// 두 정수(a, b)를 입력받아 a와 b가 같으면 1, 같지 않으면 0을 출력하는 프로그램을 작성하시오.

// 참고)
// 어떤 값을 비교하기 위해 관계연산자를 사용할 수 있다.
// 관계연산자는 주어진 2개 값을 비교하고, 그 결과가 참인 경우, 참(true)을 나타내는 정수값 1로 계산되고 거짓인 경우, 거짓(false)를 나타내는 정수값 0으로 계산된다.
// 관계연산자도 일반적인 사칙연산자처럼 주어진 두 수를 이용해 계산을 수행하고 그 결과를 1(참), 또는 0(거짓)으로 계산해 주는 연산자이다. 관계연산자는 다음과 같다. >, <, >=, <=, ==(같다), !=(다르다)

// 입력
// 두 정수 a, b가 공백을 두고 입력된다.(a,b는 int형 범위)
// 출력
// a와 b가 같을 경우 1, 그렇지 않은 경우 0을 출력한다.
// 입력 예시   
// 2 3 

// 출력 예시
// 0

// let a = Number(prompt("첫 번째 정수를 입력하세요"));
// let b = Number(prompt("두 번째 정수를 입력하세요"));
// if (a === b) {
//     document.querySelector("#texta").innerHTML = 1;
// } else {
//     document.querySelector("#texta").innerHTML = 0;
// }


// TODO 1137
// 문제 설명
// 두 정수(a, b)를 입력받아 a와 b가 같으면 0, 같지 않으면 1을 출력하는 프로그램을 작성하시오.

// 참고)
// 어떤 값을 비교하기 위해 비교/관계연산자(comparison/relational)를 사용할 수 있다.
// 관계연산자는 주어진 2개 값을 비교하고, 그 결과가 참인 경우, 참(true)을 나타내는 정수값 1로 계산되고 거짓인 경우, 거짓(false)를 나타내는 정수값 0으로 계산된다.
// 비교/관계연산자도 일반적인 사칙연산자처럼 주어진 두 수를 이용해 계산을 수행하고 그 결과를 1(참), 또는 0(거짓)으로 계산해 주는 연산자이다.
// 비교/관계연산자는 >, <, >=, <=, ==(같다), !=(다르다) 의 4가지가 있다.

// 입력
// 두 정수 a, b가 공백을 두고 입력된다.(a,b는 int형 범위)

// 출력
// a와 b가 같지 않을 경우 1, 그렇지 않은 경우 0을 출력한다.

// 입력 예시   
// 2 3

// 출력 예시
// 1

// let a = Number(prompt("첫 번째 정수를 입력하세요"));
// let b = Number(prompt("두 번째 정수를 입력하세요"));
// if(a === b) {
//     document.querySelector("#texta").innerHTML = 0;
// } else {
//     document.querySelector("#texta").innerHTML = 1;
// }


// TODO 1138
// 문제 설명
// 1(true, 참) 또는 0(false, 거짓) 이 입력되었을 때 결과를 반대로 출력하는 프로그램을 작성해보자.

// 참고)
// C언어에서 비교/관계 연산(==, !=, >, <, >=, <=)이 수행될 때, 0은 거짓(false)을 의미하고, 0이 아닌 모든 수는 참(true)으로 인식한다.
// 참 또는 거짓의 논리값을 역(반대)로 바꾸기 위해서는 논리(logical) 연산자 ! 를 사용할 수 있다.
// 이러한 논리 연산을 NOT 연산이라고도 부른다.
// 참, 거짓의 논리값(boolean value, 불 값을 다루어주는 논리연산자는 !(not), &&(and), ||(or) 이 있다.

// 입력
// 0또는 1이 입력된다.

// 출력
// 입력된 논리값의 반대로 출력한다.

// 입력 예시   
// 0

// 출력 예시
// 1

// let a = Number(prompt("1 or 0을 입력하세요"));
// if(a === 1) {
//     document.querySelector("#texta").innerHTML = 0;
// } else {
//     document.querySelector("#texta").innerHTML = 1;
// }

// TODO 1139
// 문제 설명
// 두 가지의 참(1) 또는 거짓(0)이 입력될 때, 모두 참일 때는 1이, 그렇지 않으면 0이 출력되는 프로그램을 작성해보자.

// 참고)
// 논리연산자 && 는 주어진 2개의 논리값이 모두 참(1) 일 때에 1(참)으로 계산하고,이외의 경우에는 0(거짓) 으로 계산한다.
// 이러한 논리 연산을 AND 연산이라고도 부르고, &&로 표시한다.

// 입력
// 두 정수가 입력된다.

// 출력
// 두 정수의 값이 모두 참(1) 이면 참(1), 하나라도 거짓(0)이면 거짓(0)을 출력한다.

// 입력 예시   
// 1 0

// 출력 예시
// 0

// let a = Number(prompt("숫자를 입력하세요"));
// let b = Number(prompt("두번째 숫자를 입력하세요"));

// if (a === 1 && b === 1) {
//     document.querySelector("#texta").innerHTML = 1;
// } else {
//     document.querySelector("#texta").innerHTML = 0;
// }

// TODO 1140

// 문제 설명
// 두 가지의 참(1) 또는 거짓(0)이 입력될 때, 둘 중 하나라도 참일 경우 1이, 그렇지 않으면 0이 출력되는 프로그램을 작성해보자.

// 참고)
// 논리연산자 || 는 주어진 2개의 논리값이 하나라도 참(1) 일 때에 1(참)으로 계산하고, 이외의 경우에는 0(거짓) 으로 계산한다.
// 이러한 논리 연산을 OR 연산이라고도 부르고, ||로 표시한다.

// 입력
// 두 정수가 입력된다.

// 출력
// 두 정수 중 하나의 값이 참(1) 이면 참(1), 그렇지 않으면 거짓(0)을 출력한다.

// 입력 예시   
// 0 1

// 출력 예시
// 1

// let a = Number(prompt("첫 번째 정수를 입력하세요"));
// let b = Number(prompt("두 번째 정수를 입력하세요"));

// if(a === 1 || b === 1) {
//     document.querySelector("#texta").innerHTML = 1;
// } else {
//     document.querySelector("#texta").innerHTML = 0;
// }

// TODO 1143

// 문제 설명
// 두 수를 입력받아 비트단위로 AND연산한 후 결과를 출력하시오.

// 참고)
// 비트연산자 & 는 주어진 2개의 값을 2진법으로 변환한 뒤, 비트별로 AND 연산을 수행한 뒤 결과를 출력한다.
// 이러한 비트 연산을 AND 연산이라고도 부르고, &로 표시한다.
// 7 : 0000 0111
// 4 : 0000 0100
// 7&4 : 0000 0100  --> 10진수 : 4

// 입력
// 두 정수가 입력된다.(int범위)

// 출력
// 두 정수를 비트단위로 AND 연산한 후 결과를 10진수로 출력한다.

// 입력 예시   
// 3 5

// 출력 예시
// 1

// let a = Number(prompt("첫 번째 수를 입력하세요"));
// let b = Number(prompt("두 번째 수를 입력하세요"));
// let result = a & b;
// document.querySelector("#texta").innerHTML = result;

// TODO 1144

// 문제 설명
// 두 수를 입력받아 비트단위로 OR연산한 후 결과를 출력하시오.

// 참고)
// 비트연산자 | 은 주어진 2개의 값을 2진법으로 변환한 뒤, 비트별로 OR 연산을 수행한 뒤 결과를 출력한다.
// 이러한 비트 연산을 OR 연산이라고도 부르고, |로 표시한다.
// 예)
// 7 : 0000 0111
// 4 : 0000 0100
// 7|4 : 0000 0111

// 입력
// 두 정수가 입력된다.(int)

// 출력
// 두 정수를 비트단위로 OR 연산한 후 결과를 10진수로 출력한다.

// 입력 예시   
// 3 5

// 출력 예시
// 7

// let a = Number(prompt("첫 번째 수를 입력하세요"));
// let b = Number(prompt("두 번째 수를 입력하세요"));
// let result = a | b;
// document.querySelector("#texta").innerHTML = result;

// TODO 1147
// 문제 설명
// 정수 a, x를 입력받아 a의 값을 x만큼 SHIFT(<<) 연산한 후 결과를 출력하시오.

// 참고)
// 비트 이동연산자 << 은 주어진 a를 구성하고 있는 비트를 왼쪽으로 x번 이동한 후 결과를 보여준다.
// 이러한 비트 연산을 SHIFT 연산이라고도 부르고, <<로 표시한다.
// 예)
// 4<<1 : 0000 0100 ---> 0000 1000 (10진수:8)
// 4<<2 : 0000 0100 ---> 0001 0000 (10진수:16)

// 입력
// 두 정수 a, x입력.(1<=a<=100,000 , 1<=x<=10)

// 출력
// a를 x번 SHIFT(<<) 연산한 후 결과를 10진수로 출력한다.

// 입력 예시   
// 3 3

// 출력 예시
// 24

// let a = Number(prompt("첫 번째 수를 입력하세요"));
// let x = Number(prompt("두 번째 수를 입력하세요"));
// let result = a << x;
// document.querySelector("#texta").innerHTML = result;

// TODO 1148
// 문제 설명
// 정수 a, x를 입력받아 a의 값을 x만큼 SHIFT(>>) 연산한 후 결과를 출력하시오.

// 참고)
// 비트연산자 >> 은 주어진 a값을 오른쪽으로 x번 이동한 후 결과를 출력한다.
// 이러한 비트 연산을 SHIFT 연산이라고도 부르고, >>로 표시한다.

// 예)

// 4>>1 : 0000 0100 ---> 0000 0010 (10진수:2)
// 7>>2 : 0000 0111 ---> 0000 0001 (10진수:1)

// 입력
// 두 정수 a, x입력.(1<=a<=100,000 , 1<=x<=10)

// 출력
// a를 x번 SHIFT(>>) 연산한 후 결과를 10진수로 출력한다.

// 입력 예시   
// 4 1

// 출력 예시
// 2

// let a = Number(prompt("첫 번째 정수를 입력하세요"));
// let x = Number(prompt("두 번째 정수를 입력하세요"));
// let result = a >> x;
// document.querySelector("#texta").innerHTML = result;

// TODO 1149
// 문제 설명
// 두 정수 중 큰 정수를 출력한다.

// 입력
// 두 정수가 입력된다.

// 출력
// 두 정수 중 큰 정수를 출력한다.

// 입력 예시   
// 2 7

// 출력 예시
// 7

// let a = Number(prompt("첫 번째 정수를 입력하세요"));
// let b = Number(prompt("두 번째 정수를 입력하세요"));
// let max = Math.max(a, b);
// document.querySelector("#texta").innerHTML = max;

// TODO 1150
// 문제 설명
// 세 정수가 주어지면 그 중 가장 작은 수를 출력한다.

// 입력
// 세 정수가 주어진다.

// 출력
// 가장 작은 값을 출력한다.

// 입력 예시   
// 3 5 2

// 출력 예시
// 2

// let a = Number(prompt("첫 번째 정수입력"));
// let b = Number(prompt("두 번째 정수입력"));
// let c = Number(prompt("세 번째 정수입력"));
// let min = Math.min(a, b, c);
// document.querySelector("#texta").innerHTML = min;