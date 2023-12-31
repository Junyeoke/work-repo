package chap06.sec04.exam02;

import java.util.ArrayList;
import java.util.List;

/**
 * packageName : chap06.sec04.exam02
 * fileName : ComputerApplication
 * author : GGG
 * date : 2023-09-20
 * description : 실행 클래스(main)
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-20         GGG          최초 생성
 */
public class ComputerApplication {
    public static void main(String[] args) {
        Computer computer = new Computer();

//       배열정의
        int[] value1 = {1, 2, 3};
        int result1 = computer.sum1(value1);
        System.out.println("result1 : "+ result1);


        int[] value2 = {1, 2, 3, 4, 5};
        int result2 = computer.sum1(value2);
        System.out.println("result2 : "+ result2);

//      TODO: 곱하기 함수 실행
        int[] value3 = {1,2,3};
        int result3 = computer.multi(value3);
        System.out.println("result3 : " + result3); // 6

//      TODO: 새로운 ...연산자 사용하기
        int result4 = computer.sum2(1, 2, 3);
        System.out.println(result4);

        int result5 = computer.sum2(1, 2, 3, 4, 5);
        System.out.println(result5);

    }

}
