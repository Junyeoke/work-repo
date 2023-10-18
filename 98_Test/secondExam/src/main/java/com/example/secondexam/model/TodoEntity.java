package com.example.secondexam.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * packageName : com.example.secondexam.model
 * fileName : TodoEntity
 * author : GGG
 * date : 2023-10-18
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-18         GGG          최초 생성
 */
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "Todo")
public class TodoEntity {
    @Id
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name = "system-uuid", strategy = "uuid")
    private String id;          // 오브젝트의 아이디
    private String userId;      // 오브젝트를 생성한 유저 아이디
    private String title;       // todo 타이틀
    private boolean done;       // true -> todo를 완료한 경우
}
