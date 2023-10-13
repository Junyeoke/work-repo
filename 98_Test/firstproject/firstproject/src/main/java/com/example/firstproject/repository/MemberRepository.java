package com.example.firstproject.repository;

import com.example.firstproject.entity.Member;
import org.springframework.data.repository.CrudRepository;

/**
 * packageName : com.example.firstproject.repository
 * fileName : MemberRepository
 * author : 01045
 * date : 2023-10-10
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-10         01045          최초 생성
 */
public interface MemberRepository extends CrudRepository<Member, Long> {
}
