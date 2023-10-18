package com.example.firstproject.dto;

import com.example.firstproject.entity.Member;
import lombok.AllArgsConstructor;
import lombok.ToString;

/**
 * packageName : com.example.firstproject.dto
 * fileName : MemberForm
 * author : 01045
 * date : 2023-10-10
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-10         01045          최초 생성
 */
@AllArgsConstructor
@ToString
public class MemberForm {
    private String email;
    private String password;

    public Member toEntity(){
        return new Member(null, email, password);
    }

}
