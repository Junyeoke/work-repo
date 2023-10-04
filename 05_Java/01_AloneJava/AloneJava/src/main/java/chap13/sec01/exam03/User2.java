package chap13.sec01.exam03;

/**
 * packageName : chap12.sec01.exam07
 * fileName : User1
 * author : ds
 * date : 2022-10-06
 * description : 작업쓰레드 1(상속받아 만듬)
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2022-10-06         ds          최초 생성
 */
public class User2 extends Thread{
//    TODO : 계산기 속성
    private Calculator calculator;

//    TODO : setter 함수
    public void setCalculator(Calculator calculator) {

        this.setName("User2");  // Thread의 부모 속성
        this.calculator = calculator;
    }

//    TODO : Thread의 run 함수 : 계산기의 속성 memory에 값 : 100 저장
    public void run() {
        calculator.setMemory(100);
    }
}







