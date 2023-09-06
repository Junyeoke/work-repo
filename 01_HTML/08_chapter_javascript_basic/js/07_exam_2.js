// 문제
// 1) 입력된 단어를 입력된 횟수만큼 반복해 출력하세요
// 입력 1) love
// 입력 2) 3
// 출력 : lovelovelove
// 입력함수 : let char = prompt("한개의 문자열이 입력된다.")
//           let num = Number(prompt("한개의 숫자가 입력된다."));
// TODO : 문자열 붙이기 사용
// let char = prompt("한개의 문자열이 입력된다"); // love
// let num = Number(prompt("한개의 숫자가 입력된다.")); // 3
// let strCount = ""; // 문자열 붙이기 변수초기화
// for(i = 0; i < num; i++ ){
//     strCount += char;   
// }
// console.log(strCount);

// 2) 입력 : 없음
//    출력 : "!@#$%^&*()"
// console.log('"!@#$%^&*()"');

// 3) 입력 : 없음
//    출력 : "C:\Download\hello.cpp"
// console.log('"C:\\Download\\hello.cpp"');

// 4) 입력 : 1.414213
//    출력 : 1.414213
// let num = Number(prompt("실수를 입력하시오"));
// alert(num);

// 5) 입력 : 1.59254
//    출력 : 1.59
// let num2 = Number(prompt("실수를 입력하시오"));
// alert(num2.toFixed(2));

// 6) 입력 : 125
//    출력 : 125 125 125
// let num3 = Number(prompt("정수를 입력하시오"));
// let count = "";
// for(i = 1; i <= 3; i++){
//     count += (num3 + " ");
// }
// alert(count);
// let num4 = Number(prompt("정수를 입력하시오"));
// alert(num4 + " " + num4 + " " + num4);

// 자료형 : 배열(간략설명)
// 자료형 : 문자열(string), 숫자(number), 참/거짓(boolean/bool)
//          배열
// 변수 : 변하는 값을 저장하는 장소(1가지 값만 저장), let 변수명
// 배열 : 여러가지 값을 저장하는 장소, 변수명은 동일하게 사용
//         인덱스번호
// 사용법 : 변수명[인덱스번호]
// 보충설명 : a[0] == 0번방에 값, a[1] == 1번방에 값이 들어가 있음
// 예) a[0] = 1, a[1] = 2 ....

// 7) 입력 = 1 2
//    출력 = 1 2
// JS에서 문자열 자르기 함수 : 문자열.split("자를 문자");
// 예) let arr = prompt("두정수를 입력해주세요").split(" ");
// arr(배열), arr[0]=1, arr[1]=2
//   출력 = 2 1
// alert(arr[1]+ " " + arr[0]); >> 2  1

// 예제 7) 입력 :  A b
//         출력 : b A
// let arr = prompt("두 단어를 입력하세요").split(" ");
// alert(arr[1] + " " + arr[0]);

// 예제 8) 입력 : 3:16
//         출력 : 3:16
// let strNum = prompt("시간을 입력하세요");
// alert(strNum);


// 9) 입력 : 2013.8.5
//   출력  : 2013.08.05 
// let dayNum = prompt("날짜를 입력하세요").split(".");
// let year = num[0]; // 년
// let month = ".0" + num[1]; // 월 (참고) 08, 09, 010, 012(오류), .slice(-2))
// let day = ".0" + num[2]; // 일
// alert(year + month + day);

// 10) 입력 : 000907-1121112
//      출력 : 0009071121112
// let num = prompt("주민번호를 입력하세요").split("-");
// let first = num[0];
// let second = num[1];
// alert(first + second);


// 11) 입력 : Programming is very fun!!
//     출력 : Programming is very fun!!
// let str = prompt("입력해주세요");
// alert(str);

// 12) 입력 : 1.414213
//     출력 : 1
// let num = prompt("실수를 입력해주세요").split(".");
// let first = num[0];
// let second = num[1];
// alert(first);


// 13) 입력 : Boy
//     출력 : 'B'
//            'o'
//            'y'
// let strChar = prompt("입력해주세요");
// let arr = "'" + strChar[0] + "'" + "\n"; // 'B'
// let arr2 = "'" + strChar[1] + "'" + "\n"; // 'o'
// let arr3 = "'" + strChar[2] + "'" + "\n"; // 'y'
// alert(arr + arr2 + arr3);

// 14) 두 정수의 합을 출력한다.
// 입력 1 : 2147483648
// 입력 2 : 2147483648
// 출력 : 4294967296
// let num1 = Number(prompt("첫번째 정수를 입력하세요"));
// let num2 = Number(prompt("두번째 정수를 입력하세요"));
// alert(num1 + num2);

// 15) 입력 : 75254 
//           숫자문자열 : "75254"
//               "75254" == "7" + "5" + "2" + "5" + "4"
//                       배열[0] + 배열[1] ... + 배열[4]
//     let aaa = "75254";
//        aaa[0] == "7";
//        aaa[1] == "5";
//        alert(aaa[3]) // 5
//     출력 : [70000]
//            [5000]
//            [200]
//            [50]
//            [4]

// let num = prompt("숫자를 입력하세요");

// let x1 = "[" + num[0] + "0000]" + "\n";
// let x2 = "[" + num[1] + "000]" + "\n";
// let x3 = "[" + num[2] + "00]" + "\n";
// let x4 = "[" + num[3] + "0]" + "\n";
// let x5 = "[" + num[4] + "]" + "\n";
// alert(x1+x2+x3+x4+x5);

