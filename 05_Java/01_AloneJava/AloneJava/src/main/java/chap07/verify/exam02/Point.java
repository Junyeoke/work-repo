package chap07.verify.exam02;

/**
 * packageName : chap07.verify.exam02
 * fileName : Point
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
public class Point {

    int point1;
    int point2;

    void set(int point1, int point2){
        this.point1 = point1;
        this.point2 = point2;
    }
    void showPoint(){
        System.out.println("(" + point1 + ", " + point2 + ")");

    }
}
