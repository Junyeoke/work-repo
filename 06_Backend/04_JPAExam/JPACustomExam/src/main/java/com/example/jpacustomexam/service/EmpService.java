package com.example.jpacustomexam.service;

import com.example.jpacustomexam.dto.EmpGroupDto;
import com.example.jpacustomexam.model.Dept;
import com.example.jpacustomexam.model.Emp;
import com.example.jpacustomexam.repository.EmpRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * packageName : com.example.jpacustomexam.service
 * fileName : EmpService
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
@Service
public class EmpService {

    @Autowired
    EmpRepository empRepository;

    /** 전체조회 */
    public List<Emp> findAllByOrderByDnoDesc(){
        List<Emp> list = empRepository.findAllByOrderByEnoDesc();
        return list;
    }

    /** 전체조회 + 정렬(ename 오름차순) */
    public List<Emp> findAllByOrderByEname(){
        List<Emp> list = empRepository.findAllByOrderByEname();
        return list;
    }

    /** 전체조회 + ename like 검색 */
    public List<Emp> findAllByEnameContaining(String ename){
        List<Emp> list = empRepository.findAllByEnameContaining(ename);
        return list;
    }

    //    todo: 연습 4) EMP 테이블에서 Job 이 manager 이고
    //              매개변수로 부서번호(dno)를 받는 함수를 작성하세요.
    public List<Emp> findAllByJobAndDno(String job, int dno){
        List<Emp> list = empRepository.findAllByJobAndDno(job, dno);
        return list;
    }

    //    todo: 연습 5) Emp 테이블에서 salary 가 1000 ~ 1500 사이의 값을 같는
    //     사원을 조회하려고 합니다.  함수를 작성해 주세요
    public List<Emp> findAllBySalaryBetween(int first, int last){
        List<Emp> list = empRepository.findAllBySalaryBetween(first, last);
        return list;
    }

    //    todo: 연습 6)
    public List<Emp> findAllByJobIgnoreCase(String job) {
        List<Emp> list = empRepository.findAllByJobIgnoreCase(job);

        return list;
    }

    //    todo: 7) commission 을 받는 사원을 모두 출력하는 함수를 작성하세요.
    //     힌트 : where commission is not null
    public List<Emp> findAllByCommissionIsNotNull(){
        List<Emp> list = empRepository.findAllByCommissionIsNotNull();
        return list;
    }

    //    todo: 8) salary desc, ename asc 로 정렬하는 함수를 작성하세요.
    public List<Emp> findAllByOrderBySalaryDescEnameAsc(){
        List<Emp> list = empRepository.findAllByOrderBySalaryDescEnameAsc();
        return list;
    }
    //    todo: 9) salary < 1000 또는 salary > 1500 사이에
    public List<Emp> findAllBySalaryLessThanOrSalaryGreaterThan(int first, int last){
        List<Emp> list
                = empRepository.findAllBySalaryLessThanOrSalaryGreaterThan(first, last);
        return list;
    }

    //    todo: 10) commission 이 300 이거나 500
    //         또는 1500 인 사원을 출력하는 함수를 작성하세요.
    public List<Emp> findAllByCommissionOrCommissionOrCommission(int commission1, int commission2, int commission3){
        List<Emp> list = empRepository.findAllByCommissionOrCommissionOrCommission(commission1, commission2, commission3);
        return list;
    }

    //    ----------------------------------------
    //    @Query 예제
    //    1) 오라클 쿼리
    //    2) 객체 쿼리
    //    ----------------------------------------
    //    todo 1) ename like 검색

    /** 전체조회 + ename like 검색 : @Query */
    public List<Emp> selectByEname(String ename){
        List<Emp> list = empRepository.selectByEname(ename);
        return list;
    }
    // 연습 2
    public List<Emp> selectBySalaryAndEname(){
        List<Emp> list = empRepository.selectBySalaryAndEname();
        return list;
    }

    // 연습3
    public List<Emp> selectByCommissionAndSalary(int salary){
        List<Emp> list = empRepository.selectByCommissionAndSalary(salary);
        return list;
    }

    // 연습4
    public List<Emp> selectByHiredate(String first, String last){
        List<Emp> list = empRepository.selectByHiredate(first, last);
        return list;
    }

    // 연습5
    public List<EmpGroupDto> selectGroupDnoJob(){
        List<EmpGroupDto> list = empRepository.selectGroupDnoJob();
        return list;
    }

    // 연습6
    public List<EmpGroupDto> selectAvgSalary(){
        List<EmpGroupDto> list = empRepository.selectAvgSalary();
        return list;
    }

    /** 연습 7) : @Query(dto) */
    public List<EmpGroupDto> selectGroupSumMax() {
        List<EmpGroupDto> list
                = empRepository.selectGroupSumMax();

        return list;
    }


    // 연습8
    public List<EmpGroupDto> selectGroupHiredate(){
        List<EmpGroupDto> list = empRepository.selectGroupHiredate();
        return list;
    }

    //--------------------------------------------
    // 페이징 예제
    //--------------------------------------------
    // 1) ename like 검색
    public Page<Emp> findAllByEnameContaining(String ename, Pageable pageable){
        Page<Emp> page = empRepository.findAllByEnameContaining(ename, pageable);
        return page;
    }

    // 2) 기본 제공되는 전체조회 함수 : 페이징처리 기능 추가
    public Page<Emp> findAllPage(Pageable pageable){
        Page<Emp> page = empRepository.findAll(pageable);
        return page;
    }

    // --------------------------------------------
    // @Query : 페이징 처리
    // --------------------------------------------

    public Page<Emp> selectByEnamePage(String ename, Pageable pageable) {
        Page<Emp> page
                = empRepository.selectByEnamePage(ename, pageable);

        return page;
    }
}
