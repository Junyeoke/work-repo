package com.example.controllerexam.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * packageName : com.example.controllerexam.model
 * fileName : Dept
 * author : GGG
 * date : 2023-10-05
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-05         GGG          최초 생성
 */
@Setter
@Getter
@ToString
@AllArgsConstructor
public class Dept {
    int dno;            // 부서번호
    String dname;       // 부서명
    String loc;         // 부서위치
}
