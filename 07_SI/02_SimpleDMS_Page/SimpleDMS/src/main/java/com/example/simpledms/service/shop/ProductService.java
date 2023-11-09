package com.example.simpledms.service.shop;

import com.example.simpledms.model.entity.shop.Product;
import com.example.simpledms.model.entity.shop.Product;
import com.example.simpledms.model.entity.shop.SimpleProduct;
import com.example.simpledms.repository.shop.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

/**
 * packageName : com.example.simpledms.service.shop
 * fileName : ProductService
 * author : GGG
 * date : 2023-11-08
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-11-08         GGG          최초 생성
 */
@Service
public class ProductService {

    @Autowired
    ProductRepository productRepository;

    // like 검색
    public Page<Product> findAllByPnameContains(String pname, Pageable pageable) {
        Page<Product> page
                = productRepository.findAllByPnameContains(pname, pageable);
        return page;

    }

    //    저장함수(수정함수)
    public Product save(Product product) {

        Product product2
                = productRepository.save(product);

        return product2; // 저장된 객체
    }

    // 상세 조회(1건 조회) 함수
    public Optional<Product> findById(int pno) {
        Optional<Product> optionalProduct = productRepository.findById(pno);
        return optionalProduct;
    }
}
