package chap03;

import java.util.Scanner;

/**
 * packageName : chap03
 * fileName : Sec0301
 * author : GGG
 * date : 2023-09-18
 * description :
 * 요약 :
 *          산술 : +, -, *, /, %(나머지 연산자)
 *          부호 : +, -
 *          문자열 붙이기 : +
 *          대입연산자 : =, +=, -=, *=, /=, %=
 *          증감 : ++, --
 *          비교 : ==, !=, >, <, >=, <=,(1문자 비교, 숫자비교) instanaceof
 *          TODO : 문자열 비교 : 문자열.equals(문자열2)
 *          논리 : !, &, |,(비트연산자) &&(논리곱), ||(논리합)
 *          삼항 : (조건식)? A : B
 *          우선순위 필요하면 () 쓸 것
 *
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-18         GGG          최초 생성
 */
public class Sec0301 {
    public void exam01(){
        int x = -100;
        int result1 = +x;
        int result2 = -x;
        System.out.println("result1 : " + result1);
        System.out.println("result2 : " + result2);

    }

    public void exam03(){
        boolean play = true;
        System.out.println(play);
        play = !play;  // false
        System.out.println(play);
    }

    /**
     * 사칙연산 예제 : /(나눗셈) 조심
     */
    public void exam04(){
        int v1 = 5;
        int v2 = 2;

        int result = v1 + v2;
        System.out.println(result);
        System.out.println("---------------------------------");
        int result2 = v1 / v2;
        System.out.println(result2);    // 정수/정수 => 실수부분이 잘림
        System.out.println("---------------------------------");
        // TODO : 나눗셈 개선 코딩 : 강제 형변환 후 계산해야함
        double result3 = (double)v1 / (double)v2;
//        double result3 = (double)v1 / v2;     // 같은 결과
        System.out.println(result3);
    }

//    연습문제 : 정수 1개를 입력받아 그대로 출력하기
//    입력 : 5
    public void exam05(){
        Scanner sc = new Scanner(System.in);
        System.out.println(sc.next());
    }

//    연습문제2 : 문자 2개 입력받아 순서 바꿔 출력하기
    public void exam06(){
        Scanner sc = new Scanner(System.in);
        String strFirst = sc.next(); // 공백까지 입력받기
        String strSecond = sc.next(); // 공백까지 입력받기
        System.out.println(strSecond + " " + strFirst);
    }


    /**
     * char : 내부적으로 정수로 저장됨(유니코드 : 아스키코드 확장판(한글, 중국어 등을 표시))
     */
    public void exam07(){

        char c1 = 'A' + 1; // char(정수) : 'B' ('A' 아스키코드(65) 65 + 1 = 66)
        char c2 = 'A';
        System.out.println(c1);
        System.out.println(c2);
    }


    // 연습문제3 : char 이용하는 문제
    // 값이 'A' 로 주어져 있습니다. 'A' 대문자 이면 대문자이군요 라고 출력하고, 소문자이면 소문자이군요라고 출력, 숫자이면 숫자이군요 라고 출력

    public void exam08(){
        int charCode = 'A';
        if(charCode >= 65 && charCode <= 90) {
            System.out.println("대문자이군요");
        } else if (charCode >= 97 && charCode <= 122) {
            System.out.println("소문자이군요");

        } else if(charCode>=48 && charCode<=57) {
            System.out.println("숫자이군요");
        } else {
            System.out.println("다른 문자이군요");
        }
    }

    /**
     * 연습문제 : 정수 1개가 주어진다. 2와 3의 배수이면 2 또는 3의 배수이군요
     *          아니면, 2 또는 3의 배수가 아니군요
     */
    public void exam10(){
        int value = 6;

        if((value % 2 == 0) || (value % 3 == 0)){
            System.out.println("2 또는 3의 배수이군요");
        } else {
            System.out.println("2 또는 3의 배수가 아니군요");
        }
    }

}
