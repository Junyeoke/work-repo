package com.example.back.service;

import com.example.back.model.News;
import com.example.back.model.News;
import com.example.back.repository.NewsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

/**
 * packageName : com.example.back.service
 * fileName : NewsService
 * author : GGG
 * date : 2023-10-26
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-26         GGG          최초 생성
 */
@Service
public class NewsService {
    
    @Autowired
    NewsRepository newsRepository;

    //    전체조회
    public Page<News> findAll(Pageable pageable) {
        Page<News> page = newsRepository.findAll(pageable);
        return page;

    }

    //    title like 조회 + paging
    public Page<News> findAllByTitleContaining(String title, Pageable pageable) {
        Page<News> page
                = newsRepository.findAllByTitleContaining(title, pageable);
        return page;

    }

    // 저장 함수
    public News save(News news) {

        News News2 = newsRepository.save(news);

        return News2;
    }

    // 상세 조회(1건 조회) 함수
    public Optional<News> findById(int no) {
        Optional<News> optionalNews = newsRepository.findById(no);
        return optionalNews;
    }

    // 삭제함수
    public boolean removeById(int no) {
        if(newsRepository.existsById(no)) {    // no 있는지 확인
            newsRepository.deleteById(no); // 삭제 진행
            return true;
        }
        return false;
    }
}
