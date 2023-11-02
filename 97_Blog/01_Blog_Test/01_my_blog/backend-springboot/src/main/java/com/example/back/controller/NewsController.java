package com.example.back.controller;

import com.example.back.model.News;
import com.example.back.service.NewsService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

/**
 * packageName : com.example.back.controller
 * fileName : NewsController
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
@RestController
@Slf4j
@RequestMapping("/api")
public class NewsController {
    @Autowired
    NewsService newsService;

    // 전체 조회 + title like 검색
    @GetMapping("/news")
    public ResponseEntity<Object> findAllByTitleContaining(
            @RequestParam(defaultValue = "") String title,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "3") int size

    ) {
        try {
            Pageable pageable = PageRequest.of(page, size);

//            전체조회(dname="") + like 검색(dname="S")
            Page<News> newsPage
                    = newsService.findAllByTitleContaining(title, pageable);

//            리액트 전송 : 부서배열, 페이징 정보 [자료구조 : Map<키이름, 값>]
            Map<String, Object> response = new HashMap<>();
            response.put("news", newsPage.getContent());                
            response.put("currentPage", newsPage.getNumber());          
            response.put("totalItems", newsPage.getTotalElements());    
            response.put("totalPages", newsPage.getTotalPages());      

//            신호 보내기
            if (newsPage.isEmpty() == false) {
//                성공
                return new ResponseEntity<>(response, HttpStatus.OK);
            } else {
//                데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }


        } catch (Exception e) {
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //    저장함수
    @PostMapping("/news")
    public ResponseEntity<Object> create(@RequestBody News news) {

        try {
            News news2 = newsService.save(news);

            return new ResponseEntity<>(news2, HttpStatus.OK);
        } catch (Exception e) {
//            DB 에러가 났을경우 : INTERNAL_SERVER_ERROR 프론트엔드로 전송
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //    수정함수
    @PutMapping("/news/{no}")
    public ResponseEntity<Object> update(@RequestBody News news, @PathVariable int no) {

        try {
            News news2 = newsService.save(news);    // db 수정

            return new ResponseEntity<>(news2, HttpStatus.OK);
        } catch (Exception e) {
//            DB 에러가 났을경우 : INTERNAL_SERVER_ERROR 프론트엔드로 전송
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    // 상세조회
    @GetMapping("/news/{no}")
    public ResponseEntity<Object> findById(@PathVariable int no) {
//    상세조회 실행
        try {
            Optional<News> optionalNotice = newsService.findById(no);

            if (optionalNotice.isPresent()) {
//                성공
                return new ResponseEntity<>(optionalNotice.get(), HttpStatus.OK);
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

    @DeleteMapping("/news/deletion/{no}")
    public ResponseEntity<Object> delete(@PathVariable int no) {

//        프론트엔드 쪽으로 상태정보를 보내줌
        try {
            boolean bSuccess = newsService.removeById(no);

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
