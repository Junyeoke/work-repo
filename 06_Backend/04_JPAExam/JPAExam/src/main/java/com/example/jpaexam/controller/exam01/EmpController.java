package com.example.jpaexam.controller.exam01;

import com.example.jpaexam.model.Dept;
import com.example.jpaexam.model.Emp;
import com.example.jpaexam.service.EmpService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

/**
 * packageName : com.example.jpaexam.controller.exam01
 * fileName : EmpController
 * author : GGG
 * date : 2023-10-16
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-16         GGG          최초 생성
 */
@Slf4j
@RestController
@RequestMapping("/exam01")
public class EmpController {

    @Autowired
    EmpService empService;

    /** 전체조회 함수 */
    @GetMapping("/emp")
    public ResponseEntity<Object> getEmpAll(){
        try {
            // todo) 전체조회 함수 호출
            List<Emp> list = empService.findAll();
            if (list.isEmpty() == false) {
                // todo) 성공
                return new ResponseEntity<>(list, HttpStatus.OK);
            } else {
                // todo) 데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /** 상세 조회 */
    @GetMapping("/emp/{eno}")
    public ResponseEntity<Object> getEmpId(@PathVariable int eno){
        try {
            // todo) 전체조회 함수 호출
            Optional<Emp> optionalEmp = empService.findById(eno);
            if (optionalEmp.isEmpty() == false) {
                // todo) 성공
                return new ResponseEntity<>(optionalEmp.get(), HttpStatus.OK);
            } else {
                // todo) 데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /** 저장함수 */
    @PostMapping("/emp")
    public ResponseEntity<Object> createEmp(@RequestBody Emp emp){
        try {
            // todo : jap 서비스 저장함수 호출 : dept2(DB 저장된 객체)
            Emp emp2 = empService.save(emp);
            return new ResponseEntity<>(emp2, HttpStatus.OK);
        } catch (Exception e) {
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /** 수정 함수 */
    @PutMapping("/emp/edit/{eno}")
    public ResponseEntity<Object> updateEmp(@RequestBody Emp emp, @PathVariable int eno){
        try {
            // todo : jap 서비스 수정함수 호출 : emp2(DB 저장된 객체)
            Emp emp2 = empService.save(emp);
            return new ResponseEntity<>(emp2, HttpStatus.OK);
        } catch (Exception e) {
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /** 삭제함수 */
    @DeleteMapping("/emp/delete/{eno}")
    public ResponseEntity<Object> deleteEmp(
            @PathVariable int eno
    ){
        try {
            // todo) 삭제 함수 호출
            boolean bSuccess = empService.removeById(eno);
            if (bSuccess == true) {
                // todo) 삭제성공
                return new ResponseEntity<>(HttpStatus.OK);
            } else {
                // todo) 0건 삭제(삭제할 대상이 없을경우)
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
