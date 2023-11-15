package com.example.playhostproject.controller;

import com.example.playhostproject.model.entity.Cart;
import com.example.playhostproject.model.entity.dto.CartDto;
import com.example.playhostproject.service.CartService;
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
 * packageName : com.example.playhostproject.controller
 * fileName : CartController
 * author : GGG
 * date : 2023-11-15
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-11-15         GGG          최초 생성
 */
@Slf4j
@RestController
@RequestMapping("/api/shop")
public class CartController {
    @Autowired
    CartService cartService;
    
    // 전체조회 + name like 검색
    @GetMapping("/cart")
    public ResponseEntity<Object> selectByNameContaining(
            @RequestParam(defaultValue = "") String name,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "3") int size
    ){
        try {
//            페이지 변수 저장 (page:현재페이지 번호, size: 한 페이지당 개수)
//            함수 매개변수 : Pageable(위의 값을 넣기)
//            사용법 : Pageable pageable = PageRequest.of(현재페이지번호, 한페이지당개수);
            Pageable pageable = PageRequest.of(page, size);

//            전체조회(dname="") + like 검색(dname="S")
            Page<CartDto> cartDtoPage
                    = cartService.selectByNameContaining(name, pageable);

//            리액트 전송 : 부서배열, 페이징 정보 [자료구조 : Map<키이름, 값>]
            Map<String, Object> response = new HashMap<>();
            response.put("cart", cartDtoPage.getContent());                // Cart 배열 전송
            response.put("currentPage", cartDtoPage.getNumber());          // 현재페이지번호 전송
            response.put("totalItems", cartDtoPage.getTotalElements());    // 총 건수(개수) 전송
            response.put("totalPages", cartDtoPage.getTotalPages());       // 총 페이지수 전송

//            신호 보내기
            if (cartDtoPage.isEmpty() == false) {
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

    // 상세조회
    @GetMapping("/cart/{cid}")
    public ResponseEntity<Object> selectById(@PathVariable int cid) {
//    상세조회 실행
        try {
            Optional<CartDto> optionalCartDto = cartService.selectById(cid);

            if (optionalCartDto.isPresent()) {
//                성공
                return new ResponseEntity<>(optionalCartDto.get(), HttpStatus.OK);
            } else {
//                데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        } catch (Exception e) {
//            서버 에러
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //    저장함수
    @PostMapping("/cart")
    public ResponseEntity<Object> create(@RequestBody Cart cart) {

        try {
            Cart cart2 = cartService.save(cart);

            return new ResponseEntity<>(cart2, HttpStatus.OK);
        } catch (Exception e) {
//            DB 에러가 났을경우 : INTERNAL_SERVER_ERROR 프론트엔드로 전송
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 삭제함수

    @DeleteMapping("/cart/deletion/{cid}")
    public ResponseEntity<Object> delete(@PathVariable int cid) {

//        프론트엔드 쪽으로 상태정보를 보내줌
        try {
            boolean bSuccess = cartService.removeById(cid);

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
