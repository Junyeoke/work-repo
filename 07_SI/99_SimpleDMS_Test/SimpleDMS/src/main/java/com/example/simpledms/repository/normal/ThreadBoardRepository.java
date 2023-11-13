package com.example.simpledms.repository.normal;

import com.example.simpledms.model.dto.normal.ThreadBoardDto;
import com.example.simpledms.model.entity.normal.ThreadBoard;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

/**
 * packageName : com.example.simpledms.repository.normal
 * fileName : ThreadBoardRepository
 * author : GGG
 * date : 2023-10-26
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-26         GGG          최초 생성
 */
@Repository
public interface ThreadBoardRepository extends JpaRepository<ThreadBoard, Integer> {

    // 계층형 쿼리(Connect by)
    @Query(value = "SELECT TID AS tid " +
            "        , LPAD('└',(LEVEL-1))|| subject AS Subject " +
            "        , main_text AS MainText " +
            "        , writer AS Writer " +
            "        , views      AS views " +
            "        , tgroup AS tgroup " +
            "        , tparent AS tparent " +
            "FROM TB_THREAD_BOARD " +
            "WHERE SUBJECT LIKE '%%' " +
            "AND DELETE_YN = 'N' " +
            "START WITH TPARENT = 0 " +
            "CONNECT BY PRIOR TID = TPARENT " +
            "ORDER SIBLINGS BY TGROUP DESC", nativeQuery = true)
    Page<ThreadBoardDto> selectByConnectByPage(@Param("subject") String subject, Pageable pageable);

    // 게시물 저장함수 : 최초저장 (tparent = 0, tgroup=tid)
    @Transactional
    @Modifying
    @Query(value = "INSERT INTO TB_THREAD_BOARD " +
            "VALUES(sq_thread_board.nextval, :#{#threadBoard.subject}, " +
            ":#{#threadBoard.mainText}, " +
            ":#{#threadBoard.writer}, " +
            "0, sq_thread_board.CURRVAL, 0, 'N', " +
            "        TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS'), NULL, NULL)", nativeQuery = true)
    int insertByBoard(@Param("threadBoard") ThreadBoard threadBoard);

    // 게시물 + 답변글 2개 삭제 함수 : 소프트 삭제
    @Transactional
    @Modifying
    @Query(value ="UPDATE TB_THREAD_BOARD " +
            "SET DELETE_YN = 'Y' " +
            "    ,DELETE_TIME = TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') " +
            "WHERE TGROUP = :tgroup", nativeQuery = true)
    int removeAllByTgroup(@Param("tgroup") int tgroup);
    
}
