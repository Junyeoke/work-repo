package com.example.firstproject.service;

import com.example.firstproject.dto.ArticleForm;
import com.example.firstproject.entity.Article;
import com.example.firstproject.repository.ArticleRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * packageName : com.example.firstproject.service
 * fileName : ArticleService
 * author : GGG
 * date : 2023-10-11
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-11         GGG          최초 생성
 */
@Slf4j
@Service
public class ArticleService {
    @Autowired
    private ArticleRepository articleRepository;    // 게시글 리파지터리 객체 주입

    public List<Article> index() {
        return articleRepository.findAll();
    }

    public Article show(Long id) {
        return articleRepository.findById(id).orElse(null);
    }

    public Article create(ArticleForm dto) {
        Article article = dto.toEntity();   // dto -> 엔티티로 변환 한 후 article에 저장
        if(article.getId() != null){
            return null;
        }
        return articleRepository.save(article);
    }

    public Article update(Long id, ArticleForm dto) {
        // 1. DTO -> 엔티티 변환
        Article article = dto.toEntity();   // dto를 엔티티로 변환
        log.info("id: {}, article: {}", id, article.toString());        // 로그 찍기

        // 2. 타깃 조회하기
        Article target = articleRepository.findById(id).orElse(null);

        // 3. 잘못된 요청 처리하기
        if(target == null || id != article.getId()){
            // 잘못된 요청 응답
            log.info("잘못된 요청 id: {}, article: {}", id, article.toString());
            return null;
        }
        // 4. 업데이트 및 정상 응답(200) 하기
        target.patch(article);
        Article updated = articleRepository.save(target);  // article 엔티티 db에 저장
        return updated;
    }

    public Article delete(Long id) {
        // 1. 대상 찾기
        Article target = articleRepository.findById(id).orElse(null);
        // 2. 잘못된 요청 처리하기
        if(target == null){
            return null;
        }
        // 3. 대상 삭제하기
        articleRepository.delete(target);
        return target;
    }
}
