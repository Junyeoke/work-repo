// <!-- TODO: 1151 ~ 1168 -->
// 1151
// let a = +prompt();
// if (a < 10) {
//   alert("small");
// }

// 1152
// let a = +prompt();
// if (a < 10) {
//   alert("small");
// } else {
//   alert("big");
// }

// 1153
// let a = +prompt();
// let b = +prompt();
// if (a > b) {
//   alert(">");
// } else if (b > a) {
//   alert("<");
// } else if (a === b) {
//   alert("=");
// }

// 1154
// let a = +prompt();
// let b = +prompt();
// if (a > b){
//     alert(a-b);
// } else if (b > a){
//     alert(b-a);
// }

//1155
// let a = +prompt("숫자입력");
// if (a % 7 === 0) {
//   alert("multple");
// } else {
//   alert("not multiple");
// }

//1156
// let a = +prompt("자연수 입력");
// if (a % 2 == 1) {
//   console.log("odd");
// } else if (a % 2 == 0) {
//   console.log("even");
// }

//1157
// let a = +prompt();
// if(a >= 50 && a <= 60){
//     alert("win");
// } else {
//     alert("lose");
// }

//1158
// let a = +prompt();
// if ((a >= 30 && a <= 40) || (a >= 60 && a <= 70)) {
//   alert("win");
// } else {
//   alert("lose");
// }

// 1159
// let a = +prompt();
// if ((a >= 50 && a <= 70) || a % 6 === 0) {
//   alert("win");
// } else {
//   alert("lose");
// }

// 1160
// let a = +prompt();
// if (a % 2 === 1) {
//   alert("oh my god");
// } else if (a % 2 === 0) {
//   alert("enjoy");
// }

// 1161
// 문제 설명
// 정수 두개가 입력으로 들어온다.
// 만약 첫번째 정수가 홀수이면 "홀수"를 출력하고, 짝수이면 "짝수"를 출력한 후  "+"를 출력한다.
// 그리고 두번째 정수가 홀수이면 "홀수"를 출력하고, 짝수이면 "짝수"를 출력한 후  "="을 출력하고 결과로 나오는 값이 홀수인지 짝수인지 출력한다.

// 예를들어,
// 5 7 이 입력되면 "홀수+홀수=짝수"가 출력된다.
// 5 6 이 입력되면 "홀수+짝수=홀수"가 출력된다.

// 입력
// 정수 두개가 입력된다.

// 출력
// 만약 첫번째 정수가 홀수이면 "홀수"를 출력하고, 짝수이면 "짝수"를 출력한 후  "+"를 출력한다.
// 그리고 두번째 정수가 홀수이면 "홀수"를 출력하고, 짝수이면 "짝수"를 출력한 후  "="을 출력하고 결과로 나오는 값이 홀수인지 짝수인지 출력한다.

// 입력 예시
// 2 3

// 출력 예시
// 짝수+홀수=홀수
// let a = +prompt();
// let b = +prompt();
// let result1 = "";
// let result2 = "";
// let result3 = "";
// if(a % 2 === 1){
//     result1 = "홀수" + "+";
// } else {
//     result1 = "짝수" + "+";
// }
// if(b % 2 === 1){
//     result2 = "홀수" + "=";
// } else {
//     result2 = "짝수" + "=";
// }
// if ((a + b) % 2 === 1){
//     result3 = "홀수";
// } else {
//     result3 = "짝수";
// }
// console.log(result1 + result2 + result3 );

// 1162
// 문제 설명
// 태어난 해, 월, 일을 입력받아 사주팔자를 보는 프로그램을 작성하시오.

// 사주를 보는 방법)
// 세 수(년,월,일)가 주어지면,  (년 - 월 + 일)에 마지막 숫자가 0이면 "대박"을 출력, 그렇지 않으면 "그럭저럭"을 출력하세요.

// 입력
// 세 정수가 입력으로 주어진다. 순서대로 년도, 월, 일 이다.

// 출력
// 년도 - 월 + 일의 마지막 숫자가 0이면 "대박"을 , 그렇지 않으면 "그럭저럭"을 출력하시오.

// 입력 예시
// 1902 2 10

// 출력 예시
// 대박

// let date = prompt("년 월 일을 입력하세요", "1902 2 10").split(" ");
// let result = +(date[0] - date[1] + date[2]);
// if(result % 10 === 0){
//     alert("대박");
// } else {
//     alert("그럭저럭");
// }

// 1163
// 문제 설명
// 태어난 해, 월, 일을 입력받아 사주팔자를 보는 프로그램을 작성하시오.

// 사주를 보는 방법)

// 세 수(년,월,일)가 주어지면,  (년 + 월 + 일)에 100의 자리 숫자가 짝수이면 "대박"을 출력, 그렇지 않으면 "그럭저럭"을 출력하세요.

// 입력
// 세 정수가 입력으로 주어진다. 순서대로 년도, 월, 일 이다.

// 출력
// 년도 + 월 + 일의 100의 자리가 숫자가 짝수이면 "대박"을 , 그렇지 않으면 "그럭저럭"을 출력하시오.

// 입력 예시
// 1502 2 10

// 출력 예시
// 그럭저럭

// let date = prompt("년 월 일을 입력하세요", "1502 2 10").split(" ");
// let result = +(date[0] + date[1] + date[2]);
// let result2 = (result / 100000).toFixed(0);
// if(result2 % 2 === 0){
//     alert("대박");
// } else {
//     alert("그럭저럭");
// }

// 1164
// 문제 설명
// 어떤 차의 높이가 170cm 이다.
// 이 차는 3개의 터널을 차례대로 지나게 될 것이다.
// 터널의 높이가 차의 높이보다 같거나 낮다면 차는 터널과 충돌하여 사고가 날 것이다.
// 터널의 높이가 차례대로 3개 주어지면 터널을 무사히 잘 통과하면 PASS 를 출력하고, 사고가 난다면 CRASH 를 출력하시오.

// 입력
// 터널의 높이가 차례대로 3개 주어진다. (정수)

// 출력
// 170보다 같거나 작으면 "CRASH"를 출력, 그 보다 크면 "PASS"를 출력하시오.

// 입력 예시
// 170 168 175

// 출력 예시
// CRASH

// let carHeight = 170;
// let t_hight = prompt("터널의 높이를 입력해주세요").split(" ");
// let array = +t_hight;
// for(let i = 0; i < t_hight.length; i++){
//     if(carHeight >= t_hight[i]){
//         console.log("CRASH");
//         break;
//     } else {
//         console.log("PASS");
//     }
// }

// 1165
// 문제 설명
// 지금 1반과 2반이 축구를 하고있다.
// 축구경기 타임은 총 90분이고,
// 현재 1반이 0점, 2반이 2점인 상황에서, 1반은 경남정보고 최고의 스트라이커인 성익이를 투입하기로 결정했다.
// 성익이는 5분마다 골을 넣을 수 있는 능력을 가지고 있다.
// 만약 80분에 투입이 되면 80분에 곧바로 골을 넣게되고 85분에 골을 넣음으로서 동점이 가능하게 된다.
// (90분이되면 경기가 바로 종료되므로 골을 넣을 수 없다. 동내심판인 성빈이는 성익이가 잘 되는 것을 싫어하기 때문에 추가시간 따위는 주지 않는다. )
// 현재 경기타임과 우리팀의 득점이 입력으로 주어 질때, 성익이를 투입하면 우리팀의 최종 득점은 몇 점인지 출력하시오.

// 입력
// 현재 경기시간과 우리팀의 득점이 입력으로 주어진다.(정수)

// 출력
// 경기가 끝났을때 우리팀의 득점을 출력한다.

// 입력 예시
// 74 2

// 출력 예시
// 6

// let time = +prompt("시간입력", "74");
// let score = +prompt("점수", "2");

// time = 90 - time;
// if(time === 0){
//     console.log(time); // 90분에 골넣는건 불가.
// } else {
//     score += 1;
//     if(time >= 5){
//         time += (time - 1) / 5;
//     }
//     console.log(score);
// }
// time = Number(time)
// while (time < 90) {
//     score++;
//     time += 5;
// }
// console.log(score);

// 1166
// 문제 설명
// 2월이 29일까지 있는 해를 윤년이라고 한다.

// 한 자연수를 입력받아서 윤년인지 아닌지를 판단하는 프로그램을 작성하시오.
// 단, 윤년은 다음 두 조건 중 하나만 만족하면 된다.
// (1) 400의 배수이면 무조건 윤년이다.
// (2) 4의 배수이며, 100의 배수가 아니면 윤년이다.

// 예)

// 2000 년 ====> 윤년 (1번 조건)
// 2004 년 ====>  윤년(2번 조건)
// 1900 년 ====> 윤년 아님
// 1999 년 ====> 윤년 아님

// 입력
// 입력은 키보드로 이루어진다. 연도를 나타내는 자연수 n이 입력된다.
// (단, 1<= n <= 2^32 - 1인 정수)

// 출력
// 입력받은 자연수가 윤년이라면 "Leap"를 아니라면 "Normal"을 출력한다.

// 입력 예시
// 2012

// 출력 예시
// Leap

// let year = Number(prompt("년도를 입력해주세요", "2012"));
// if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ){
//     console.log("Leap");
// } else {
//     console.log("Normal");
// }

// 1167
// 문제 설명
// 세 개의 숫자가 주어질 때 작은 순서로 나열 했을 때, 두번째 수를 출력해보자.

// 예를 들어, 5 9 2 가 있다면, 작은 순서로 나열하면 2 5 9이고 두번째 수는 5이다.

// 입력
// 세 개의 정수가 공백으로 구분되어 입력된다.

// 출력
// 세 개의 정수를 작은 순서로 나열 했을 때, 두번째 수를 출력한다.

// 입력 예시
// 201 20 3

// 출력 예시
// 20

// let array = prompt("세 개의 정수를 입력").split(" ");
// let result = array.map(Number);

// result.sort(function(a, b){
//     return a - b;
// })
// console.log(result[1]);

// 1168
// 문제 설명
// 주민등록번호는 생년월일과 성별정보, 지역정보로 이루어진다.
// 여기서 생년월일과 성별정보만 입력으로 받겠다.
// 성별 정보는 1이면 1900년대 출생 남자, 2이면 1900년대 출생 여자, 3이면 2000년대 출생 남자, 4이면 2000년대 출생 여자를 말한다.
// 기준년도는 2012년도이다. 현재 나이를 출력하시오.

// 예)
// 790101 1        =====> 성별정보가 1이므로, 1979년생, 34살이다.
// 080521 4        =====>  성별정보가 4이므로, 2008년생,  5살이다.

// 입력
// 생년월일(6자리)과 성별정보(1자리)가 공백으로 분리되어 정수로 주어진다.

// 출력
// 2012년도에 현재 나이를 출력하시오.

// 입력 예시
// 790101 1

// 출력 예시
// 34

// let num = prompt("생년월일 뒤에 1자리 입력").split(" ");

// if(num[1] === 1 && num[1] === 2){
//     let c = (num[0] / 10000).toFixed(0);
//     console.log(c);
//     let a = 2012 - (1900 + c) + 1;
//     console.log(a);
// } else if (num[1] === 3 && num[1] === 4) {
//     let c = (num[0] / 10000).toFixed(0);
//     let a = 2012 - (2000 + c) + 1;
//     console.log(a);
// }

// <!-- TODO: 1170 ~ 1173, 1180 -->
// 1170
// 문제 설명
// 학번을 입력 받아 다음 형식으로 출력하시오.
// 학번은 학년, 반, 번호로 입력된다.

// 예)
// 2 3 27   =====>    2327로 출력
// 2 3 7   ======> 2307로 출력   (번호가 10번미만이면 0을 붙여 출력)
// 입력
// 학년, 반, 번호가 공백을 기준으로 입력으로 주어진다. (정수)
// 입력범위:
// 학년 : 3이하 , 반, 6이하, 번호, 30이하

// 출력
// 학번을 붙여서 출력한다. 번호가 10번 미만일때는 0을 붙여 출력한다.

// 입력 예시
// 3 1 2

// 출력 예시
// 3102
// let num = prompt("학번입력", "2 3 27").split(" ");
// if (num[2] < 10) {
//   console.log(num[0] + num[1] + "0" + num[2]);
// } else {
//   console.log(num[0] + num[1] + num[2]);
// }

// 1171
// 학번을 입력 받아 다음 형식으로 출력하시오.
// 학번은 학년, 반, 번호로 입력된다.

// 이번에는 학년은 한자리, 반은 두자리, 번호는 세자리로 출력한다.

// 예)
// 2 1 20  ===> 201020  으로 출력
// 2 2 7 ==> 202007 으로 출력
// 2 3 100 ==>  203100 으로 출력
// 2 10 111 ==> 210111 로 출력

// 입력
// 학년, 반, 번호가 공백을 기준으로 입력된다.(정수)

// 입력범위)
// 학년: 3이하, 반: 20반이하, 번호, 999번 이하

// 출력
// 위의 예를 보고 학번이 총6자리가 되게 출력하시오. 빈 부분은 0으로 채운다.

// 입력 예시
// 2 7 15

// 출력 예시
// 207015
// let num = prompt("학년 반 번호 입력", "2 2 7").split(" ");
// if (num[1] < 10) {
//   if (num[2] < 10) {
//     console.log(num[0] + "0" + num[1] + "00" + num[2]);
//   } else if (num[2] > 9 && num[2] < 100) {
//     console.log(num[0] + "0" + num[1] + "0" + num[2]);
//   }
// } else {
//   console.log(num[0] + num[1] + num[2]);
// }

// 1172
// 문제 설명
// 세 수를 오름차순으로 정렬하려고 한다. (낮은 숫자 -> 높은 숫자)

// 예)
// 5 8 2   ====> 2 5 8    로 출력

// 입력
// 세 정수가 입력된다.

// 출력
// 낮은 숫자 부터 출력한다.

// 입력 예시
// 8 7 6

// 출력 예시
// 6 7 8

// let num = prompt("세 수를 입력해주세요", "5 8 2").split(" ").map(Number);
// let result = num.sort();
// console.log(result[0] + " " + result[1] + " " + result[2]);

// 1173
// let time = prompt("시 분 입력", "12 7").split(" ").map(Number);

// if (time[1] - 30 >= 0) { // 31분...
//   console.log(time[0] + " " + (time[1] - 30));
// } else { // 시가 바뀌는 경우
//   time[0]--;
//   if (time[0] < 0) {
//     time[0] = 23;
//   }
//   console.log(time[0] + " " + (30 + time[1]));
// }

// 1180
// let trash = prompt("쓰레기량").split("").map(Number);
// let a = trash[0];
// let b = trash[1] % 10;
// trash = (b * 10 + a) * 2;
// if (trash >= 100) {
//   trash -= 100;
// }
// console.log(trash);
// if (trash <= 50) {
//   console.log("GOOD");
// } else {
//   console.log("Oh My God");
// }

// <!-- TODO: 1201 ~ 1207, 1210, 1212, 1214, 1216, 1218 -->
// 1201
// let num = +prompt("정수입력");
// if (num > 0) {
//   console.log("양수");
// } else {
//   console.log("음수");
// }

// 1202
// let score = +prompt("점수를 입력");
// if (score >= 90 && score <= 100) {
//   console.log("A");
// } else if (score >= 80 && score < 90) {
//   console.log("B");
// } else if (score >= 70 && score < 80) {
//   console.log("C");
// } else if (score >= 60 && score < 70) {
//   console.log("D");
// } else {
//   console.log("F");
// }

// 1203
// let bmi = +prompt("비만도 입력");
// if (bmi <= 10) {
//   console.log("정상");
// } else if (bmi > 10 && bmi <= 20) {
//   console.log("과체중");
// } else {
//   console.log("비만");
// }

// 1204
// let num = +prompt("숫자 입력");
// if (num % 10 === 1) {
//   if (num === 11) {
//     console.log(num + "th");
//   } else {
//     console.log(num + "st");
//   }
// } else if (num % 10 === 2) {
//   if (num === 12) {
//     console.log(num + "th");
//   } else {
//     console.log(num + "nd");
//   }
// } else if (num % 10 === 3) {
//   if (num === 13) {
//     console.log(num + "th");
//   } else {
//     console.log(num + "rd");
//   }
// } else {
//   console.log(num + "th");
// }

// 1205
// let a = +prompt("숫자입력");
// let b = +prompt("숫자입력");
// let result = a + b;
// if (a - b > result) {
//   result = a - b;
// }
// if (a - b < result) {
//   result = b - a;
// }
// if (a * b > result) {
//   result = a * b;
// }
// if (a / b > result) {
//   result = a / b;
// }
// if (b / a > result) {
//   result = b / a;
// }
// if (Math.pow(a, b) > result) {
//   result = Math.pow(a, b);
// }
// if (Math.pow(b, a) > result) {
//   result = Math.pow(b, a);
// }

// console.log(result);

// 1206
// let a = +prompt("숫자입력");
// let b = +prompt("숫자입력");
// let x = a / b;
// if (b % a === 0) {
//   x = b / a;
//   console.log(a + "*" + x + "=" + b);
// } else if (a % b === 0) {
//   x = a / b;
//   console.log(b + "*" + x + "=" + a);
// } else {
//   console.log("none");
// }

// 1207
// let a = prompt("윷을 던져라 윷!").split(" ").map(Number);
// let result = 0;
// for (let i = 0; i < 4; i++) {
//   result += a[i];
// }
// if (result === 0) {
//   console.log("모");
// } else if (result === 1) {
//   console.log("도");
// } else if (result === 2) {
//   console.log("개");
// } else if (result === 3) {
//   console.log("걸");
// } else if (result === 4) {
//   console.log("윷");
// }

// 1210
// let a = +prompt("숫자");
// let b = +prompt("숫자");
// let cal1 = 0;
// let cal2 = 0;
// if (a === 1) {
//   cal1 = 400;
// } else if (a === 2) {
//   cal1 = 340;
// } else if (a === 3) {
//   cal1 = 170;
// } else if (a === 4) {
//   cal1 = 100;
// } else if (a === 5) {
//   cal1 = 70;
// }
// if (b === 1) {
//   cal2 = 400;
// } else if (b === 2) {
//   cal2 = 340;
// } else if (b === 3) {
//   cal2 = 170;
// } else if (b === 4) {
//   cal2 = 100;
// } else if (b === 5) {
//   cal2 = 70;
// }
// if (cal1 + cal2 > 500) {
//   console.log("angry");
// } else if (cal1 + cal2 <= 500) {
//   console.log("no angry");
// }

// 1212
// let n = prompt("숫자 입력").split(" ").map(Number);
// let result = n.sort();
// if (n[2] < n[0] + n[1]) {
//   console.log("yes");
// } else {
//   console.log("no");
// }

// 1214
// 윤달
// let year = Number(prompt("년도를 입력해주세요", "2012"));
// if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ){
//     console.log("Leap");
// } else {
//     console.log("Normal");
// }

// let date = prompt("년도와 월 입력").split(" ").map(Number);
// if (date[1] === 2) {
//   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     console.log("29");
//   } else {
//     console.log("28");
//   }
// } else {
//   if (
//     date[1] === 1 ||
//     date[1] === 3 ||
//     date[1] === 5 ||
//     date[1] === 7 ||
//     date[1] === 8 ||
//     date[1] === 10 ||
//     date[1] === 12
//   ) {
//     console.log("31");
//   } else {
//     console.log("30");
//   }
// }

// 1216
// let ad = prompt("세 정수를 입력해주세여").split(" ");
// if (ad[1] - ad[2] > ad[0]) {
//   console.log("advertise");
// } else if (ad[1] - ad[2] < ad[0]) {
//   console.log("do not advertise");
// } else {
//   console.log("dose not matter.");
// }

// 1218
// let tri = prompt("세 수를 입력").split(" ").map(Number);
// if ((tri[0] === tri[1]) && tri[1] === tri[2]) {
//   console.log("정삼각형");
// } else if ((tri[0] === tri[1]) || (tri[0]=== tri[2]) || (tri[1] === tri[2])){
//     console.log("이등변 삼각형");
// } else if (Math.pow(tri[0], 2) + Math.pow(tri[1], 2) === Math.pow(tri[2], 2)){
//     console.log("직각 삼각형");
// } else {
//     console.log("삼각형");
// }

// <!-- TODO: 1222, 1224, 1226  -->
// 1222
// let time = +prompt("시간입력");
// let score1 = +prompt("1반 점수입력");
// let score2 = +prompt("2반 점수입력");
// time = 90 - time;
// if (time !== 0) {
//   score1 = 1 + score1;
//   console.log(score1);
//   if (time >= 5) {
//     score1 = Math.floor(score1 + (time - 1) / 5);
//     console.log(score1);
//   }
// }

// if (score1 > score2) {
//   console.log("win");
// } else if (score1 === score2) {
//   console.log("same");
// } else {
//   console.log("lose");
// }

// 1224
// let a = +prompt("");
// let b = +prompt("");
// let c = +prompt("");
// let d = +prompt("");

// if(a/b > c/d) {
//     console.log(">");
// } else if(a/b === c/d){
//     console.log("=");
// } else if(a/b < c/d){
//     console.log("<");
// }
// 1226
// let numbers = prompt("로또번호+보너스 입력").split(" ").map(Number);
// let lottos = prompt("로또번호 입력").split(" ").map(Number);
// let score = 0;
// for (let i = 0; i < 6; i++) {
//   for (let j = 0; j < numbers.length; j++) {
//     if (numbers[j] === lottos[i]) {
//       score++;
//     }
//   }
// }
// if (score === 6) {
//   console.log("1");
// } else if (
//   numbers[6] === lottos[0] ||
//   numbers[6] === lottos[1] ||
//   numbers[6] === lottos[2] ||
//   numbers[6] === lottos[3] ||
//   numbers[6] === lottos[4] ||
//   numbers[6] === lottos[5]
// ) {
//   console.log("2");
// } else if (score === 5) {
//   console.log("3");
// } else if (score === 4) {
//   console.log("4");
// } else {
//   console.log("0");
// }

// <!-- TODO: 1228 ~ 1231  -->
// 1228
// let height = +prompt("키입력");
// let weight = +prompt("몸무게 입력");
// let bmiWeight = (height - 100) * 0.9;
// let bmi = ((weight - bmiWeight) * 100) / bmiWeight;
// if (bmi <= 10) {
//   console.log("정상");
// } else if (bmi > 10 && bmi <= 20) {
//   console.log("과체중");
// } else {
//   console.log("비만");
// }
// 1229
// let height = +prompt("키입력");
// let weight = +prompt("몸무게 입력");
// let bmiWeight = 0;

// if (height < 150) {
//   bmiWeight = height - 100;
// } else if (height >= 150 && height < 160) {
//   bmiWeight = (height - 150) / 2 + 50;
// } else {
//   bmiWeight = (height - 100) * 0.9;
// }
// let bmi = ((weight - bmiWeight) * 100) / bmiWeight;

// if (bmi <= 10) {
//   console.log("정상");
// } else if (bmi > 10 && bmi <= 20) {
//   console.log("과체중");
// } else {
//   console.log("비만");
// }

// 1230
// let car = 170;
// let tunnel = prompt("터널의 높이를 입력하세요", "171 168 165")
//   .split(" ")
//   .map(Number);
// for (let i = 0; i < tunnel.length; i++) {
//   if (tunnel[i] <= car) {
//     console.log("crash " + tunnel[i]);
//     break;
//   } else {
//     console.log("pass");
//   }
// }
// 1231
// let result = prompt("계산식을 입력하세요", "10 + 10").split(" ");
// if (result[1] === "+") {
//   let sum = Number(result[0]) + Number(result[2]);
//   console.log(sum);
// } else if (result[1] === "-"){
//     let minus = Number(result[0]) - Number(result[2]);
//     console.log(minus);
// } else if (result[1] === "*") {
//     let double = Number(result[0]) * Number(result[2]);
//     console.log(double);
// } else {
//     let divide = Number(result[0]) / Number(result[2]);
//     console.log(divide);
// }
