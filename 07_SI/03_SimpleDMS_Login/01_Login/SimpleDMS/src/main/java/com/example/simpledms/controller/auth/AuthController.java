package com.example.simpledms.controller.auth;

import com.example.simpledms.security.jwt.JwtUtils;
import com.example.simpledms.service.auth.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * packageName : com.example.simpledms.controller.auth
 * fileName : AuthController
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
@Slf4j
@RestController
@RequestMapping("/api/auth")
public class AuthController {
    // 인증/권한체크 관리 객체
    @Autowired
    AuthenticationManager authenticationManager;

    // 웹토큰 객체
    @Autowired
    JwtUtils jwtUtils;

    // 패스워드 암호화 객체
    @Autowired
    PasswordEncoder encoder;

    // 유저 서비스
    @Autowired
    UserService userService;



}
