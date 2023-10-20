package com.example.back.service;

import com.example.back.model.Notice;
import com.example.back.repository.NoticeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * packageName : com.example.simpledms.service
 * fileName : DeptService
 * author : GGG
 * date : 2023-10-19
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-19         GGG          최초 생성
 */
@Service
public class NoticeService {
    @Autowired
    NoticeRepository noticeRepository;  // DI

    /** 전체조회 */
    public List<Notice> findAll(){
        List<Notice> list = noticeRepository.findAll();
        return list;
    }

    /** 검색어(dname like) 조회 함수 */
    public List<Notice> findAllByUserNameContaining(String uname){
        List<Notice> list = noticeRepository.findAllByUserNameContaining(uname);
        return list;
    }


}
