package com.example.jpacustomexam.repository;

import com.example.jpacustomexam.model.Comments;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * packageName : com.example.jpacustomexam.repository
 * fileName : CommentRepository
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
public interface CommentRepository extends JpaRepository<Comments, Integer> {

}
