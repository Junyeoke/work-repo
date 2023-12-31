package chap07.sec01.exam04;

/**
 * packageName : chap07.sec01.exam04
 * fileName : DmbCellPhoneApplication
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
public class DmbCellPhoneApplication {
    public static void main(String[] args) {
        // 객체 생성 : DMB폰
        DmbCellPhone dmbCellPhone = new DmbCellPhone("애플", "검정", 10);
        System.out.println("모델 :" + dmbCellPhone.model);        // 부모
        System.out.println("색상 :" + dmbCellPhone.color);        // 부모
        System.out.println("채널 :" + dmbCellPhone.channel);      // 자식

        // 전화걸기 : 부모 기능
        dmbCellPhone.powerOn(); // 전원켜기
        dmbCellPhone.bell();    // 통화음
        dmbCellPhone.sendVoice("여보세요");
        dmbCellPhone.receiveVoice("안녕하세요~ 반갑습니다.");
        dmbCellPhone.hangUp();  // 전화끊기

        // tv 수신 : 자식 기능
        dmbCellPhone.turnOnDmb();               // tv 켜기
        dmbCellPhone.changeChannelDmb(12);      // 채널 돌리기
        dmbCellPhone.turnOffDmb();              // tv 끄기


    }
}
