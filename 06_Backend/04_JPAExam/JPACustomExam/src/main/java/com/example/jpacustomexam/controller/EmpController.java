package com.example.jpacustomexam.controller;

import com.example.jpacustomexam.dto.EmpGroupDto;
import com.example.jpacustomexam.model.Dept;
import com.example.jpacustomexam.model.Emp;
import com.example.jpacustomexam.service.EmpService;
import lombok.Getter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * packageName : com.example.jpacustomexam.controller
 * fileName : EmpController
 * author : GGG
 * date : 2023-10-17
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-17         GGG          최초 생성
 */
@Slf4j
@RestController
public class EmpController {

    @Autowired
    EmpService empService;

    /** 전체조회 + 정렬(eno 내림차순) */
    @GetMapping("/emp/desc")
    public ResponseEntity<Object> getEmpAllDesc(){
        try {
            List<Emp> list = empService.findAllByOrderByDnoDesc();
            if(list.isEmpty() == false){
                return new ResponseEntity<>(list, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

        } catch (Exception e) {
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /** 전체조회 + 정렬(ename 오름차순) */
    @GetMapping("/emp/ename/asc")
    public ResponseEntity<Object> findAllByOrderByEname(){
        try {
            List<Emp> list = empService.findAllByOrderByEname();
            if(list.isEmpty() == false){
                return new ResponseEntity<>(list, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

        } catch (Exception e) {
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /** 전체조회 + ename like 검색 */
    @GetMapping("/emp/ename/containing/{ename}")
    public ResponseEntity<Object> findAllByEnameContaining(@PathVariable String ename){
        try {
            List<Emp> list
                    = empService.findAllByEnameContaining(ename);
            if(list.isEmpty() == false){
                return new ResponseEntity<>(list, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

        } catch (Exception e) {
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /** 연습 4) : 쿼리메소드 */
    @GetMapping("/emp/dno/{dno}")
    public ResponseEntity<Object> findAllByEnameContaining(
            @PathVariable int dno
    ) {
        try {
//         전체 조회 + 정렬(dno 내림차순) 호출
            List<Emp> list
                    = empService.findAllByJobAndDno("MANAGER", dno);

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

    /** 연습5 */

    @GetMapping("/emp/salary/{first}/{last}")
    public ResponseEntity<Object> findAllBySalaryBetween(@PathVariable int first, @PathVariable int last){
        try {
            List<Emp> list
                    = empService.findAllBySalaryBetween(first, last);
            if(list.isEmpty() == false){
                return new ResponseEntity<>(list, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

        } catch (Exception e) {
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /** 연습 6) : 쿼리메소드 */
    @GetMapping("/emp/ignore/job/{job}")
    public ResponseEntity<Object> findAllByJobIgnoreCase(
            @PathVariable String job
    ) {
        try {
//         전체 조회 + 정렬(dno 내림차순) 호출
            List<Emp> list
                    = empService.findAllByJobIgnoreCase(job);

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

    /** 연습 7) : 쿼리메소드 */
    @GetMapping("/emp/commission")
    public ResponseEntity<Object> findAllByCommissionIsNotNull(
             ) {
        try {
//         전체 조회 + 정렬(dno 내림차순) 호출
            List<Emp> list
                    = empService.findAllByCommissionIsNotNull();

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

    /** 연습 8) : 쿼리메소드 */
    @GetMapping("/emp/salary/desc/ename/asc")
    public ResponseEntity<Object> findAllByOrderBySalaryDescEnameAsc(
    ) {
        try {
//         전체 조회 + 정렬(dno 내림차순) 호출
            List<Emp> list
                    = empService.findAllByOrderBySalaryDescEnameAsc();

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

    /** 연습 9) : 쿼리메소드 */
    @GetMapping("/emp/or/salary/{first}/{last}")
    public ResponseEntity<Object> findAllBySalaryLessThanOrSalaryGreaterThan(
            @PathVariable int first,
            @PathVariable int last
    ) {
        try {
//         전체 조회 + 정렬(dno 내림차순) 호출
            List<Emp> list
                    = empService
                    .findAllBySalaryLessThanOrSalaryGreaterThan(first, last);

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

    /** 연습 10) : 쿼리메소드 */
    @GetMapping("/emp/commission/{commission1}/{commission2}/{commission3}")
    public ResponseEntity<Object> findAllByCommissionOrCommissionOrCommission(@PathVariable int commission1, @PathVariable int commission2, @PathVariable int commission3
    ) {
        try {

            List<Emp> list
                    = empService.findAllByCommissionOrCommissionOrCommission(commission1, commission2, commission3);

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

    /** 전체조회 + ename like 검색 : @Query */
    @GetMapping("/emp/ename/{ename}")
    public ResponseEntity<Object> selectByEname(
            @PathVariable String ename
    ) {
        try {
//         전체 조회 + 정렬(dno 오름차순) 호출
            List<Emp> list
                    = empService.selectByEname(ename);

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

    // 연습2
    @GetMapping("/emp/salary/ename/")
    public ResponseEntity<Object> selectBySalaryAndEname(
    ) {
        try {
//         전체 조회 + 정렬(dno 오름차순) 호출
            List<Emp> list
                    = empService.selectBySalaryAndEname();

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

    // 연습3

    @GetMapping("/emp/commission/salary/{salary}")
    public ResponseEntity<Object> selectByCommissionAndSalary(
            @PathVariable int salary
    ) {
        try {
//         전체 조회 + 정렬(dno 오름차순) 호출
            List<Emp> list
                    = empService.selectByCommissionAndSalary(salary);

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

    // 연습4
    @GetMapping("/emp/hiredate/{first}/{last}")
    public ResponseEntity<Object> selectByHiredate(
            @PathVariable String first,
            @PathVariable String last
    ) {
        try {
//         전체 조회 + 정렬(dno 오름차순) 호출
            List<Emp> list
                    = empService.selectByHiredate(first, last);

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

    // 연습5
    @GetMapping("/emp/mounthsumsalary")
    public ResponseEntity<Object> selectGroupDnoJob(
    ) {
        try {

            List<EmpGroupDto> list
                    = empService.selectGroupDnoJob();

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

    // 연습6
    @GetMapping("/emp/avgsalary")
    public ResponseEntity<Object> selectAvgSalary(
    ) {
        try {

            List<EmpGroupDto> list
                    = empService.selectAvgSalary();

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

    // 연습7
    @GetMapping("/emp/sum/max")
    public ResponseEntity<Object> selectGroupSumMax(
    ) {
        try {

            List<EmpGroupDto> list
                    = empService.selectGroupSumMax();

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

    // 연습7
    @GetMapping("/emp/hiredate")
    public ResponseEntity<Object> selectGroupHiredate(
    ) {
        try {

            List<EmpGroupDto> list
                    = empService.selectGroupHiredate();

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
    @GetMapping("/emp/ename/{ename}/paging")
    public ResponseEntity<Object> getEmpEnamePage(@PathVariable String ename, Pageable pageable) {
        try {
            Page<Emp> page
                    = empService.findAllByEnameContaining(ename, pageable);
//          todo : Map 자료구조 정보 저장 : 1) 사원 객체, 2) 페이징 정보 (3개)
            Map<String, Object> response = new HashMap<>();
            response.put("emp", page.getContent());                         // 사원 객체
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
    @GetMapping("/emp/all/paging")
    public ResponseEntity<Object> getEmpAllPage(Pageable pageable) {
        try {
            Page<Emp> page
                    = empService.findAllPage(pageable);
//          todo : Map 자료구조 정보 저장 : 1) 부서 객체, 2) 페이징 정보 (3개)
            Map<String, Object> response = new HashMap<>();
            response.put("emp", page.getContent());                        // 부서 객체
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
    // 1)
    @GetMapping("/emp/ename/{ename}/page")
    public ResponseEntity<Object> selectByEnamePage(String ename, Pageable pageable) {
        try {
            Page<Emp> page
                    = empService.selectByEnamePage(ename, pageable);
//          todo : Map 자료구조 정보 저장 : 1) 부서 객체, 2) 페이징 정보 (3개)
            Map<String, Object> response = new HashMap<>();
            response.put("emp", page.getContent());                        // 부서 객체
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
