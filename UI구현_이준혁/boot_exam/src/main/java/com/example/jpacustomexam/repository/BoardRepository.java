package com.example.jpacustomexam.repository;

import com.example.jpacustomexam.model.Board;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


/**
 * packageName : com.example.jpacustomexam.repository
 * fileName : BoardRepository
 * author : GGG
 * date : 2023-10-25
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-25         GGG          최초 생성
 */

@Repository
public interface BoardRepository extends JpaRepository<Board, Integer> {

    // 1) boardtitle like 검색

    Page<Board> findAllByTitleContaining(String title, Pageable pageable);
}
