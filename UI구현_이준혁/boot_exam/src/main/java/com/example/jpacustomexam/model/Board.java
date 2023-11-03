package com.example.jpacustomexam.model;

import com.example.jpacustomexam.model.common.BaseTimeEntity;
import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;

/**
 * packageName : com.example.jpacustomexam.model
 * fileName : Board
 * author : GGG
 * date : 2023-10-25
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-25         GGG          최초 생성
 */
@Entity
@Table(name="TB_BOARD")
@SequenceGenerator(
        name = "SQ_BOARD_GENERATOR"
        , sequenceName = "SQ_BOARD"
        , initialValue = 1
        , allocationSize = 1
)
@Getter
@Setter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
@DynamicInsert
@DynamicUpdate
public class Board extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE,
            generator = "SQ_BOARD_GENERATOR")
    private Integer bid;

    private String title;

    private String content;

    private String writer;

    private Integer viewCnt;

}
