package chap12.sec01.verify.exam01;

import java.util.ArrayList;
import java.util.List;

/**
 * packageName : chap12.sec01.verify.exam01
 * fileName : DeptDao
 * author : GGG
 * date : 2023-09-25
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-25         GGG          최초 생성
 */

public class DeptDao {
    public List<Dept> createDept(){
        List<Dept> list = new ArrayList<>();
        list.add(new Dept(10,"sales","부산"));
        list.add(new Dept(20,"Marketing","서울"));
        list.add(new Dept(30,"Research","대전"));
        return list;
    }

}
