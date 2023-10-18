package com.example.jpacustomexam.repository;

import com.example.jpacustomexam.dto.EmpGroupDto;
import com.example.jpacustomexam.model.Dept;
import com.example.jpacustomexam.model.Emp;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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
    @Query(value = "SELECT TD.* FROM TB_EMP TD WHERE TD.ENAME LIKE '%' || :ename || '%'", nativeQuery = true)
    List<Emp> selectByEname(@Param("ename") String ename);

    //  todo: 2) salary 내림차순, ename 오름차순으로 정렬
    //    nativeQuery = true 사용
    @Query(value = "SELECT E.* FROM TB_EMP E " +
            "ORDER BY E.SALARY DESC, E.ENAME ASC", nativeQuery = true)
    List<Emp> selectBySalaryAndEname();

    //  todo: 3) commission 이 null 이고
    //         salary 매개변수로 전달되는 값보다 같거나 큰 사원 정보를 모두 출력하세요.
    //    nativeQuery = true 사용

    @Query(value = "SELECT E.* FROM TB_EMP E " +
            "WHERE E.COMMISSION IS NULL " +
            "AND E.SALARY >= :salary", nativeQuery = true)
    List<Emp> selectByCommissionAndSalary(@Param("salary") int salary);


    //  todo: 4) 1982년도에 입사한 사원 출력하기, 입사일 내림차순하세요
    //    nativeQuery = true 사용

    @Query(value = "SELECT E.* FROM TB_EMP E " +
            "WHERE E.HIREDATE BETWEEN :first AND :last " +
            "ORDER BY HIREDATE DESC", nativeQuery = true)
    List<Emp> selectByHiredate(@Param("first") String first, @Param("last") String last);

    //    todo: 5) dno, job 별 월급여를 출력하는 함수를 작성하세요.(tb_emp)
//      nativeQuery = true 사용,
//      dto : EmpGroupDto
    @Query(value = "SELECT dno, job, SUM(SALARY) AS salary " +
            "FROM TB_EMP " +
            "GROUP BY DNO, JOB "
            , nativeQuery = true)
    List<EmpGroupDto> selectGroupDnoJob();

//    todo: 6) dno 별 월급여를 출력하는 함수를 작성하세요.
//       단, 소수점 절삭(버림, trunc) 하세요
//       nativeQuery = true 사용,
//       dto : EmpGroupDto

    @Query(value = "SELECT DNO, TRUNC(AVG(SALARY)) AS avgVar " +
            "FROM TB_EMP " +
            "GROUP BY DNO", nativeQuery = true)
    List<EmpGroupDto> selectAvgSalary();

    //    todo: 7) 사원의 수와 최고월급을 출력하세요.
    //       nativeQuery = true 사용,
    //       dto : EmpGroupDto

    @Query(value = "SELECT COUNT(ENO) AS countEno, MAX(SALARY) AS sumSalary " +
            "FROM TB_EMP", nativeQuery = true)
    List<EmpGroupDto> selectGroupSumMax();


    //    todo: 8) 사원 테이블에서 가장 오래된 입사일과 가장 빠른 입사일을 출력하세요.
    //       nativeQuery = true 사용,
    //       dto : EmpGroupDto
    @Query(value = "SELECT MAX(HIREDATE) AS maxHiredate, MIN(HIREDATE) AS minHiredate  " +
            "FROM TB_EMP", nativeQuery = true)
    List<EmpGroupDto> selectGroupHiredate();

    // --------------------------------------------
    // JPA 페이징 처리 : 요청 페이징 객체 - Pageable(매개변수)
    //                 결과 페이징 객체 - Page     (리턴값)
    // --------------------------------------------
    // 1) 쿼리 메소드 : 함수명으로 sql 문 실행하기
    // 1-1) ename like 검색
    Page<Emp> findAllByEnameContaining(String ename, Pageable pageable);

    // 1-2) findAll() : 페이징 기능을 추가하세요

    //-------------------------------------------
    //    @Query 페이징
    //   연습2) ename like 검색 함수를 만드세요 : @Query
    //-------------------------------------------
    @Query(value = "SELECT D.* FROM TB_EMP D " +
            "WHERE D.ENAME LIKE '%'|| :ename || '%'",
            countQuery = "SELECT COUNT(*) FROM TB_EMP D " +
                    "WHERE D.ENAME LIKE '%'|| :ename || '%'",
            nativeQuery = true)
    Page<Emp> selectByEnamePage(@Param("ename") String ename, Pageable pageable);



}
