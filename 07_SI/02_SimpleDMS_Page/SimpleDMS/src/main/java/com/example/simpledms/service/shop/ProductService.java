package com.example.simpledms.service.shop;

import com.example.simpledms.model.entity.shop.Product;
import com.example.simpledms.model.entity.shop.SimpleProduct;
import com.example.simpledms.repository.shop.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

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
}
