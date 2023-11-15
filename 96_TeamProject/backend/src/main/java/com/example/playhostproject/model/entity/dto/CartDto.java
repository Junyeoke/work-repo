package com.example.playhostproject.model.entity.dto;

public interface CartDto {
    public Integer getCid();            // 장바구니 번호

    public String getName();            // 상품 이름
    public String getImgUrl();          // 상품이미지
    public Integer getPrice();          // 상품 가격

    public Integer getDiscount();      // 할인율
}
