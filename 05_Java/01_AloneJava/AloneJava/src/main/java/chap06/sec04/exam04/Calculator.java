package chap06.sec04.exam04;

/**
 * packageName : chap06.sec04.exam04
 * fileName : Calculator
 * author : GGG
 * date : 2023-09-20
 * description : 계산기 모델 클래스 (덧셈, 평균)
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-20         GGG          최초 생성
 */
public class Calculator {
    // TODO : 속성, 생성자함수, 함수(메소드)
    // 속성생략
    // 생성자 생략

    // TODO: 함수 : 덧셈, 평균, 계산실행
    // 사용법 : 접근제한자 리턴자료형 함수명(매개변수....){}

    /**
     * 덧셈 함수
     * @param x
     * @param y
     * @return
     */
    int plus(int x, int y){
        int result = x + y;
        return result;
    }

    /**
     * 평균 구하는 함수
     * @param x
     * @param y
     * @return
     */
    double avg(int x, int y){
//        TODO : 자신의 클래스 내에서는 자유롭게 함수를 사용할 수 있음
        int sum = plus(x, y);   // 합계
        double result = (double) sum / 2;
        return result;
    }

    /**
     * 자신의 계산결과를 출력하는 함수
     */
    void println(String message){
        System.out.println("계산 결과 : " + message);
    }

    /**
     * 평균과 계산결과를 출력하는 실행 함수
     */
    void execute(){
        // 1) 평균 함수
        double result = avg(7, 10);
        println(result + "");
    }



}
