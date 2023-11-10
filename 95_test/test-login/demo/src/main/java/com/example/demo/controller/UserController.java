package com.example.demo.controller;

import com.example.demo.model.dto.UserDto;
import com.example.demo.model.entity.user.User;
import com.example.demo.model.entity.user.UserDetailsImpl;

import com.example.demo.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

/**
 * packageName : com.example.loginproject2.controller
 * fileName : RestUserController
 * author : GGG
 * date : 2023-10-19
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-19         GGG          최초 생성
 */
@RestController
@Slf4j
@RequestMapping("/api")
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("/auth/login")
    public ResponseEntity<Object> login(@RequestBody User user) {
        try {

//            TODO : accessToken 주기
            String accessToken = userService.login(user.getEmail(), user.getPassword());
            log.info("accessToken : " + accessToken);
            HttpHeaders headers = new HttpHeaders();
            headers.add("Authorization", "Bearer " + accessToken);

//          TODO : 유저 정보 넘기기 : 유저의 id 값(기본키) , name (이름) , role(권한)
            Optional<UserDto> optionalUserDto = userService.selectByEmail(user.getEmail());
//            TODO : BODY : 유저 정보
//                  HEADER : 토큰
                return new ResponseEntity<>(optionalUserDto.get(),headers,HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/auth/register")
    public ResponseEntity<Object> register(@RequestBody User user) {
        try {
            User user1 = userService.save(user);
            return new ResponseEntity<>(user1, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


}
