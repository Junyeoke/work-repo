package chap08.sec01.exam02;

import chap08.sec01.exam01.Searchable;

/**
 * packageName : chap08.sec01.exam02
 * fileName : Cat
 * author : GGG
 * date : 2023-09-22
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-22         GGG          최초 생성
 */
public class Cat implements Soundable {
    @Override
    public String sound() {
        return "야옹";
    }
}
