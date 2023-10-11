package com.example.modelexam.service.exam05;

import com.example.modelexam.dao.MemberDao;
import com.example.modelexam.model.Member;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * packageName : com.example.modelexam.service.exam01
 * fileName : MemberService
 * author : GGG
 * date : 2023-10-10
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-10         GGG          최초 생성
 */
@Service
public class Member05Service {

//  todo: 연습 2)
//    Member02Service 클래스를 만들고 findById() 함수를 정의한다.
//    MemberController 클래스를 만들어서 getMemberId() 함수를 정의하고,
//    샘플데이터 뷰로(jsp : member_id.jsp) 전송해 보세요.
//    url : /member/{eno}
//    jsp : exam02/member/member_id.jsp

//    todo : db 접근 함수들이 있는 객체 : memberDao
    @Autowired
    MemberDao memberDao;


    /**
     * 전체 조회
     * @return
     */
    public List<Member> findAll(){
        List<Member> list = memberDao.selectAll();      // 전체 조회
        return list;
    }

    public Member findById(Long eno){
        Member member = memberDao.selectById(eno);
        return member;
    }


    //  todo: 연습 5)
    //    Member05Service 클래스를 만들고 save() 함수를 정의한다.
    //    Member05Controller 클래스를 만들어서 editMember(), updateMember() 함수를 정의
    //    editMember()
    //    - url : /member/edition/{eno}
    //    - jsp : exam05/member/update_member.jsp
    //    updateMember()
    //    - url : /member/edit/{eno}
    //    - redirect url : /exam05/member
    /**
     * 회원 저장 함수
     * @param member
     * @return
     */
    public List<Member> save(Member member){
        List<Member> list = null;
        // todo : ui(frontend) -> insert (사원번호가 없으면)
        if(member.getEno() == null){
            // todo : 새로운 사원 번호 생성
            int count = memberDao.selectAll().size();   // 전체 건수
            int newEno = count + 8000;
            member.setEno(newEno);      // 새로운 사원번호 저장

            // todo : db 저장
            list = memberDao.insert(member);
        } else {
            // todo : db 수정, 기본키가 없으면 insert 있으면 수정하기
            list = memberDao.update(member);
        }


        return list;
    }


}
