package com.example.back.model;

import lombok.Getter;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

/**
 * packageName : com.example.back.model
 * fileName : BaseTimeEntity
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
@Getter
@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
public abstract class BaseTimeEntity {
    private  String insertTime;

    private  String updateTime;

    // todo) 해당 테이블에 데이터가 만들어 질 때(insert 문) 실행되는 이벤트 함수
    @PrePersist
    void OnPerPersist(){
        this.insertTime = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));

    }
    // todo) 해당 테이블에 데이터가 수정될 때(update 문) 실행되는 이벤트 함수
    @PreUpdate
    void OnPreUpdate(){
        this.updateTime = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));
        this.insertTime = this.updateTime; // 생성일시 == 수정일시 동일하게 처리
    }
}
