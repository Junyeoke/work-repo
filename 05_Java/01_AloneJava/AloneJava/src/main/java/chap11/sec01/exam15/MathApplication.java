package chap11.sec01.exam15;

/**
 * packageName : chap11.sec01.exam20
 * fileName : MathApplication
 * author : ds
 * date : 2022-10-05
 * description : 수학함수들 . Math 객체의 함수들
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2022-10-05         ds          최초 생성
 */
public class MathApplication {
    public static void main(String[] args) {

        // TODO : 랜덤 함수 : 0 <= x < 1 값
        //  Math 클래스 : random() (정적(공유)함수 : 클래스명.함수명())
        double v11 = Math.random();
        System.out.println("v11=" + v11);
        // TODO : Math.abs(숫자); : 절대값 함수
        int v1 = Math.abs(-5);
        System.out.println("v1=" + v1);
        // TODO : Math.max(숫자1, 숫자2); 최대값 구하는 함수
        int v7 = Math.max(5,9);
        System.out.println("v7=" + v7);
        // TODO : Math.min(숫자1, 숫자2); 최소값 구하는 함수
        int v9 = Math.min(5,9);
        System.out.println("v9=" + v9);
        // TODO : Math.ceil(숫자); 소수점 올림 구하기(무조건 첫째자리에서 올림)
        double v3 = Math.ceil(5.3);
        System.out.println("v3=" + v3);
        // TODO : Math.floor(숫자); 소수점 버림 구하기(무조건 첫째자리에서 버림)
        double v5 = Math.floor(5.3);
        System.out.println("v5=" + v5);
        // TODO: Math.round(숫자); 반올림(무조건 첫째자리에서 반올림)
        double v14 = Math.round(5.3); // 5
        System.out.println("v14=" + v14);

        // TODO (참고) 응용 : 셋째자리에서 반올림하기
        //   1) 100을 곱하고 2) 반올림 구하고 3) 100 나누기
        double value = 12.3456;     // 셋째자리에서 반올림
        double temp = value * 100;  // 1)
        long temp2 = Math.round(temp);  // 2)
        double v16 = temp2/100.0; // 3)
        System.out.println("v16=" + v16);

    }
}








