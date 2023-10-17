package com.example.jpacustomexam.repository;

import com.example.jpacustomexam.model.Emp;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * packageName : com.example.jpacustomexam.repository
 * fileName : EmpRepository
 * author : GGG
 * date : 2023-10-17
 * description : 사원 레포지토리
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-17         GGG          최초 생성
 */
@Repository
public interface EmpRepository extends JpaRepository<Emp, Integer> {

    // todo : 전체조회 + 정렬(내림차순)
    List<Emp> findAllByOrderByEnoDesc();

    // todo : 전체조회 + 정렬(사원명 오름차순)
    List<Emp> findAllByOrderByEname();

    // todo: ename like 검색
    List<Emp> findAllByEnameContaining(String ename);

    // todo) 응용연습
    //    todo: 응용 연습문제 : 구글링 (JPA 쿼리메소드)
    //    todo: 연습 4) EMP 테이블에서 Job 이 manager 이고
    //              매개변수로 부서번호(dno)를 받는 함수를 작성하세요.
    List<Emp> findAllByJobAndDno(String job, int dno);

    //    todo: 연습 5) Emp 테이블에서 salary 가 1000 ~ 1500 사이의 값을 같는
    //     사원을 조회하려고 합니다.  함수를 작성해 주세요
    List<Emp> findAllBySalaryBetween(int first, int last);

    //    todo: 6) Emp 테이블에서 Job 이 manager 인 사원의 정보를
    //         출력하는 함수를 작성하세요.
    //       단, Job 의 매개변수는 소문자 또는 대문자가 들어올 수 있음
    //         where job = UPPER('manager')
    //     힌트 : 컬럼명IgnoreCase
    List<Emp> findAllByJobIgnoreCase(String job);

    //    todo: 7) commission 을 받는 사원을 모두 출력하는 함수를 작성하세요.
    //     힌트 : where commission is not null
    List<Emp> findAllByCommissionIsNotNull();

    //    todo: 8) salary desc, ename asc 로 정렬하는 함수를 작성하세요.
    //    힌트 : 컬럼1Desc컬럼2Asc
    List<Emp> findAllByOrderBySalaryDescEnameAsc();

    //    todo: 9) salary < 1000 또는 salary > 1500 사이에
    //         해당하는 사원을 출력하는 함수를 작성하세요.
    //    힌트 : < - LessThan , > - GreaterThan
    List<Emp> findAllBySalaryLessThanOrSalaryGreaterThan(int first, int last);

    //    todo: 10) commission 이 300 이거나 500
    //         또는 1500 인 사원을 출력하는 함수를 작성하세요.
    //    힌트: Or 조건 사용
    List<Emp> findAllByCommissionOrCommissionOrCommission(int commission1, int commission2, int commission3);

    //    ----------------------------------------
    //    @Query 예제
    //    1) 오라클 쿼리
    //    2) 객체 쿼리
    //    ----------------------------------------
    //    todo 1) ename like 검색
    @Query(value = "SELECT TD.* FROM TB_EMP TD WHERE TD.ENAME LIKE %:ename", nativeQuery = true)
    List<Emp> selectByEname(@Param("ename") String ename);



}
