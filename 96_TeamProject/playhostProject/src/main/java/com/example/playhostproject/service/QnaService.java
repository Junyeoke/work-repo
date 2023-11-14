package com.example.playhostproject.service;

import com.example.playhostproject.model.entity.Qna;
import com.example.playhostproject.repository.QnaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

/**
 * packageName : com.example.playhostproject.service
 * fileName : QnaService
 * author : GGG
 * date : 2023-11-14
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-11-14         GGG          최초 생성
 */
@Service
public class QnaService {
    @Autowired
    QnaRepository qnaRepository;    // DI

    //    1) question like 검색
    public Page<Qna> findAllByQuestionContaining(String question, Pageable pageable) {
        Page<Qna> page = qnaRepository.findAllByQuestionContaining(question, pageable);
        return page;
    }

    //    2) questioner like 검색
    public Page<Qna> findAllByQuestionerContaining(String questioner, Pageable pageable) {
        Page<Qna> page = qnaRepository.findAllByQuestionerContaining(questioner, pageable);
        return page;
    }

//    3) 저장 함수(수정함수)

    public Qna save(Qna qna) {

        Qna qna2 = qnaRepository.save(qna);

        return qna2;
    }


    // 상세 조회(1건 조회) 함수
    public Optional<Qna> findById(int qno) {
        Optional<Qna> optionalQna = qnaRepository.findById(qno);
        return optionalQna;
    }

    // 삭제함수
    public boolean removeById(int qno) {
        if(qnaRepository.existsById(qno)) {    // dno 있는지 확인
            qnaRepository.deleteById(qno); // 삭제 진행
            return true;
        }
        return false;
    }
}
