package com.example.jpacustomexam.dto;

import javax.persistence.criteria.CriteriaBuilder;

/**
 * packageName : com.example.jpacustomexam.dto
 * fileName : DeptGroupDto
 * author : GGG
 * date : 2023-10-18
 * description : DTO 인터페이스 (부서 그룹함수용)
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-18         GGG          최초 생성
 */

public interface DeptGroupDto {
    // 속성 -> 상수 x
    // getter 함수
    // sumVar avgVar maxVar minVar
    Integer getSumVar();
    Integer getAvgVar();
    Integer getMaxVar();
    Integer getMinVar();

    // 예제5번 upperDname lowerDname trimOracle charSysdate
    String getUpperDname();
    String getLowerDname();
    String getTrimOracle();
    String getCharSysdate();

    // 예제 6번 incentive

    Integer getDno();
    String getIncentive();



}
