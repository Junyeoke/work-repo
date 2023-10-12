package com.example.modelexam.service.quiz;

import com.example.modelexam.dao.BoardDao;
import com.example.modelexam.model.Board;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * packageName : com.example.modelexam.service.quiz
 * fileName : BoardSerivce
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
@Service
public class BoardService {

    @Autowired
    BoardDao boardDao;      // 가짜 db에 접근하는 객체

    /**
     * 전체 조회 함수
     */
    public List<Board> findAll() {
        List<Board> list = boardDao.selectAll();
        return list;
    }

    /**
     * 상세 조회 함수
     */
    public Optional<Board> findById(int id) {
        Board board = boardDao.selectById(id);
        Optional<Board> optionalBoard = Optional.ofNullable(board);
        return optionalBoard;
    }

    /**
     * 게시판 정보 저장 함수
     */
    public List<Board> save(Board board){
        List<Board> list = null;
        if(board.getId() == null){
            int count = boardDao.selectAll().size();
            int newId = count + 1;
            board.setId(newId);
            list = boardDao.insert(board);
        } else {
            list = boardDao.update(board);
        }
        return list;
    }

    /**
     * 게시글 번호로 삭제하는 함수
     */
    public boolean removeById(int id){
        int iCount = boardDao.deleteById(id);
        return (iCount > 0)? true : false;
    }
}
