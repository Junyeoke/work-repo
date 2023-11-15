package com.example.playhostproject.service;

import com.example.playhostproject.model.entity.Cart;
import com.example.playhostproject.model.entity.dto.CartDto;
import com.example.playhostproject.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

/**
 * packageName : com.example.playhostproject.service
 * fileName : CartService
 * author : GGG
 * date : 2023-11-15
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-11-15         GGG          최초 생성
 */
@Service
public class CartService {
    @Autowired
    CartRepository cartRepository;

    // 전체조회 + 페이징(조인) + DTO
    public Page<CartDto> selectByNameContaining(String name, Pageable pageable){
        Page<CartDto> page = cartRepository.selectByNameContaining(name, pageable);
        return page;
    }

    // 저장(수정) 함수
    public Cart save(Cart cart) {
        Cart cart2 = cartRepository.save(cart);
        return cart2;
    }

    // 조인 상세조회(1건 조회) 함수
    public Optional<CartDto> selectById(int cid){
        Optional<CartDto> optionalCart = cartRepository.selectById(cid);
        return optionalCart;
    }

    // 삭제함수
    public boolean removeById(int cid){
        if(cartRepository.existsById(cid)) {        // cid가 있으면
            cartRepository.deleteById(cid);         // 삭제진행
            return true;
        }
        return false;
    }
}
