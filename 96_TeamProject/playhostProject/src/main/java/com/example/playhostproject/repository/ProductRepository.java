package com.example.playhostproject.repository;

import com.example.playhostproject.model.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * packageName : com.example.playhostproject.repository
 * fileName : ProductRepository
 * author : san26
 * date : 2023-11-13
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-11-13         san26          최초 생성
 */
@Repository
public interface ProductRepository extends JpaRepository<Product , Integer> {
}
