package chap06.sec04.exam01;

/**
 * packageName : chap06.sec04.exam01
 * fileName : CalculatorApplication
 * author : GGG
 * date : 2023-09-20
 * description :    실행 클래스
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-20         GGG          최초 생성
 */
public class CalculatorApplication {
    public static void main(String[] args) {
        Calculator calculator = new Calculator();
//        TODO: 1) 전원을 on
        calculator.powerOn();

//        TODO: 2) 덧셈계산
//              리턴값이 있는 함수를 사용하는 전용 패턴(형태)
        int result = calculator.plus(5,6);
        System.out.println(result);

//        TODO: 예제 3) 계산기에 나눗셈 기능을 추가하려고 합니다.
//                      나눗셈을 추가하고 결과를 실행하세요

        double result2 = calculator.divide(10, 4);
        System.out.println(result2);

//        TODO : 예제 4) 추가 기능을 요청해서 추가했습니다.
//                      계산기를 끄는 기능을 추가해주세요.
        calculator.powerOff();
    }
}
