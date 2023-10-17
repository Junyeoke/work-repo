package com.example.back.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

/**
 * packageName : com.example.back.controller
 * fileName : HelloController
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
@RestController
public class HelloController {
    @GetMapping("/hello")
    public String hello(){
        return "안녕하세요. 현재 서버시간은 " + new Date() + "입니다. \n " + "블로그 테스트 중입니다." ;
    }
}
