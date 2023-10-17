package com.example.jpacustomexam.repository;

import com.example.jpacustomexam.model.Dept;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * packageName : com.example.jpacustomexam.repository
 * fileName : DeptRepository
 * author : GGG
 * date : 2023-10-17
 * description : 부서 레포지토리 (기본 CRUD 함수)
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-17         GGG          최초 생성
 */
@Repository
public interface DeptRepository extends JpaRepository<Dept, Integer> {
    // JPA : ORM(Object-Relational Mapping) 프레임워크
    // 개발자가 직접 SQL 작성 하는 기능(JPQL) : 1) 쿼리메소드 : 함수이름으로 sql문 만들기(카멜표기법 비슷)
    //                                      예) 컬럼명 사용: 첫글자는 대문자, 단어사이는 대문자
    //                                      2) @Query 쓰는 방법
    // 쿼리메소드 예) findAllByOrderByDnoDesc : findAll - 전체조회
    //                                        OrderBy - 정렬(Order by)
    //                                        Dno     - 대상컬럼명
    //                                        Desc    - 내림차순
    // todo: 1) 전체조회 + 정렬(내림차순)
    List<Dept> findAllByOrderByDnoDesc();

    // todo: 2) 전체조회 + 정렬(부서명 내림차순)
    List<Dept> findAllByOrderByDnameDesc();

    // todo: 3) 전체조회 + 정렬(부서번호 오름차순) : Asc 생략가능
    List<Dept> findAllByOrderByDno();

    // todo: 4) dname like 검색(DnameContaining)+ dname 내림차순 조회
    List<Dept> findAllByDnameContainingOrderByDnameDesc(String dname);

//    ----------------------------------------
//    @Query 예제
//    1) 오라클 쿼리
//    2) 객체 쿼리
//    ----------------------------------------
//    todo 1) dname like 검색
    @Query(value = "SELECT TD.* FROM TB_DEPT TD WHERE TD.DNAME LIKE %:dname",
            nativeQuery = true)
    List<Dept> selectByDname(@Param("dname") String dname);
}
