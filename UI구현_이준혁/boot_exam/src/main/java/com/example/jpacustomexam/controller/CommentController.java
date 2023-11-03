package com.example.jpacustomexam.controller;

import com.example.jpacustomexam.model.Board;
import com.example.jpacustomexam.model.Comments;
import com.example.jpacustomexam.service.CommentService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

/**
 * packageName : com.example.jpacustomexam.controller
 * fileName : CommentController
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
@RestController
@Slf4j
@RequestMapping("/api")
public class CommentController {

    @Autowired
    CommentService commentService;

    //    저장함수
    @PostMapping("/boards/comments")
    public ResponseEntity<Object> create(@RequestBody Comments comments) {

        try {
            Comments comments2 = commentService.save(comments);

            return new ResponseEntity<>(comments2, HttpStatus.OK);
        } catch (Exception e) {
//            DB 에러가 났을경우 : INTERNAL_SERVER_ERROR 프론트엔드로 전송
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 전체조회
    @GetMapping("/boards/comments/{bid}")
    public ResponseEntity<Object> getCommentAllPage(Pageable pageable) {
        try {
            Page<Comments> page
                    = commentService.findAll(pageable);
//          todo : Map 자료구조 정보 저장 : 1) 부서 객체, 2) 페이징 정보 (3개)
            Map<String, Object> response = new HashMap<>();
            response.put("comment", page.getContent());                        // 댓글 객체
            response.put("currentPage", page.getNumber());                  // 현재페이지 번호
            response.put("totalItems", page.getTotalElements());            // 전체 테이블 건수
            response.put("totalPage", page.getTotalPages());                // 전체페이지 수

            if (page.isEmpty() == false) {
//                성공
                return new ResponseEntity<>(response, HttpStatus.OK);
            } else {
//                데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

        } catch (Exception e){
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 수정함수
    @GetMapping("/boards/comments/{bid}")
    public ResponseEntity<Object> findById(@PathVariable int bid) {
//    상세조회 실행
        try {
            Optional<Comments> optionalComments = commentService.findById(bid);

            if (optionalComments.isPresent()) {
//                성공
                return new ResponseEntity<>(optionalComments.get(), HttpStatus.OK);
            } else {
//                데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        } catch (Exception e) {
//            서버 에러
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 삭제함수

    @DeleteMapping("/board/comments/deletion/{bid}")
    public ResponseEntity<Object> delete(@PathVariable int bid) {

//        프론트엔드 쪽으로 상태정보를 보내줌
        try {
            boolean bSuccess = commentService.removeById(bid);

            if (bSuccess == true) {
//                delete 문이 성공했을 경우
                return new ResponseEntity<>(HttpStatus.OK);
            }
//            delete 실패했을 경우( 0건 삭제가 될경우 )
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
//            DB 에러가 날경우
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
