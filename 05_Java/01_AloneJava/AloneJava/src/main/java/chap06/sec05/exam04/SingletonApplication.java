package chap06.sec05.exam04;

/**
 * packageName : chap06.sec05.exam04
 * fileName : SingletonApplication
 * author : GGG
 * date : 2023-09-21
 * description : 실행클래스 : 공유 객체 테스트( 2개를 만들어서 주소(방번호)가 같은지 확인 )
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-21         GGG          최초 생성
 */
public class SingletonApplication {
    public static void main(String[] args) {
        Singleton singleton1 = Singleton.getInstance();     // 정적함수 호출
        Singleton singleton2 = Singleton.getInstance();     // 정적함수 호출

        // TODO : 같은 주소(방번호) 갖는지 확인 : 공유객체인지 확인
//                비교연산자 사용
        if(singleton1 == singleton2){
            System.out.println("같은 공유 객체입니다.");
        } else {
            System.out.println("다른 객체 공유입니다.");
        }
    }
}
