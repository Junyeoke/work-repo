package com.example.firstproject.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * packageName : com.example.firstproject.entity
 * fileName : Article
 * author : GGG
 * date : 2023-10-10
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-10         GGG          최초 생성
 */
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Getter
@Entity     // 엔티티선언
public class Article {
    @Id     // 엔티티의 대푯값 지정
    @GeneratedValue // 자동 생성 기능 추가(숫자가 자동으로 매겨짐)
    private Long id;
    @Column     // title 필드 선언, DB 테이블의 title 열과 연결됨
    private String title;
    @Column     // content 필드 선언, DB 테이블의 content 열과 연결됨
    private String content;

}
