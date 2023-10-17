package com.example.back;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

/**
 * packageName : com.example.back
 * fileName : SecurityConfig
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
// todo : @Configuration은 스프링의 환경설정 파일임을 의미하는 애너테이션이다.
@Configuration
// todo : @EnableWebSecurity는 모든 요청 URL이 스프링 시큐리티의 제어를 받도록 만드는 애너테이션이다.
//        @EnableWebSecurity 애너테이션을 사용하면 내부적으로 SpringSecurityFilterChain이 동작하여 URL 필터가 적용된다.
@EnableWebSecurity
public class SecurityConfig {
    @Bean
    SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .authorizeHttpRequests((authorizeHttpRequests) -> authorizeHttpRequests
                        .requestMatchers(new AntPathRequestMatcher("/**")).permitAll())
        ;
        return http.build();
    }
}
