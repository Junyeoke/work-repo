package com.example.firstproject.dto;

import com.example.firstproject.entity.Comment;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * packageName : com.example.firstproject.dto
 * fileName : CommentDto
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
@AllArgsConstructor
@NoArgsConstructor
@Getter
@ToString
public class CommentDto {
    private Long id;            // 댓글의 id
    private Long articleId;     // 댓글의 부모 id
    private String nickname;    // 댓글 작성자
    private String body;        // 댓글 본문

    public static CommentDto createCommentDto(Comment comment) {
        return new CommentDto(
                comment.getId(),    // 댓글 엔티티의 id
                comment.getArticle().getId(),       // 댓글 엔티티가 속한 부모 게시글의 id
                comment.getNickname(),  // 댓글 엔티티의 nickname
                comment.getBody()   // 댓글 엔티티의 body
        );

    }
}
