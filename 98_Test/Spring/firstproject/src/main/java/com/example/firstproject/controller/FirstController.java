package com.example.firstproject.controller;

import org.springframework.stereotype.Controller;

/**
 * packageName : com.example.firstproject.controller
 * fileName : FirstController
 * author : GGG
 * date : 2023-10-05
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-05         GGG          최초 생성
 */
@Controller
public class FirstController {

    public String niceToMeetYou() {
        return "greetings";
    }
}
