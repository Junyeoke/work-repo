package com.example.modelexam.controller.quiz;

import com.example.modelexam.model.Board;
import com.example.modelexam.service.quiz.BoardService;
import lombok.Getter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

/**
 * packageName : com.example.modelexam.controller.quiz
 * fileName : BoardController
 * author : GGG
 * date : 2023-10-12
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-12         GGG          최초 생성
 */
@Slf4j
@RestController
@RequestMapping("/quiz")
public class BoardController {

    // 객체 가져오기
    @Autowired
    BoardService boardService;

    /**
     * 전체 조회
     */
    @GetMapping("/board")
    public ResponseEntity<Object> getBoardAll(){
        try {
            List<Board> list = boardService.findAll();
            if(list.isEmpty() == false){
                return new ResponseEntity<>(list, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

        }catch (Exception e) {
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * 상세 조회
     */
    @GetMapping("/board/{id}")
    public ResponseEntity<Object> getBoardId(@PathVariable int id){
        try {
            Optional<Board> optionalBoard = boardService.findById(id);
            if(optionalBoard.isEmpty() == false){
                return new ResponseEntity<>(optionalBoard.get(), HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        } catch (Exception e) {
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * 저장 함수
     */
    @PostMapping("/board")
    public ResponseEntity<Object> createBorad(@RequestBody Board board){
        try {
            List<Board> list = boardService.save(board);
            return new ResponseEntity<>(list, HttpStatus.CREATED);
        } catch (Exception e) {
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * 삭제 함수
     */
    @DeleteMapping("/board/delete/{id}")
    public ResponseEntity<Object> deleteBoard(@PathVariable int id){
        try {
            boolean bSuccess = boardService.removeById(id);
            if(bSuccess == true){
                return new ResponseEntity<>(HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        } catch (Exception e) {
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
