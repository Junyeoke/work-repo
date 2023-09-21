package chap07.sec01.exam06;

/**
 * packageName : chap07.sec01.exam06
 * fileName : SportCar
 * author : GGG
 * date : 2023-09-21
 * description : 자식클래스
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-21         GGG          최초 생성
 */
public class SportsCar extends Car {
    // 함수 재정의 : speedUp()
    @Override
    public void speedUp() {
        speed += 10;    // 스포츠카 속도
    }

    // TODO: 함수 재정의 : final stop() : 재정의 불가, final 함수는 재정의 불가


}
