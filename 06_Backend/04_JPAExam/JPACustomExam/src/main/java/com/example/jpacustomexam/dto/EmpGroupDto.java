package com.example.jpacustomexam.dto;

/**
 * packageName : com.example.jpacustomexam.dto
 * fileName : EmpGroupDto
 * author : GGG
 * date : 2023-10-18
 * description : DTO 인터페이스(Emp 용)
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-18         GGG          최초 생성
 */
public interface EmpGroupDto {
//  속성 (상수 사용 못함)
    Integer getDno();
    String getJob();
    Integer getSalary();
    Integer getAvgVar();

    Integer getCountEno();
    Integer getSumSalary();

    String getMaxHiredate();
    String getMinHiredate();


}
