package chap07.sec01.exam02;

/**
 * packageName : chap07.sec01.exam02
 * fileName : Calculator
 * author : GGG
 * date : 2023-09-21
 * description : 함수 재정의(오버라이딩), 부모 클래스
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-21         GGG          최초 생성
 */
public class Calculator {
    // 속성, 생성자 생략

    // 함수

    /**
     * 원의 넓이 구하는 함수
     * @param r
     * @return
     */
    double areaCircle(double r){
        System.out.println("Calulator 의 areaCircle 실행");
        return 3.14 * r * r;
    }
}
