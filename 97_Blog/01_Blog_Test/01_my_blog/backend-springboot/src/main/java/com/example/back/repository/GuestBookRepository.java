package com.example.back.repository;

import com.example.back.model.GuestBook;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * packageName : com.example.back.repository
 * fileName : GuestBookRepository
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
@Repository
public interface GuestBookRepository extends JpaRepository<GuestBook, Integer> {

    Page<GuestBook> findAllByUserNameContaining(String userName, Pageable pageable);
}
