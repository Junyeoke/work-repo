package chap07.sec01.exam02;

/**
 * packageName : chap07.sec01.exam02
 * fileName : CalculatorApplication
 * author : GGG
 * date : 2023-09-21
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-21         GGG          최초 생성
 */
public class CalculatorApplication {
    public static void main(String[] args) {
        int r = 10;     // 반지름
        // 객체생성 : 부모
        Calculator calculator = new Calculator();
        System.out.println("원면적 : " + calculator.areaCircle(r));
        System.out.println("==================================================");
        // 객체생성 : 자식
        Computer computer = new Computer();
        // TODO : 부모함수 areaCircle() vs 자식함수 areaCircle() = 자식함수가 우선!
        System.out.println("원면적 : " + computer.areaCircle(r));

    }
}
