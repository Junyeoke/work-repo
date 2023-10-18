package com.example.modelexam.controller.exam03;

import com.example.modelexam.model.Member;
import com.example.modelexam.service.exam03.Member03Service;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * packageName : com.example.modelexam.controller.exam01
 * fileName : MemberController
 * author : GGG
 * date : 2023-10-10
 * description : 멤버 컨트롤러 - 화면 & 업무로직 중간 역할(리모컨 역할)
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-10         GGG          최초 생성
 */
@Slf4j
@Controller
@RequestMapping("/exam03")
public class Member03Controller {

//    todo : 서비스 객체 가져오기
    @Autowired
Member03Service memberService;

    @GetMapping("/member")
    public String getMemberAll(Model model){
        List<Member> list = memberService.findAll();
        model.addAttribute("list", list);

        log.debug(list.toString());
        return "exam03/member/member_all.jsp";
    }

    @GetMapping("/member/{eno}")
    public String getMemeberId(@PathVariable long eno, Model model){
//        todo : 멤버 서비스 상세조회 함수 호출
        Member member = memberService.findById(eno);
        model.addAttribute("member", member);

        return "exam03/member/member_id.jsp";
    }

    //  todo: 연습 3)
    //    Member03Service 클래스를 만들고 save() 함수를 정의한다.
    //    Member03Controller 클래스를 만들어서
    //    createMember() 함수를 정의하고
    //    Rest Client 툴로 데이터를 확인하세요

    // todo : @ResponseBody : 함수의 리턴값을 json 데이터로 변경하는 어노테이션
    @PostMapping("/member")
    @ResponseBody
    public List<Member> createMember(
            @RequestBody Member member
    ){
        // todo : 서비스 저장 함수 호출
        List<Member> list = memberService.save(member);
        return list;
    }
}