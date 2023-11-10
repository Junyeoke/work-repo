package com.example.demo.service;

import com.example.demo.model.dto.AuthDto;
import com.example.demo.model.dto.UserDto;
import com.example.demo.model.entity.RefreshToken;
import com.example.demo.model.entity.user.Role;
import com.example.demo.model.entity.user.User;
import com.example.demo.provider.JwtTokenProvider;
import com.example.demo.repository.RedisRepository;
import com.example.demo.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * packageName : com.example.loginproject2.service
 * fileName : UserService
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
@Service
@Slf4j
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final RedisRepository redisRepository;
    private final JwtTokenProvider jwtTokenProvider;


    //    로그인시 패스워드를 비교
    public String login(String email, String password) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(email).orElseThrow(() -> new UsernameNotFoundException("유저 에러에러"));

        if (user.getPassword().equals(password) && user != null) {
//            System.out.println("토큰 생성시 email 값과 role 입니다. : " + email + " " + user.getRole());
            AuthDto.TokenDto token =
                    jwtTokenProvider.createToken(email, user.getRole().toString());
            String accessToken = token.getAccessToken();
            String refreshToken = token.getRefreshToken();

//            TODO : redis 에 저장
            RefreshToken saveRefreshToken =
                    new RefreshToken(user.getUserId() , refreshToken);
            redisRepository.save(saveRefreshToken);


            return accessToken;
        }
        return null;
    }

    /**
     * TODO : 유저 정보 저장
     */
    public User save(User user) {
        user.setRole(Role.USER);
        User user1 = userRepository.save(user);
        return user1;
    }


    /**
     * TODO : 로그인 시 USER 정보 넘겨주기
     */
    public Optional<UserDto> selectByEmail(String email) {
        Optional<UserDto> optionalUserDto = userRepository.selectByEmail(email);
        return optionalUserDto;
    }

}
