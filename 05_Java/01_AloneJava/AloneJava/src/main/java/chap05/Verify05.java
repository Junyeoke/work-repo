package chap05;

import java.util.Arrays;

/**
 * packageName : chap05
 * fileName : Verify05
 * author : GGG
 * date : 2023-09-19
 * description :   배열 / 열거형 연습문제
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-19         GGG          최초 생성
 */
public class Verify05 {
    /**
     * 주어진 배열에서 최대값을 구해보세요
     */
    public void exam04() {
        int[] array = {1, 5, 3, 8, 2};
        int max = array[0];
        for (int i = 0; i < array.length; i++) {
            if (max < array[i]) {
                max = array[i];
            }
        }
        System.out.println(max);
    }

    /**
     * 2) 중첩 for문을 이용해서 주어진 배열의 전체 항목의 합과 평균을 구해보세요.
     */
    public void exam05() {
        int[][] array = { { 95, 86 }, { 83, 92, 96 }, { 78, 83, 93, 87, 88 } };

        int sum = 0;
        int count = 0;

        for(int i = 0; i < array.length; i++){
            for(int j = 0; j < array[i].length; j++){
                sum += array[i][j];
                count += 1;
            }
        }
        double avg = (double) sum / count;



        System.out.println(sum);
        System.out.println(avg);
    }

}
