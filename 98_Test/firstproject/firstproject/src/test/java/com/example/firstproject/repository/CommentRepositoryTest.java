package com.example.firstproject.repository;

import com.example.firstproject.entity.Article;
import com.example.firstproject.entity.Comment;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

/**
 * packageName : com.example.firstproject.repository
 * fileName : CommentRepositoryTest
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
@DataJpaTest        // 해당 클래스를 JPA와 연동해 테스팅
class CommentRepositoryTest {
    @Autowired
    CommentRepository commentRepository;

    @Test
    @DisplayName("테스트_결과에_보여_줄_이름")
    void findByArticleId() {
    }

    @Test
    @DisplayName("특정 게시글의 모든 댓글 조회")
    void findByNickname() {
//        todo) case 1: 4번 게시글의 모든 댓글 조회
        {
            // todo 1) 입력 데이터 준비
            Long articleId = 4L;
            // todo 2) 실제 데이터
            List<Comment> comments = commentRepository.findByArticleId(articleId);
            // todo 3) 예상 데이터
            Article article = new Article(4L, "당신의 인생 영화는?", "댓글 고");   // 부모 게시글 객체 생성
            Comment a = new Comment(1L, article, "Park", "위대한 쇼맨");
            Comment b = new Comment(2L, article, "Kim", "라라랜드");
            Comment c = new Comment(3L, article, "Lee", "범죄도시3");
            List<Comment> expected = Arrays.asList(a, b, c);    // 댓글 객체 합치기
            // todo 4) 비교 및 검증
            assertEquals(expected.toString(), comments.toString(), "4번 글의 모든 댓글을 출력!!");
        }
    }
}