package com.example.simpledms.controller.shop;

import com.example.simpledms.model.entity.shop.Product;
import com.example.simpledms.model.entity.shop.Product;
import com.example.simpledms.model.entity.shop.Product;
import com.example.simpledms.service.shop.ProductService;
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
 * packageName : com.example.simpledms.controller.shop
 * fileName : ProductController
 * author : GGG
 * date : 2023-11-08
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-11-08         GGG          최초 생성
 */
@Slf4j
@RestController
@RequestMapping("/api/shop")
public class ProductController {
    
    @Autowired
    ProductService productService;

    // 전체조회 + like 검색
    @GetMapping("/product")
    public ResponseEntity<Object> findAllByPnameContains(
            @RequestParam(defaultValue = "") String pname,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "3") int size

    ) {
        try {
//            페이지 변수 저장 (page:현재페이지 번호, size: 한 페이지당 개수)
//            함수 매개변수 : Pageable(위의 값을 넣기)
//            사용법 : Pageable pageable = PageRequest.of(현재페이지번호, 한페이지당개수);
            Pageable pageable = PageRequest.of(page, size);

//            전체조회(dname="") + like 검색(dname="S")
            Page<Product> productPage
                    = productService.findAllByPnameContains(pname, pageable);

//            리액트 전송 : 부서배열, 페이징 정보 [자료구조 : Map<키이름, 값>]
            Map<String, Object> response = new HashMap<>();
            response.put("product", productPage.getContent());                // 부서배열 전송
            response.put("currentPage", productPage.getNumber());          // 현재페이지번호 전송
            response.put("totalItems", productPage.getTotalElements());    // 총 건수(개수) 전송
            response.put("totalPages", productPage.getTotalPages());       // 총 페이지수 전송

//            신호 보내기
            if (productPage.isEmpty() == false) {
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
    @GetMapping("/product/{pno}")
    public ResponseEntity<Object> findById(@PathVariable int pno) {
//    상세조회 실행
        try {
            Optional<Product> optionalProduct = productService.findById(pno);

            if (optionalProduct.isPresent()) {
//                성공
                return new ResponseEntity<>(optionalProduct.get(), HttpStatus.OK);
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
    @PostMapping("/product")
    public ResponseEntity<Object> create(@RequestBody Product product) {

        try {
            Product product2 = productService.save(product);

            return new ResponseEntity<>(product2, HttpStatus.OK);
        } catch (Exception e) {
//            DB 에러가 났을경우 : INTERNAL_SERVER_ERROR 프론트엔드로 전송
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //    수정함수
    @PutMapping("/product/{pno}")
    public ResponseEntity<Object> update(@RequestBody Product product, @PathVariable int pno) {

        try {
            Product product2 = productService.save(product);    // db 수정

            return new ResponseEntity<>(product2, HttpStatus.OK);
        } catch (Exception e) {
//            DB 에러가 났을경우 : INTERNAL_SERVER_ERROR 프론트엔드로 전송
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
