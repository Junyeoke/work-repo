package chap07.sec01.exam03;

/**
 * packageName : chap07.sec01.exam03
 * fileName : SupersonicAirplaneApplication
 * author : GGG
 * date : 2023-09-21
 * description : 실행클래스
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-21         GGG          최초 생성
 */
public class SupersonicAirplaneApplication {
    public static void main(String[] args) {
        // 자식 객체 생성
        SupersonicAirplane supersonicAirplane = new SupersonicAirplane();
        // 비행기 이륙
        supersonicAirplane.land();  // 부모 이륙함수
        supersonicAirplane.fly();   // 부모 비행함수
        // TODO: 모드 변경 : 기본모드 -> 슈퍼소닉 모드(초음속 비행)
        supersonicAirplane.flyMode = SupersonicAirplane.SUPERSONIC;
        supersonicAirplane.fly();       // 부모 fly() vs 자식 fly()
        supersonicAirplane.takeOff();   // 부모 착륙함수
    }
}