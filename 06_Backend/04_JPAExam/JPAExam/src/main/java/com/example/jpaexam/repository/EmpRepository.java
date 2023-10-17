package com.example.jpaexam.repository;

import com.example.jpaexam.model.Emp;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * packageName : com.example.jpaexam.repository
 * fileName : EmpRepository
 * author : GGG
 * date : 2023-10-16
 * description :
 * 요약 :
 *      사용법 : public interface EmpRepository extends JpaRepository<모델명, 기본키자료형>
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-16         GGG          최초 생성
 */
@Repository
public interface EmpRepository extends JpaRepository<Emp, Integer> {
}
