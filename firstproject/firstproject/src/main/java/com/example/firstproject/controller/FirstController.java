package com.example.firstproject.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * packageName : com.example.firstproject.controller
 * fileName : FirstController
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
@Controller
public class FirstController {
    @GetMapping("/hello")
    public String niceToMeetYou(Model model){
        model.addAttribute("username","junhyuk");
        return "greetings";
    }

    @GetMapping("/bye")
    public String seeYouNext(Model model){
        model.addAttribute("nickname", "junyeoke");
        return "goodbye";
    }
}
