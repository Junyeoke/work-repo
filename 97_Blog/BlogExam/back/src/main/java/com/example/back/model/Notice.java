package com.example.back.model;

import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.springframework.web.bind.annotation.GetMapping;

import javax.persistence.*;

/**
 * packageName : com.example.back.model
 * fileName : Notice
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
@Entity
@Table(name = "TB_NOTICE")
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@DynamicUpdate
@DynamicInsert
public class Notice extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(columnDefinition = "NUMBER")
    private Integer no;

    @Column(columnDefinition = "VARCHAR2(255)")
    private String title;

    @Column(columnDefinition = "VARCHAR2(255)")
    private String content;
}
