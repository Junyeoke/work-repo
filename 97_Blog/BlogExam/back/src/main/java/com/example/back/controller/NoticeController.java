package com.example.back.controller;

import com.example.back.model.Notice;
import com.example.back.service.NoticeService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

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
@RequestMapping("/notice")
public class NoticeController {
    @Autowired
    NoticeService noticeService;

    /** 전체 조회 */
    @GetMapping("/notice_all")
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
}
