package com.example.back.service;

import com.example.back.model.Notice;
import com.example.back.repository.NoticeRepository;
import org.aspectj.weaver.ast.Not;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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

    /** 상세 조회 */
    public Optional<Notice> findById(int id) {
        Optional<Notice> optionalNotice = noticeRepository.findById(id);

        return optionalNotice;
    }

    /** 저장(수정)함수 */
    public Notice save(Notice notice) {
//      todo: jpa 저장함수 호출 ( 기본키 없으면 insert, 있으면 update )
        Notice notice2 = noticeRepository.save(notice);

        return notice2; // 저장된 부서객체
    }

    /** 삭제함수 */
    public boolean removeById(int id){
        // todo : existsById : jpa 함수 - 리턴값 있으면 true, 없으면 false
        if(noticeRepository.existsById(id)) {
            noticeRepository.deleteById(id); // db 삭제(dno)
            return true;
        }
        return false;
    }
}
