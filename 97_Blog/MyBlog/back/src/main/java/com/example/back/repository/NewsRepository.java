package com.example.back.repository;

import com.example.back.model.News;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



/**
 * packageName : com.example.back.repository
 * fileName : NewsRepository
 * author : GGG
 * date : 2023-10-26
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-26         GGG          최초 생성
 */
@Repository
public interface NewsRepository extends JpaRepository<News, Integer> {

    Page<News> findAllByTitleContaining(String title, Pageable page);

}
