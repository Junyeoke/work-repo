package chap07.sec01.exam03;

/**
 * packageName : chap07.sec01.exam03
 * fileName : SupersonicAirplane
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
public class SupersonicAirplane extends Airplane {
    // 속성 : 모드 바꿈 속성
    public static final String NORMAL = "NORMAL";              // 공유 상수
    public static final String SUPERSONIC = "SUPERSONIC";

    public String flyMode = NORMAL;     // 기본모드는 최초에 NORMAL

    // 함수
    /**
     * fly() 함수에 모드 선택 추가 : 오버라이딩(메소드 재정의)
     */
    @Override
    public void fly() {
        if(flyMode.equals(SUPERSONIC)){
            System.out.println("Supersonic fly!!!!!");      // 슈퍼소닉 모드 비행
        } else {
//            System.out.println("fly");
            // TODO : super.함수() : 부모쪽에 있는 함수를 호출
            super.fly();                                     // 기본모드 비행
        }

    }
}
