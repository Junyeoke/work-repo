package com.example.jpacustomexam.model;

import com.example.jpacustomexam.model.common.BaseTimeEntity;
import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;

/**
 * packageName : com.example.jpacustomexam.model
 * fileName : Comments
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
@Table(name="TB_COMMENT")
@SequenceGenerator(
        name = "SQ_COMMENT_GENERATOR"
        , sequenceName = "SQ_COMMENT"
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
public class Comments extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE,
            generator = "SQ_COMMENT_GENERATOR")
    private Integer cid;

    private String content;

    private String writer;

    private Integer bid;
}
