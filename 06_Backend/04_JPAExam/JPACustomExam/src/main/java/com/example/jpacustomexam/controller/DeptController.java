package com.example.jpacustomexam.controller;

import com.example.jpacustomexam.dto.DeptEmpDto;
import com.example.jpacustomexam.dto.DeptGroupDto;
import com.example.jpacustomexam.model.Dept;
import com.example.jpacustomexam.service.DeptService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * packageName : com.example.jpacustomexam.controller
 * fileName : DeptController
 * author : GGG
 * date : 2023-10-17
 * description : 부서 컨트롤러 (react 용)
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-17         GGG          최초 생성
 */
@Slf4j
@RestController
public class DeptController {

    @Autowired
    DeptService deptService; // DI

    /** 전체 조회 + 정렬(dno 내림차순) : 쿼리메소드 */
    @GetMapping("/dept/desc")
    public ResponseEntity<Object> getDeptAllDesc() {
        try {
//         전체 조회 + 정렬(dno 내림차순) 호출
            List<Dept> list = deptService.findAllByOrderByDnoDesc();

            if (list.isEmpty() == false) {
//                성공
                return new ResponseEntity<>(list, HttpStatus.OK);
            } else {
//                데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

        } catch (Exception e){
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /** 전체 조회 + 정렬(dname 내림차순) : 쿼리메소드  */
    @GetMapping("/dept/dname/desc")
    public ResponseEntity<Object> findAllByOrderByDnameDesc() {
        try {
//         전체 조회 + 정렬(dno 내림차순) 호출
            List<Dept> list = deptService.findAllByOrderByDnameDesc();

            if (list.isEmpty() == false) {
//                성공
                return new ResponseEntity<>(list, HttpStatus.OK);
            } else {
//                데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

        } catch (Exception e){
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    /** 전체 조회 + 정렬(dno 오름차순) : 쿼리메소드  */
    @GetMapping("/dept/dno/asc")
    public ResponseEntity<Object> findAllByOrderByDno() {
        try {
//         전체 조회 + 정렬(dno 오름차순) 호출
            List<Dept> list = deptService.findAllByOrderByDno();

            if (list.isEmpty() == false) {
//                성공
                return new ResponseEntity<>(list, HttpStatus.OK);
            } else {
//                데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

        } catch (Exception e){
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    /** 전체조회 + dname like(Containing) 검색 +정렬(dname 내림차순) : 쿼리메소드 */
    @GetMapping("/dept/dname/containing/desc/{dname}")
    public ResponseEntity<Object> findAllByOrderByDno(
            @PathVariable String dname
    ) {
        try {
//         전체 조회 + 정렬(dno 오름차순) 호출
            List<Dept> list
                    = deptService
                    .findAllByDnameContainingOrderByDnameDesc(dname);

            if (list.isEmpty() == false) {
//                성공
                return new ResponseEntity<>(list, HttpStatus.OK);
            } else {
//                데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

        } catch (Exception e){
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    /** 전체조회 + dname like 검색 : @Query */
    @GetMapping("/dept/dname/{dname}")
    public ResponseEntity<Object> selectByDname(
            @PathVariable String dname
    ) {
        try {
//         전체 조회 + 정렬(dno 오름차순) 호출
            List<Dept> list
                    = deptService.selectByDname(dname);

            if (list.isEmpty() == false) {
//                성공
                return new ResponseEntity<>(list, HttpStatus.OK);
            } else {
//                데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

        } catch (Exception e){
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /** 전체조회 + dname like 검색 : @Query */
    @GetMapping("/dept/dname/{dname}/loc/{loc}")
    public ResponseEntity<Object> selectByDnameAndLoc(
            @PathVariable String dname,
            @PathVariable String loc
    ) {
        try {
//         전체 조회 + 정렬(dno 오름차순) 호출
            List<Dept> list
                    = deptService.selectByDnameAndLoc(dname, loc);

            if (list.isEmpty() == false) {
//                성공
                return new ResponseEntity<>(list, HttpStatus.OK);
            } else {
//                데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

        } catch (Exception e){
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /** 전체조회 그룹함수 검색 : @Query */
    @GetMapping("/dept/groupdto")
    public ResponseEntity<Object> selectByGroupFunc(

    ) {
        try {

            List<DeptGroupDto> list
                    = deptService.selectByGroupFunc();

            if (list.isEmpty() == false) {

                return new ResponseEntity<>(list, HttpStatus.OK);
            } else {

                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

        } catch (Exception e){
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /** 5) 전체조회 + 일반함수(dto) : @Query */
    @GetMapping("/dept/basicfunc")
    public ResponseEntity<Object> selectByBasicFunc() {
        try {
            List<DeptGroupDto> list
                    = deptService.selectByBasicFunc();

            if (list.isEmpty() == false) {
//                성공
                return new ResponseEntity<>(list, HttpStatus.OK);
            } else {
//                데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

        } catch (Exception e){
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    /** 6) 전체조회 + case when(dto) : @Query */
    @GetMapping("/dept/case")
    public ResponseEntity<Object> selectByCase() {
        try {
            List<DeptGroupDto> list
                    = deptService.selectByCase();

            if (list.isEmpty() == false) {
//                성공
                return new ResponseEntity<>(list, HttpStatus.OK);
            } else {
//                데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

        } catch (Exception e){
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //--------------------------------------------
    // 페이징 예제
    //--------------------------------------------
    // 1)
    @GetMapping("/dept/dname/{dname}/paging")
    public ResponseEntity<Object> getDeptDnamePage(@PathVariable String dname, Pageable pageable) {
        try {
            Page<Dept> page
                    = deptService.findAllByDnameContaining(dname, pageable);
//          todo : Map 자료구조 정보 저장 : 1) 부서 객체, 2) 페이징 정보 (3개)
            Map<String, Object> response = new HashMap<>();
            response.put("dept", page.getContent());                        // 부서 객체
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

    // 2) findAll() + 페이징
    // page=현재페이지번호(0~n), size=전체페이지수
    @GetMapping("/dept/all/paging")
    public ResponseEntity<Object> getDeptAllPage(Pageable pageable) {
        try {
            Page<Dept> page
                    = deptService.findAllPage(pageable);
//          todo : Map 자료구조 정보 저장 : 1) 부서 객체, 2) 페이징 정보 (3개)
            Map<String, Object> response = new HashMap<>();
            response.put("dept", page.getContent());                        // 부서 객체
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

    // --------------------------------------------
    // @Query : 페이징 처리
    // --------------------------------------------
    // 2)
    @GetMapping("/dept/dname/{dname}/page")
    public ResponseEntity<Object> selectByDnamePage(String dname, Pageable pageable) {
        try {
            Page<Dept> page
                    = deptService.selectByDnamePage(dname, pageable);
//          todo : Map 자료구조 정보 저장 : 1) 부서 객체, 2) 페이징 정보 (3개)
            Map<String, Object> response = new HashMap<>();
            response.put("dept", page.getContent());                        // 부서 객체
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

    // 3) @Query 페이징 + 조인(부서 + 사원) : DeptEmpDto
    @GetMapping("/dept/native/join/page")
    public ResponseEntity<Object> selectNativeJoinPage(Pageable pageable) {
        try {
            Page<DeptEmpDto> page
                    = deptService.selectNativeJoinPage(pageable);
//          todo : Map 자료구조 정보 저장 : 1) 부서 객체, 2) 페이징 정보 (3개)
            Map<String, Object> response = new HashMap<>();
            response.put("dept", page.getContent());                        // 부서 객체
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
}