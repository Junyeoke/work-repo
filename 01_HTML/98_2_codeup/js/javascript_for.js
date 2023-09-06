// TODO 1251 : 1 부터 100까지 출력하기
// 반복문 연습용 예제입니다.
// 입력은 없습니다.
// 1부터 100까지 공백으로 띄워 하나씩 출력하세요.

// let result = "";
// for(let i = 1; i <= 100; i++){
//     result += i + " ";
// } document.write(result);

// TODO 1252 : 1 부터 n 까지 출력하기
// 문제 설명
// 어떤 수 n을 입력으로 받아 1부터 n까지의 숫자를 출력하시오.

// 입력
// n이 입력으로 들어온다. (1 <= n <= 100000)

// 출력
// 1부터 n까지 공백으로 띄워 출력한다.

// 입력 예시
// 5

// 출력 예시
// 1 2 3 4 5

// let number = Number(prompt("숫자를 입력해주세요"));
// let result = "";
// for(let i = 1; i <= number; i++){
//     result += i + " ";
// } document.write(result);

// TODO 1253 : a 부터 b까지 출력하기
// 문제 설명
// 어떤 두 수 a, b가 있을 때 두 수 사이의 모든 정수를 오름차순으로 출력하시오.

// 예를 들어, a=5 , b=10일 경우 5 6 7 8 9 10입니다.

// 입력
// 두 수 a, b가 입력으로 들어온다. ( a, b는 정수, a, b 중 어떤 수가 큰지 모름)

// 출력
// a와 b 사이의 정수들을 오름차순으로 출력한다.

// 입력 예시
// 3 8

// 출력 예시
// 3 4 5 6 7 8

// let a = Number(prompt("숫자 입력"));
// let b = Number(prompt("숫자 입력"));
// let min = Math.min(a, b);
// let max = Math.max(a, b);
// let result = "";
// for(let i = min; i <= max; i++){
//     result += i + " ";
// } document.write(result);

// TODO 1254 : 알파벳 출력하기
// 문제 설명
// 시작 알파벳과 마지막 알파벳을 입력받아 그 두 알파벳 사이의 모든 알파벳을 출력하시오.

// 예)
// a f   ====> a b c d e f

// 입력
// 시작 알파벳과 마지막 알파벳을 공백으로 띄워 입력받는다.(소문자만 입력되고, 사전순으로 입력된다.)

// 출력
// 두 알파벳 사이의 모든 알파벳을 출력한다.

// 입력 예시
// d g

// 출력 예시
// d e f g

// let first = prompt("시작 알파벳을 입력하세요").charCodeAt(0);
// let last = prompt("마지막 알파벳을 입력하세요").charCodeAt(0);
// let result = "";
// for(let i = first; i <= last; i++){

//     result += String.fromCharCode(i) + " d";
// }
// document.write(result);

// TODO : 1255 : 두 실수 사이 출력하기
// 문제 설명
// 소수 둘째 자리의 두 실수 a와 b가 입력으로 주어진다.

// a와 b사이의 수를 0.01간격으로 오름차순으로 출력하시오.

// 예)
// 5.67 5.73  ==> 5.67 5.68 5.69 5.70 5.71 5.72 5.73

// let a = Number(prompt("숫자를 입력해주세요"));
// let b = Number(prompt("숫자를 입력해주세요"));
// let result = "";
// for(let i = a; i <= b; i+=0.01){
//     result += i + " ";
// } document.write(result);

// TODO 1256 : 별 출력하기
// 문제 설명
// 별(*)을 n개 만큼 출력한다.

// 입력
// 별의 개수인 n이 입력된다.(1 <= n <=1000)

// 출력
// 별(*)을 개수만큼 출력한다.

// 입력 예시
// 5

// 출력 예시
// *****

// let a = Number(prompt("개수를입력하세요"));
// let result = "";
// for(let i = 1; i <= a; i++){
//     result += "*"
// }
// document.write(result);

// TODO 1257

// 문제 설명
// 시작수와 마지막 수가 입력되면

// 시작수부터 마지막 수까지의 모든 홀수를 출력하시오.

// 입력
// 두 수 a, b 가 입력된다. ( a <= b )

// 출력
// a~b의 홀수를 모두 출력한다.

// 입력 예시
// 2 7

// 출력 예시
// 3 5 7

// let a = Number(prompt("시작수 입력"));
// let b = Number(prompt("마지막수 입력"));
// let result = "";
// for(let i = a; i <= b; i++){
//     if(i % 2 !== 0) {
//         result += i + " ";
//     }
// } document.write(result);

// TODO 1258
// 문제 설명
// 정수 n이 입력으로 들어오면 1부터 n까지의 합을 구하시오.

// 입력
// 입력으로 자연수 n이 입력된다.

// 출력
// 1부터 n까지의 합을 출력한다.

// 입력 예시
// 100

// 출력 예시
// 5050

// let input = +prompt("숫자를 입력하세요");
// let result = 0;
// for(let i = 1; i <= input; i++){
//     result += i;
// }
// document.write(result);

// TODO 1259
// 문제 설명
// 1부터 n까지의 수 중 짝수의 합을 구하시오.

// 입력
// 자연수 n이 입력으로 주어진다.

// 출력
// 1부터 n까지의 짝수의 합을 출력하시오.

// 입력 예시
// 5

// 출력 예시
// 6

// let a = +prompt("숫자입력");
// let result = 0;
// for(let i = 1; i <= a; i++){
//     if(i % 2 === 0){
//         result += i;
//     }
// }
// document.write(result);

// TODO 1260
// 문제 설명
// 어떤 수 a, b가 주어진다.

// a와 b의 관계는 a <= b 이다.

// a에서 b까지의 수 중 3의 배수만 더하여 출력하시오.

// 입력
// 입력으로 두 자연수 a,  b가 주어진다. (a<= b)

// 출력
// a~b까지의 수 중 3의 배수의 합을 출력한다.

// 입력 예시
// 3 7

// 출력 예시
// 9

// let a = +prompt("숫자를 입력해주세요");
// let b = +prompt("숫자를 입력해주세요");
// let result = 0;
// for(let i = a; i <= b; i++){
//     if(i % 3 === 0){
//         result += i;
//     }
// }
// document.write(result);

// TODO 1261
// 문제 설명
// 10개의 수가 입력된다.

// 10개의 수 중 5의 배수를 하나만 출력한다.

// 만약 5의 배수가 없다면 0을 출력한다.
// 입력
// 10개의 자연수가 입력된다

// 출력
// 10개의 수 중 5의 배수가 있으면 그 중 하나만 출력하고, 없다면 0을 출력한다.

// 입력 예시
// 1 2 3 4 5 6 7 8 9 10

// 출력 예시
// 5
// let n = prompt("10개의 수를 입력하세요").split(" ");
// let arr = n.map(Number);
// let result = 0;
// for(i = 0; i < 10; i++){
//     result = arr[i];
//     if(result % 5 === 0) {
//         console.log(result);
//         break;
//     }
//     result = 0;
// }
// console.log(result);

// TODO 1265
// 문제 설명
// 고블린 파이터 동우는 구구단에 관심이 많다.

// 구구단의 원하는 단을 입력하면 그 단의 구구단이 출력되게 하시오.

// 입력
// 입력으로 원하는 단이 입력된다( 단: 1~9)

// 출력
// 출력양식에 맞추어 출력한다.

// 입력 예시
// 3

// 출력 예시
// 3*1=3
// 3*2=6
// 3*3=9
// 3*4=12
// 3*5=15
// 3*6=18
// 3*7=21
// 3*8=24
// 3*9=27

// let a = +prompt("단을 입력하세요");
// let result = "";
// for(let i = a; i <= a; i++){
//     for(let j = 1; j <= 9; j++) {
//         result += (i +"*"+ j + "=" + i*j) + "\n";
//     }
// } console.log(result);

// TODO 1266
// 문제 설명
// 수의 개수  n이 주어지고, 그 다음 줄에 무작위로 n개의 정수가 입력된다.

// n개의 수의 합을 출력하시오.

// 입력
// n은 자연수, 그 다음 줄에 n개의 정수들이 입력으로 들어온다. (n<=1,000, 각 수는 0~100)

// 출력
// n개의 정수들의 합을 출력한다.

// 입력 예시
// 5
// 3 5 7 7 2

// 출력 예시
// 24

// let n = prompt("수의 개수 n을 입력하세요");
// let a = prompt("무작위의 n 개의 정수를 입력하시오.").split(" ");
// let arr = a.map(Number); // 문자열 배열을 숫자배열로 변환
// let result = 0;

// for(let i = 0; i < n; i++){
//     result += arr[i];
// } console.log(result);

// TODO 1267
// 문제 설명
// 수의 개수 n이 주어지고, 그 다음 줄에 무작위로 n개의 자연수가 입력된다.

// 그 n개의 수 중에서 5의 배수만 골라 합을 출력하시오.

// 입력
// 첫째 줄에 정수 n이 입력된다.(1<=n<=1,000)

// 둘째 줄에 n개의 자연수들이 공백으로 분리되어 입력된다. 각 정수는 1~1,000 사이이다.

// 출력
// n개의 자연수들 중 5의 배수의 합을 출력한다.

// 입력 예시
// 5
// 3 5 7 15 2

// 출력 예시
// 20

// let a = +prompt("개수입력");
// let b = prompt("무작위 숫자입력").split(" ");
// let arr = b.map(Number);
// let result = 0;

// for(let i = 0; i < a; i++){
//     if(arr[i] % 5 === 0) {
//         result += arr[i];
//     }
// } console.log(result);

// TODO 1268
// 문제 설명
// 수의 개수 n이 주어지고, 그 다음 줄에 무작위로 n개의 정수가 입력된다.

// 그 n개의 수 중에서 홀수의 개수를 출력하시오.

// 입력
// 첫 번째 줄에 n이 입력된다.(1<=n<=10,000)

// 두 번째 줄에 정수가 n개 공백을 기준으로 주어진다.(1<=k<=100)

// 출력
// n개의 수들 중 홀수의 개수를 출력한다.

// 입력 예시
// 5
// 3 5 7 15 2

// 출력 예시
// 4

// let n = +prompt("개수입력");
// let a = prompt("무작위 숫자입력").split(" ");
// let arr = a.map(Number);
// let count = 0;
// for(let i = 0; i < n; i++){
//     if(arr[i] % 2 !== 0){
//         count++;
//      }
// } console.log(count);

// TODO 1269
// 문제 설명
// 영희는 수열에 대한 공부를 하고 있다.

// 하지만 영희는 수학을 잘 못해서 수열을 어려워하고 있어 프로그래밍으로 해결하려고 한다.

// 시작 값(a), 곱할 값(b), 더할 값(c), 몇 번째 항인지 나타내는 정수(n)이 입력으로 주어질 때, 수열의 n번째 항의 값을 구하시오.

// 예를 들어 시작값이 2, 곱할값이 -1, 더할 값이 3이고 5번째 항의 값을 구한다면,

// 1번째 항 : 2
// 2번째 항 : 2 * (-1) + 3 = 1
// 3번째 항 : 1 * (-1) + 3 = 2
// 4번째 항 : 2 * (-1) + 3 = 1
// 5번째 항 : 1 * (-1) + 3 = 2
// 이므로 5번째 항의 값은 2이다.

// 입력
// 시작값 a, b, c, n이 차례대로 입력된다.

// ( -9 <= a, b, c < = 9, 1 <= n <= 9)

// 출력
// n번째 수열의 값을 출력한다.

// 입력 예시
// 2 -1 3 5

// 출력 예시
// 2

// let a = +prompt("시작값");
// let b = +prompt("곱할값");
// let c = +prompt("더할값");
// let n = +prompt("정수");
// let result = a;
// for(let i = 2; i <= n; i++){
//     result = result * b + c;
// }
// console.log(result);

// TODO 1270
// 어떤 수 n이 주어지면 1부터 n까지의 수 중 맨 마지막 자리에 1이 몇 번 들어 있는지 알아내는 프로그램을 작성하시오.
// 입력 예시
// 35

// 출력 예시
// 4

// let n = +prompt("숫자를 입력하세요");
// let result = 0;
// let count = 0;
// for(let i = 1; i <= n; i++){
//     result = i;
//     if(result % 10 === 1){ // 결과값을 10으로 나눈 나머지가 1
//         count++
//     }
// } console.log(count);

// TODO 1271
// 문제 설명
// 입력의 개수 n이 입력되고 n개의  데이터가 입력된다.

// 이 n개의 데이터 중 최댓값을 출력한다.

// 입력
// 첫째줄에 정수의 개수 N이 주어진다. (n<=1000)
// 둘째줄에 N개의 정수가 공백으로 분리되어 주어진다.  ( 0 <= 각각의 데이터 <=1000000 )

// 출력
// N개의 정수 중 최댓값을 찾아 출력한다.

// 입력 예시
// 5
// 3 1 29 31 21

// 출력 예시
// 31

// let n = +prompt("개수를 입력하세요");
// let n2 = prompt("무작위 수를 입력하세요").split(" ");
// let arr = n2.map(Number);
// let max = Math.max(...arr);
// console.log(max);

// TODO 1272
// 문제 설명
// 근제는 대기업 CSH의 회장이다.

// 최근 기업의 이미지가 좋지 않아 근제는 가난한 사람들에게 기부를 하려고 한다.

// 그런데 근제는 특이한 방법으로 기부를 했는데, 기부할 사람들을 번호 순으로 일정한 규칙에 따라 돈을 준다고 한다.

// 규칙은 다음과 같다
// 1, 10, 2, 20, 3, 30, 4, 40, 5, 50, 6, 60, 7, 70, 8, 80, 9, 90, 10, 100, 11, 110, 12, 120, ...

// 한편, 가난한 존과 밥은 돈을 받기 위해 신청을 했다.
// 존의 번호(k), 밥의 번호(h)가 주어질때 존과 밥이 받는 기부금의 합을 구하시오.

// 입력
// 한 줄에 k, h가 공백으로 분리되어 순서대로 입력된다.

// 출력
// 존과 밥이 받는 금액의 합을 출력한다.

// 입력 예시
// 1 2

// 출력 예시
// 11

// let k = +prompt("존");
// let h = +prompt("밥");
// let temp;
// if (k >= h) {
//   temp = k;
// } else {
//   temp = h;
// }

// let money;
// let money_k;
// let money_h;
// for (let i = 1; i <= temp; i++) {
//   if (i % 2 === 1) {
//     money = (i + 1) / 2;
//   } else {
//     money = (i / 2) * 10;
//   }

//   if (i === k) {
//     money_k = money;
//   }

//   if (i === h) {
//     money_h = money;
//   }
// }

// console.log(money_k + money_h);

// TODO 1273
// 문제 설명
// 자연수 N이 주어지면 N의 약수를 오름차순으로 모두 출력하시오.

// 입력
// 자연수 N이 입력된다.( 1 <= N <= 10,000 )

// 출력
// N의 약수를 오름차순으로 출력한다.

// 입력 예시
// 6

// 출력 예시
// 1 2 3 6

// let n = +prompt("숫자입력");

// for(let i = 1; i <= n; i++){
//     if(n % i == 0){
//         console.log(i);
//     }

// }

// TODO 1274//
// 문제 설명
// 소수란, 약수가 1과 자기 자신 두 개 뿐인 수를 말한다.

// 어떤 수가 입력되면 그 수가 소수인지 판단하시오.

// 예)
// 2     ====> 소수 (왜냐하면 약수가 1 과 자기자신 2밖에 없기때문..)
// 3     ====> 소수 (왜냐하면 약수가 1 과 자기자신 3밖에 없기때문..)
// 4     ====> 소수가 아님 (왜냐하면 약수가 1 , 2 , 4 이기 때문..)
// 10     ====> 소수가 아님 (왜냐하면 약수가 1 , 2 , 5 , 10 이기 때문..)
// 11     ====> 소수 (왜냐하면 약수가 1 과 자기자신 11밖에 없기때문..)

// 입력
// 2이상의 자연수가 입력으로 주어진다.

// 출력
// 입력으로 주어진 수가 소수이면 "prime"을 출력, 소수가 아니면 "not prime"을 출력한다.

// 입력 예시
// 7

// 출력 예시
// prime

// let n = +prompt("숫자입력");
// if (n === 1) {
//   console.log("not prime");
// }
// for (let i = 2; i <= n; i++) {
//   if (n % 2 === 0) {
//     console.log("not prime");
//   }
// }
// console.log("prime");

// TODO 1275
// 문제 설명
// 어떤 수 n과 k가 있다.

// n과 k의 관계는 다음과 같다.

// nk

// nk는 n을 k번 곱한 것을 말한다.

// 입력으로 n과 k가 주어지면 결과를 출력한다.

// 예)

// 52 = 25

// 24 = 16

// 입력
// 공백을 기준으로 n과 k가 주어진다. (n은 0이 아닌 정수, k>=0)

// 출력
// nk의 결과를 출력한다.

// 입력 예시
// 3 3

// 출력 예시
// 27

// let n = +prompt("숫자입력");
// let k = +prompt("숫자입력");
// let result = "";
// for(let i = n; i<=k; i++){
//     result = (i * n) * k;
// } console.log(result);

// 1276
// let n = +prompt("숫자입력", "5");
// let result2 = 1;
// for(let i = n; i >= 1; i--){
//     result2 *= i;
// }
// console.log(result2);

// 1277
// let number = +prompt("숫자입력", "7");
// let inputNum = prompt("숫자들 입력", "2 4 7 3 1 2 5").split(" ").map(Number);
// let first, mid, last;
// for(let i = 0; i < number; i++){
//     if(inputNum[i] === inputNum[0]){
//         first = inputNum[i];
//     }
//     if(inputNum[i] === (inputNum[((number+1)/2)-1])) {
//         mid = inputNum[i];
//     }
//     if(inputNum[i] === inputNum[i]) {
//         last = inputNum[i];
//     }
// }
// console.log(first, mid, last);

// 1278
// 어떤 숫자가 입력되면 그 숫자가 몇 자릿수 숫자인지 알아내는 프로그램을 작성하시오.

// 예)

// 7   ----> 1   (1자릿수)

// 10  ----> 2   (2자릿수)

// 4322 ----> 4   (4자릿수)

// 입력
// 1이상의 자연수 n이 입력된다. (n은 int 범위)

// 출력
// 그 숫자가 몇 자릿수 인지 출력하시오.

// 입력 예시
// 932

// 출력 예시
// 3

// let num = prompt("숫자입력", "932");
// let result = num.length;
// console.log(num + " 의 자릿수 : " + result);

// 1279
// let a = +prompt("숫자입력");
// let b = +prompt("숫자입력");
// let result = 0;  // 결과 초기화
// for(let i = a; i <= b; i++){
//     if(i % 2 === 0){result -= i;}
//     else {result += i;}
// }
// console.log(result);

// 1280

// let a = +prompt("숫자입력");
// let b = +prompt("숫자입력");
// let result = " ";
// let result2 = 0;  // 결과 초기화
// for(let i = a; i <= b; i++){
//     if(i % 2 === 0){
//         result += "-"+i;
//         result2 -= i;
//     }
//     else {
//         result += "+"+i;
//         result2 += i;
//     }
// }
// console.log(result + "=" + result2);

// 1281
// let a = +prompt("숫자입력");
// let b = +prompt("숫자입력");
// let array = [];
// let result = "";
// let val = 0;
// let sum = 0;
// for (let i = a; i <= b; i++) {
//   array.push(i);
// }
// for (let i = 0; i < array.length; i++) {
//   if (array[i] % 2 === 0) {
//     array[i] = array[i] * -1;
//   } else {
//     if (i === 0) {
//       array[i] = array[i];
//     } else {
//       array[i] = "+" + array[i];
//     }
//   }
//   result += array[i]; 
// }
// val = array.map(Number);
// for(let i = 0; i<val.length; i++){
//     sum += val[i]
// } 
// console.log(result+"="+sum);

// 1282
// let n = +prompt("숫자입력");
// let k, t;
// for(let i = 1; i<=n; i++){
//     if((n >= i*i) && (n < (i+1)*(i+1))){
//         k = n-i*i;
//         t = i;
//         break;
//     } 
// }
// console.log(k + " " + t);

// 1283
// 입력 예시   
// 10000
// 4
// 10 -10 5 -5 

// 출력 예시
// -125
// bad
let a = prompt("투자한 액수");
let b = prompt("투자일수");
let array = new Array(b);
let result = 0;
array = prompt("변동폭 입력").split(" ").map(Number);

