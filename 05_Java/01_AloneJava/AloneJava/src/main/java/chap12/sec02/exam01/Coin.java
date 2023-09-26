package chap12.sec02.exam01;

/**
 * packageName : chap12.sec02.exam01
 * fileName : Coin
 * author : GGG
 * date : 2023-09-26
 * description : 모델 코인 클래스
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-26         GGG          최초 생성
 */
public class Coin {
    private int value;

//    생성자, setter/getter

    public Coin() {
    }

    public Coin(int value) {
        this.value = value;
    }

    public int getValue() {
        return value;
    }

    public void setValue(int value) {
        this.value = value;
    }


}
