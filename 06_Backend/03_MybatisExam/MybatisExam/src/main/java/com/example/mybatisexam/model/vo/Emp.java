package com.example.mybatisexam.model.vo;

import com.example.mybatisexam.model.common.BaseTimeEntity;
import lombok.*;

/**
 * packageName : com.example.mybatisexam.model.vo
 * fileName : Emp
 * author : GGG
 * date : 2023-10-12
 * description : 사원 클래스(vo) == 테이블 같음
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-12         GGG          최초 생성
 */
@Setter
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class Emp extends BaseTimeEntity {   // 공통속성 상속받기


    private Integer eno;
    private String ename;
    private String job;
    private Integer manager;
    private String hiredate;
    private Integer salary;
    private Integer commission;
    private Integer dno;
}
