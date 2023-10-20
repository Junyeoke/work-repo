package com.example.back.repository;

import com.example.back.model.Notice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * packageName : com.example.simpledms.repository
 * fileName : DeptRepository
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
@Repository
public interface NoticeRepository extends JpaRepository<Notice, Integer> {
    // username like 검색 - 쿼리메소드
    List<Notice> findAllByUserNameContaining(String uname);
}
