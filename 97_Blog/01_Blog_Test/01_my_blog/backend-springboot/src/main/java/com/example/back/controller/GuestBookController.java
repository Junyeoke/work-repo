package com.example.back.controller;

import com.example.back.model.GuestBook;
import com.example.back.model.GuestBook;
import com.example.back.service.GuestBookService;
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
 * fileName : GuestBookController
 * author : GGG
 * date : 2023-11-03
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-11-03         GGG          최초 생성
 */
@RestController
@Slf4j
@RequestMapping("/api")
public class GuestBookController {
    @Autowired
    GuestBookService guestBookService;

    // 전체 조회 + userName like 검색
    @GetMapping("/guestbook")
    public ResponseEntity<Object> findAllByUserNameContaining(
            @RequestParam(defaultValue = "") String userName,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "3") int size

    ) {
        try {
            Pageable pageable = PageRequest.of(page, size);

//            전체조회(dname="") + like 검색(dname="S")
            Page<GuestBook> GuestBookPage
                    = guestBookService.findAllByUserNameContaining(userName, pageable);

//            리액트 전송 : 부서배열, 페이징 정보 [자료구조 : Map<키이름, 값>]
            Map<String, Object> response = new HashMap<>();
            response.put("guestbook", GuestBookPage.getContent());
            response.put("currentPage", GuestBookPage.getNumber());
            response.put("totalItems", GuestBookPage.getTotalElements());
            response.put("totalPages", GuestBookPage.getTotalPages());

//            신호 보내기
            if (GuestBookPage.isEmpty() == false) {
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
    @PostMapping("/guestbook")
    public ResponseEntity<Object> create(@RequestBody GuestBook guestbook) {

        try {
            GuestBook gusetBook2 = guestBookService.save(guestbook);

            return new ResponseEntity<>(gusetBook2, HttpStatus.OK);
        } catch (Exception e) {
//            DB 에러가 났을경우 : INTERNAL_SERVER_ERROR 프론트엔드로 전송
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //    수정함수
    @PutMapping("/guestbook/{id}")
    public ResponseEntity<Object> update(@RequestBody GuestBook guestbook, @PathVariable int id) {

        try {
            GuestBook gusetBook2 = guestBookService.save(guestbook);    // db 수정

            return new ResponseEntity<>(gusetBook2, HttpStatus.OK);
        } catch (Exception e) {
//            DB 에러가 났을경우 : INTERNAL_SERVER_ERROR 프론트엔드로 전송
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    // 상세조회
    @GetMapping("/guestbook/{id}")
    public ResponseEntity<Object> findById(@PathVariable int id) {
//    상세조회 실행
        try {
            Optional<GuestBook> optionalBoard = guestBookService.findById(id);

            if (optionalBoard.isPresent()) {
//                성공
                return new ResponseEntity<>(optionalBoard.get(), HttpStatus.OK);
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

    @DeleteMapping("/guestbook/deletion/{id}")
    public ResponseEntity<Object> delete(@PathVariable int id) {

//        프론트엔드 쪽으로 상태정보를 보내줌
        try {
            boolean bSuccess = guestBookService.removeById(id);

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
