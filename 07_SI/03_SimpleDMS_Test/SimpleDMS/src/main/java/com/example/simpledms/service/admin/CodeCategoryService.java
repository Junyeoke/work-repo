package com.example.simpledms.service.admin;

import com.example.simpledms.model.entity.admin.CodeCategory;
import com.example.simpledms.repository.admin.CodeCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * packageName : com.example.simpledms.service.admin
 * fileName : CodeCategoryService
 * author : GGG
 * date : 2023-11-07
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-11-07         GGG          최초 생성
 */
@Service
public class CodeCategoryService {
    @Autowired
    CodeCategoryRepository codeCategoryRepository;

    // like 검색
    public Page<CodeCategory> findAllByCategoryNameContaining(String catecoryName, Pageable pageable) {
        Page<CodeCategory> page
                = codeCategoryRepository.findAllByCategoryNameContaining(catecoryName, pageable);
        return page;
    }

    // 전체 검색 : paging 없음
    public List<CodeCategory> findAll(){
        List<CodeCategory> list = codeCategoryRepository.findAll();     // 전체 조회 함수
        return list;
    }

    // 상세 조회
    public Optional<CodeCategory> findById(int categoryId) {
        Optional<CodeCategory> optionalCodeCategory
                = codeCategoryRepository.findById(categoryId);
        return optionalCodeCategory;
    }

    // 저장 함수
    public CodeCategory save(CodeCategory codeCategory) {
        CodeCategory codeCategory2 = codeCategoryRepository.save(codeCategory);
        return codeCategory2;

    }

}
