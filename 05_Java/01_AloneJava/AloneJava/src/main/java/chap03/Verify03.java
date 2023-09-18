package chap03;

import java.util.Scanner;

/**
 * packageName : chap03
 * fileName : Verify03
 * author : GGG
 * date : 2023-09-18
 * description : 연습문제 자바 파일
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-18         GGG          최초 생성
 */
public class Verify03 {
//    속성(멤버 변수)
//    생성자 함수
//    함수(멤버 메서드)


    /**
     * 문제 : 두 실수를 입력받아서 나눗셈을 결과를 출력하세요;
     * 단, 두번째 수가 0일 경우 "무한대"로 출력하세요
     * 입력 : 9
     *       3
     * 출력 : 3.0
     */
    public void exam01(){
        Scanner sc = new Scanner(System.in);
        System.out.println("첫번째 수");
        // sc.nextLine() : 문자열입력 -> 실수로 변환
        double num1 = Double.parseDouble(sc.nextLine());    // 1st 줄
        System.out.println("두번째 수");
        double num2 = Double.parseDouble(sc.nextLine());    // 2nd 줄
        double result = num1 / num2;
        if(num2 != 0.0){
            System.out.println("결과 : " + result);
        } else {
            System.out.println("결과 : 무한대");
        }

    }

    /**
     * 문제 : 원의 넓이를 구하시요. ( 반지름 * 반지름 * 3.14 )
     */
    public void exam02() {
        int var1 = 10; // 반지름

        double result =(double) var1 * var1 * 3.14;

        System.out.println("원의 넓이 : " + result);
    }

    /**
     * 문제 : 1) 아이디와 패스워드를 각각 입력받아 아이디가 "java"가 아니면
     *   "로그인 실패:아이디가 존재하지 않음"을 출력하세요.
     *   2) 아이디가 "java" 이면, 패스워드를 체크해서 패스워드가 12345이면 "로그인 성공" 출력하고,
     *   패스워드가 12345가 아니면 "로그인 실패:패스워드가 틀림"을 출력하세요.
     *   힌트 : 중첩 if문 쓰기
     */
    public void exam03() {
        Scanner scanner = new Scanner(System.in);
        System.out.println("아이디 : ");
        String id = scanner.nextLine();
        System.out.println("패스워드 : ");
        String password = scanner.nextLine();
        int ipassword = Integer.parseInt(password);

        if(!(id.equals("java"))){
            System.out.println("로그인 실패 : 아이디가 존재하지 않음");
        } else {
            if(ipassword == 12345){
                System.out.println("로그인 성공");
            } else {
                System.out.println("로그인 실패 : 패스워드가 틀림");
            }
        }

        }
    }


