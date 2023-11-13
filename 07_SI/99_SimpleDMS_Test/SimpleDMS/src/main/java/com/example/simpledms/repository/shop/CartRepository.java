package com.example.simpledms.repository.shop;

import com.example.simpledms.model.entity.shop.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * packageName : com.example.simpledms.repository.shop
 * fileName : CartRepository
 * author : GGG
 * date : 2023-11-09
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-11-09         GGG          최초 생성
 */
@Repository
public interface CartRepository extends JpaRepository<Cart,Integer> {
    // like 검색 + 상품테이블(TB_PRODUCT) 조인

}
