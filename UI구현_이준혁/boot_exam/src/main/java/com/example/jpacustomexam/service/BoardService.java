package com.example.jpacustomexam.service;

import com.example.jpacustomexam.model.Board;
import com.example.jpacustomexam.repository.BoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * packageName : com.example.jpacustomexam.service
 * fileName : BoardService
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
public class BoardService {

    @Autowired
    BoardRepository boardRepository;

    // 전체 조회
    public Page<Board> findAll(Pageable pageable) {
        Page<Board> page = boardRepository.findAll(pageable);
        return page;

    }


    //    title like 조회 + paging
    public Page<Board> findAllByTitleContaining(String title, Pageable pageable) {
        Page<Board> page
                = boardRepository.findAllByTitleContaining(title, pageable);
        return page;

    }

    // 저장 함수(수정함수)
    public Board save(Board board) {

        Board board2 = boardRepository.save(board);

        return board2;
    }

    // 상세 조회(1건 조회) 함수
    public Optional<Board> findById(int bid) {
        Optional<Board> optionalBoard = boardRepository.findById(bid);
        return optionalBoard;
    }

    // 삭제함수
    public boolean removeById(int bid) {
        if(boardRepository.existsById(bid)) {    // bid 있는지 확인
            boardRepository.deleteById(bid); // 삭제 진행
            return true;
        }
        return false;
    }

}
