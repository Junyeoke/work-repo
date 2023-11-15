package com.example.playhostproject.repository;

import com.example.playhostproject.model.entity.Cart;
import com.example.playhostproject.model.entity.dto.CartDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 * packageName : com.example.playhostproject.repository
 * fileName : CartRepository
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
public interface CartRepository extends JpaRepository<Cart, Integer> {
    // like 검색 : 상품테이블(PRODUCT) 조인
    @Query(value = "SELECT CT.CID AS cid " +
            ", PD.NAME    AS name " +
            ", PD.IMG_URL AS imgUrl " +
            ", PD.PRICE  AS price " +
            ", PD.DISCOUNT AS discount " +
            "FROM CART CT " +
            ",PRODUCT PD " +
            "WHERE CT.PID = PD.PID " +
            "AND PD.NAME LIKE '%'||:name||'%' " +
            "AND CT.DELETE_YN = 'N'"
            , countQuery = "SELECT count(*)" +
            "FROM CART CT " +
            ",PRODUCT PD " +
            "WHERE CT.PID = PD.PID " +
            "AND PD.NAME LIKE '%'||:name||'%' " +
            "AND CT.DELETE_YN = 'N'", nativeQuery = true)
    Page<CartDto> selectByNameContaining(
            @Param("name") String name, Pageable pageable);

    // 상품 + 장바구니(조인) 상세조회 : 페이징 없음(객체)
    @Query(value = "SELECT CT.CID AS cid " +
            ", PD.NAME AS name " +
            ", PD.IMG_URL AS imgUrl " +
            ", PD.PRICE AS price " +
            ", PD.DISCOUNT AS discount " +
            "FROM CART CT " +
            ", PRODUCT PD " +
            "WHERE CT.PID = PD.PID " +
            "AND CT.CID = :cid " +
            "AND CT.DELETE_YN = 'N'", nativeQuery = true)
    Optional<CartDto> selectById(@Param("cid") int cid);

}
