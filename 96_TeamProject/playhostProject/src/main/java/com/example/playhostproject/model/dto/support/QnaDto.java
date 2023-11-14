package com.example.playhostproject.model.dto.support;

/**
 * packageName : com.example.playhostproject.model.dto.support
 * fileName : QnaDto
 * author : GGG
 * date : 2023-11-14
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-11-14         GGG          최초 생성
 */
public interface QnaDto {

    public Integer getQid();
    public Integer getUserId();
    public String getQuestioner();
    public String getQuestion();
    public String getAnswerer();
    public String getAnswer();

}
