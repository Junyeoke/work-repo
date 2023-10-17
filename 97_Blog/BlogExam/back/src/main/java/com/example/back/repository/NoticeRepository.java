package com.example.back.repository;

import com.example.back.model.Notice;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * packageName : com.example.back.repository
 * fileName : NoticeRepository
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
public interface NoticeRepository extends JpaRepository<Notice, Integer> {
}
