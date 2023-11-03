package com.example.back.service;

import com.example.back.model.GuestBook;
import com.example.back.model.GuestBook;
import com.example.back.model.GuestBook;
import com.example.back.repository.GuestBookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

/**
 * packageName : com.example.back.service
 * fileName : GuestBookService
 * author : GGG
 * date : 2023-11-03
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-11-03         GGG          최초 생성
 */
@Service
public class GuestBookService {
    
    @Autowired
    GuestBookRepository guestBookRepository;
    
    // 전체조회
    public Page<GuestBook> findAll(Pageable pageable) {
        Page<GuestBook> page = guestBookRepository.findAll(pageable);
        return page;

    }
    
    // userName like 조회 + paging
    public Page<GuestBook> findAllByUserNameContaining(String userName, Pageable pageable) {
        Page<GuestBook> page
                = guestBookRepository.findAllByUserNameContaining(userName, pageable);
        return page;

    }

    // 저장 함수
    public GuestBook save(GuestBook guestBook) {

        GuestBook GuestBook2 = guestBookRepository.save(guestBook);

        return GuestBook2;
    }

    // 상세 조회(1건 조회) 함수
    public Optional<GuestBook> findById(int id) {
        Optional<GuestBook> optionalGusetBook = guestBookRepository.findById(id);
        return optionalGusetBook;
    }

    // 삭제함수
    public boolean removeById(int id) {
        if(guestBookRepository.existsById(id)) {    // id 있는지 확인
            guestBookRepository.deleteById(id); // 삭제 진행
            return true;
        }
        return false;
    }
    
}
