package com.example.back.service;

import com.example.back.model.Notice;
import com.example.back.repository.NoticeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * packageName : com.example.back.service
 * fileName : NoticeService
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
@Service
public class NoticeService {
    @Autowired
    NoticeRepository noticeRepository;

    /**
     * 전체조회
     */
    public List<Notice> findAll(){
        List<Notice> list = noticeRepository.findAll();
        return list;
    }
}
