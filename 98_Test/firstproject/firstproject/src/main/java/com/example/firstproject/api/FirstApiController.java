package com.example.firstproject.api;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * packageName : com.example.firstproject.api
 * fileName : FirstApiController
 * author : GGG
 * date : 2023-10-11
 * description : REST 컨트롤러 맛보기
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-11         GGG          최초 생성
 */
@RestController // REST API용 컨트롤러 어노테이션
public class FirstApiController {
    @GetMapping("/api/hello")       // url 요청접수
    public String hello(){              // hello world 문자열 반환
        return "hello world!";
    }
}
