package com.example.jpacustomexam.service;

import com.example.jpacustomexam.model.Board;
import com.example.jpacustomexam.model.Comments;
import com.example.jpacustomexam.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

/**
 * packageName : com.example.jpacustomexam.service
 * fileName : CommentService
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

@Service
public class CommentService {

    @Autowired
    CommentRepository commentRepository;

    // 댓글 쓰기
    public Comments save(Comments comments) {

        Comments comments2 = commentRepository.save(comments);

        return comments2;
    }

    // 전체 조회
    public Page<Comments> findAll(Pageable pageable) {
        Page<Comments> page = commentRepository.findAll(pageable);
        return page;

    }

    // 수정 함수
    public Optional<Comments> findById(int cid) {
        Optional<Comments> optionalComments = commentRepository.findById(cid);
        return optionalComments;
    }

    // 삭제함수
    public boolean removeById(int cid) {
        if(commentRepository.existsById(cid)) {    // dno 있는지 확인
            commentRepository.deleteById(cid); // 삭제 진행
            return true;
        }
        return false;
    }
}
