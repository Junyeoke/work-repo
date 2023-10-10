package com.example.modelexam.service.exam03;

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
public class Member03Service {

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

    /**
     * 회원 저장 함수
     * @param member
     * @return
     */
    public List<Member> save(Member member){
        // todo : db 저장
        List<Member> list = memberDao.insert(member);
        return list;
    }
}
