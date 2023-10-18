package com.example.secondexam.Repository;

import com.example.secondexam.model.TodoEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * packageName : com.example.secondexam.Repository
 * fileName : TodoRepository
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
public interface TodoRepository extends JpaRepository<TodoEntity, String> {

    @Query("select t from TodoEntity t where t.userId = ?1")
    List<TodoEntity> findByUserId(String userId);

}
