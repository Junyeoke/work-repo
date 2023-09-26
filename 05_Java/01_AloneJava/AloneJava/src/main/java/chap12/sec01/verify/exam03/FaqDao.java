package chap12.sec01.verify.exam03;


import java.util.ArrayList;
import java.util.List;

/**
 * packageName : chap13.sec01.verify.exam03
 * fileName : FaqDao
 * author : kangtaegyung
 * date : 2023/04/05
 * description : MVC 디자인 패턴
 * 요약 :
 *          M : Model               - 속성, 생성자, getter/setter 함수 (정보 저장용 클래스)
 *              DAO(DB 접속용 클래스) - CRUD(Create(insert) Read(select) Update(Update) Delete(Delete) 함수만 존재함
 *          V : View
 *          C : Controller
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2023/04/05         kangtaegyung          최초 생성
 */
public class FaqDao {
    public List<Faq> createFaq() {
//        내용 완성
//        ArrayList 사용, .add()
        List<Faq> list = new ArrayList<>();
        list.add(new Faq(1, "제목1", "내용1"));
        list.add(new Faq(2, "제목2", "내용2"));
        list.add(new Faq(3, "제목3", "내용3"));

        return list;
    }
}
