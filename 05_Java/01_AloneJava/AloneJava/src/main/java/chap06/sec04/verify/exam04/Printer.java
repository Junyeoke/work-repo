package chap06.sec04.verify.exam04;

/**
 * packageName : chap06.sec04.verify.exam04
 * fileName : Printer
 * author : GGG
 * date : 2023-09-20
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-20         GGG          최초 생성
 */
public class Printer {
// TODO : 속성, 생성자함수, 함수(메소드)
    // 속성, 생성자함수 생략

    // 메서드 오버로딩 : 함수이름은 같지만 매개변수가 다른것
    static void println(int num){
        System.out.println("공유함수(int) : " + num);
    }

    static void println(boolean bool){
        System.out.println("공유함수(boolean) : " + bool);
    }

    static void println(double dou){
        System.out.println("공유함수(double) : " + dou);
    }

    static void println(String str){
        System.out.println("공유함수(String) : " + str);
    }
}
