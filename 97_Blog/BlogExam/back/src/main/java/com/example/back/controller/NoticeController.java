package com.example.back.controller;

import com.example.back.model.Notice;
import com.example.back.service.NoticeService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

/**
 * packageName : com.example.back.controller
 * fileName : AddNoticeController
 * author : GGG
 * date : 2023-10-17
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-17         GGG          최초 생성
 */
@Slf4j
@RestController
@RequestMapping("/noticepage")
public class NoticeController {
    @Autowired
    NoticeService noticeService;

    /** 전체 조회 */
    @GetMapping("/notice")
    public ResponseEntity<Object> getNoticeAll(){
        try {
            List<Notice> list = noticeService.findAll();
            if(list.isEmpty() == false){
                return new ResponseEntity<>(list, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

        } catch (Exception e) {
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /** 상세조회 */
    @GetMapping("/notice/{id}")
    public ResponseEntity<Object> getNoticeId(@PathVariable int id){
        try {
            // todo) 전체조회 함수 호출
            Optional<Notice> optionalDept = noticeService.findById(id);
            if (optionalDept.isEmpty() == false) {
                // todo) 성공
                return new ResponseEntity<>(optionalDept.get(), HttpStatus.OK);
            } else {
                // todo) 데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /** 저장함수 */
    @PostMapping("/notice")
    public ResponseEntity<Object> createNotice(@RequestBody Notice notice){
        try {
            // todo : jap 서비스 저장함수 호출 : dept2(DB 저장된 객체)
            Notice notice2 = noticeService.save(notice);
            return new ResponseEntity<>(notice2, HttpStatus.OK);
        } catch (Exception e) {
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /** 수정함수 */
    @PutMapping("/notice/edit/{id}")
    public ResponseEntity<Object> updateNotice(@RequestBody Notice notice, @PathVariable int id){
        try {
            // todo : jap 서비스 수정함수 호출 : dept2(DB 저장된 객체)
            Notice notice2 = noticeService.save(notice);
            return new ResponseEntity<>(notice2, HttpStatus.OK);
        } catch (Exception e) {
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /** 삭제함수 */
    @DeleteMapping("/notice/delete/{id}")
    public ResponseEntity<Object> deleteNotice(
            @PathVariable int id
    ){
        try {
            // todo) 삭제 함수 호출
            boolean bSuccess = noticeService.removeById(id);
            if (bSuccess == true) {
                // todo) 삭제성공
                return new ResponseEntity<>(HttpStatus.OK);
            } else {
                // todo) 0건 삭제(삭제할 대상이 없을경우)
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
