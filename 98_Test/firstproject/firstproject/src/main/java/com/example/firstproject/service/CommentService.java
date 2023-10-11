package com.example.firstproject.service;

import com.example.firstproject.dto.CommentDto;
import com.example.firstproject.entity.Comment;
import com.example.firstproject.repository.ArticleRepository;
import com.example.firstproject.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * packageName : com.example.firstproject.service
 * fileName : CommentService
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
@Service
public class CommentService {
    @Autowired
    private CommentRepository commentRepository;
    @Autowired
    private ArticleRepository articleRepository;

    public List<CommentDto> comments(Long articleId) {
        // todo 1) 댓글 조회
        List<Comment> comments = commentRepository.findByArticleId(articleId);
        // todo 2) 엔티티 -> DTO 변환
        List<CommentDto> dtos = new ArrayList<CommentDto>();
        for (int i = 0; i < comments.size() ; i++) {        // 조회한 댓글 엔티티 수만큼 반복하기
            Comment c = comments.get(i);
            CommentDto dto = CommentDto.createCommentDto(c);        // 엔티티를 DTO로 변환
            dtos.add(dto);   // 변환한 DTO를 dtos 리스트에 삽입
        }
        // todo 3) 결과 반환
        return dtos;
    }
}
