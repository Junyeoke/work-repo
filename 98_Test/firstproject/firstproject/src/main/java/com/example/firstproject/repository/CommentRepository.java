package com.example.firstproject.repository;

import com.example.firstproject.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

/**
 * packageName : com.example.firstproject.repository
 * fileName : CommentRepository
 * author : GGG
 * date : 2023-10-11
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-11         GGG          최초 생성
 */
public interface CommentRepository extends JpaRepository<Comment, Long> {
    // todo 1) 특정 게시글의 모든 댓글 조회
    @Query(value =
            "SELECT * " +
            "FROM comment " +
            " WHERE article_id = :articleId",
            nativeQuery = true)   // value 속성에 실행하려는 쿼리 작성
    List<Comment> findByArticleId(Long articleId);
    // todo 2) 특정 닉네임의 모든 댓글 조회
    List<Comment> findByNickname(String nickname);
}
