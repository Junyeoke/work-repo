package com.example.firstproject.api;

import com.example.firstproject.dto.ArticleForm;
import com.example.firstproject.entity.Article;
import com.example.firstproject.repository.ArticleRepository;
import com.example.firstproject.service.ArticleService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * packageName : com.example.firstproject.api
 * fileName : ArticleApiController
 * author : GGG
 * date : 2023-10-11
 * description : REST API : Article API 구현하기
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-11         GGG          최초 생성
 */
@Slf4j
@RestController
public class ArticleApiController {
    @Autowired
    private ArticleService articleService;
//
//    // todo : GET
    @GetMapping("api/articles")     // url 요청접수
    public List<Article> index(){
        return articleService.index(); // db에 저장된 모든 Article을 가져와 반환
    }
    // 단일 게시글 조회하기
    @GetMapping("api/articles/{id}")     // url 요청접수
    public Article show(@PathVariable Long id)    // url의 id를 매개변수로 받아오기
    {
        return articleService.show(id); // db에 저장된 모든 Article을 가져와 반환
    }
//
//    // todo : POST
    // 반환형이 Article인 create() 메서드 정의
    // 수정할 데이터를 dto 매개변수로 받아오고, dto는 DB에서 활용할 수 있도록 엔티티로 변환해 article 변수에 넣고
    // articleRepository를 통해 DB에 저장 후 반환
    @PostMapping("api/articles")
    public ResponseEntity<Article> create(@RequestBody ArticleForm dto){
        Article created = articleService.create(dto);
        return (created != null) ? ResponseEntity.status(HttpStatus.OK).body(created) :
                ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }
//
//    // todo : PATCH
    @PatchMapping("api/articles/{id}")
    public ResponseEntity<Article> update(@PathVariable Long id, @RequestBody ArticleForm dto){
        Article updated = articleService.update(id, dto);   // 서비스를 통해 게시글 수정
        return (updated != null) ?                                      // 수정되면 정상, 안 되면 오류 응답
                ResponseEntity.status(HttpStatus.OK).body(updated):
                ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }
//
//    // todo : DELETE
    @DeleteMapping("api/articles/{id}")
    public ResponseEntity<Article> delete(@PathVariable Long id){
        Article deleted = articleService.delete(id);        // 서비스를 통해 게시글 삭제
        return (deleted != null) ?
                ResponseEntity.status(HttpStatus.NO_CONTENT).build():
                ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }
}
