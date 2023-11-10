package com.example.demo.repository;

import com.example.demo.model.dto.UserDto;
import com.example.demo.model.entity.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 * packageName : com.example.loginproject2.repository
 * fileName : UserRepository
 * author : GGG
 * date : 2023-10-18
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-18         GGG          최초 생성
 */
@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

//    이메일로 값을 찾음
    Optional<User> findByEmail(String mail);

    /**
     * TODO : userDto : 로그인시 유저 정보 기본키 , 이름 , 권한 넘기기
     */
    @Query(value = "SELECT USER_ID AS userId , NAME AS name , ROLE AS role FROM BOARD_USER " +
            "WHERE EMAIL = :email " , nativeQuery = true)
    Optional<UserDto> selectByEmail(@Param("email") String email);
}
