package com.example.modelexam.controller.exam10;

import com.example.modelexam.model.Member;
import com.example.modelexam.service.exam10.Member10Service;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

/**
 * packageName : com.example.modelexam.controller.exam10
 * fileName : Member07Controller
 * author : GGG
 * date : 2023-10-11
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-11         GGG          최초 생성
 */
@Slf4j
@RestController
@RequestMapping("/exam10")
public class Member10Controller {
    //   todo: 연습문제 1)부서클래스를 참고하여
    //     Member07Controller 클래스를 만들어서 getMemberAll() 함수를 정의하세요
    //     단, 예외처리와 ResponseEntity 를 사용해 데이터와 메세지를 같이 전송하세요

    @Autowired
    Member10Service memberService;

    /**
     * 전체 조회 함수
     */
    @GetMapping("/member")
    public ResponseEntity<Object> getMemberAll(){
        try {
            List<Member> list = memberService.findAll();
            if(list.isEmpty() == false){
                // todo : 조회 성공
                return new ResponseEntity<>(list, HttpStatus.OK);
            } else {
                // todo : 데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        } catch (Exception e){
            // todo : 데이터 없음
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }

    //  todo: 연습문제 2)부서클래스를 참고하여
    //    Member08Service 클래스를 만들고 findById() 함수안에 Optional 사용으로
    //    코드를 업그레이드 하세요
    //    Member08Controller 클래스를 만들어서 getMemberId() 함수를 정의하세요
    //    단, 예외처리와 ResponseEntity 를 사용해 데이터와 메세지를 같이 전송하세요
    //    url: /member/{eno}

    /**
     * 상세조회 함수
     */
    @GetMapping("/member/{eno}")
    public ResponseEntity<Object> getMemberId(@PathVariable long eno){
        try {
            Optional<Member> optionalMember = memberService.findById(eno);
            if(optionalMember.isEmpty() == false){
                return new ResponseEntity<>(optionalMember.get(), HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        } catch (Exception e) {
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * 저장함수
     */
    @PostMapping("/member")
    public ResponseEntity<Object> createMember(@RequestBody Member member){
        try {
            List<Member> list = memberService.save(member);
            return new ResponseEntity<>(list, HttpStatus.CREATED);
        } catch (Exception e) {
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * 수정 함수
     */
    @PutMapping("/member/edit/{eno}")
    public ResponseEntity<Object> updateMember(
            @PathVariable int eno,
            @RequestBody Member member
    ) {
        try {
            List<Member> list = memberService.save(member);
            return new ResponseEntity<>(list, HttpStatus.CREATED);
        } catch (Exception e) {
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
