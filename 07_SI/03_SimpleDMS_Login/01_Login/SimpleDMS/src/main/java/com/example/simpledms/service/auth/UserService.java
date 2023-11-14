package com.example.simpledms.service.auth;

import com.example.simpledms.model.entity.auth.User;
import com.example.simpledms.repository.auth.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

/**
 * packageName : com.example.simpledms.service.auth
 * fileName : UserService
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
@Service
public class UserService {
    @Autowired
    private UserRepository userRepository; // DI

    //    전체조회
    public Page<User> findAll(Pageable pageable) {
        Page<User> page = userRepository.findAll(pageable);
        return page;

    }


    //    username like 조회 + paging
    public Page<User> findAllByUsernameContaining(String username, Pageable pageable) {
        Page<User> page
                = userRepository.findAllByUsernameContaining(username, pageable);
        return page;

    }

    // 저장 함수(수정함수)
    public User save(User user) {

        User user2 = userRepository.save(user);

        return user2;
    }

    // 상세 조회(1건 조회) 함수
    public Optional<User> findById(String email) {
        Optional<User> optionalUser = userRepository.findById(email);
        return optionalUser;
    }

    // 삭제함수
    public boolean removeById(String email) {
        if(userRepository.existsById(email)) {    // email 있는지 확인
            userRepository.deleteById(email); // 삭제 진행
            return true;
        }
        return false;
    }

    // todo : 이메일이 있는지 확인하는 함수
    public boolean existsById(String email) {
        boolean bResult = userRepository.existsById(email);
        return bResult;
    }
}
