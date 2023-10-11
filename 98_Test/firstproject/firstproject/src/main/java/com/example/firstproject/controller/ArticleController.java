package com.example.firstproject.controller;

import com.example.firstproject.dto.ArticleForm;
import com.example.firstproject.entity.Article;
import com.example.firstproject.repository.ArticleRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.List;

/**
 * packageName : com.example.firstproject.controller
 * fileName : ArticleController
 * author : GGG
 * date : 2023-10-10
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-10         GGG          최초 생성
 */
@Slf4j
@Controller
public class ArticleController {
    @Autowired
    private ArticleRepository articleRepository;    // articleRepository 객체 선언

    @GetMapping("/articles/new")
    public String newArticleForm() {
        return "articles/new";
    }


    @PostMapping("/articles/create")
    public String createArticle(ArticleForm form) {
        System.out.println(form.toString());
        // 1. DTO를 엔티티로 변환
        Article article = form.toEntity();
//        System.out.println(article.toString());     // DTO가 엔티티로 잘 변환되는지 확인 출력
        log.info(article.toString());
        // 2. 리파지터리로 엔티티를 DB에 저장
        Article saved = articleRepository.save(article);
        log.info(saved.toString());
//        System.out.println(saved.toString());       // article이 DB에 잘 저장되는지 확인 출력
        return "redirect:/articles/" + saved.getId();
    }

    @GetMapping("/articles/{id}") // 데아터 조회 요청 함수
    public String show(@PathVariable Long id, Model model) { // 매개변수로 id 받아오기
        log.info("id = " + id);
        // 1. id를 조회해 데이터 가져오기
        Article articleEntity = articleRepository.findById(id).orElse(null);
        // 2. 모델에 데이터 등록하기
        model.addAttribute("article", articleEntity);
        // 3. 뷰 페이지 반환하기

        return "articles/show";
    }

    @GetMapping("/articles")
    public String index(Model model) {
        // 1. 모든 데이터 가져오기
        List<Article> articleEntitiyList = articleRepository.findAll();
        // 2. 모델에 데이터 등록하기
        model.addAttribute("articleList", articleEntitiyList);
        // 3. 뷰 페이지 설정하기

        return "articles/index";
    }

    @GetMapping("/articles/{id}/edit")        // url 요청 접수
    public String edit(@PathVariable Long id, Model model) {                       // 메서드 생성 및 뷰 페이지 설정
        // 수정할 데이터 가져오기
        Article articleEntity = articleRepository.findById(id).orElse(null);     // db에서 수정할 데이터 가져오기
        // 모델에 데이터 등록하기
        model.addAttribute("article", articleEntity);
        // 뷰 페이지 설정하기
        return "articles/edit";
    }

    @PostMapping("/articles/update")     // url 요청 접수
    public String update(ArticleForm form) {     // 매개변수로 DTO 받아오기
        log.info(form.toString());
        // 1. DTO를 엔티티로 변환
        Article articleEntity = form.toEntity();     // DTO(form)를 엔티티(articleEntity)로 변환
        log.info(articleEntity.toString());          // 엔티티로 잘 변환되었는지 로그 찍기
        // 2. 엔티티를 DB에 저장하기
        // 2-1. db에서 기존 데이터 가져오기
        Article target = articleRepository.findById(articleEntity.getId()).orElse(null);     // 1. db에서 데이터 찾기, 2. 데이터 저장, 3. 데이터가 없으면 null 반환
        // 2-2. 기존 데이터 값을 갱신하기
        if (target != null) {
            articleRepository.save(articleEntity);   // 엔티티를 db에 저장(갱신)
        }
        // 3. 수정 결과 페이지로 리다이렉트 하기
        return "redirect:/articles/" + articleEntity.getId();
    }

    @GetMapping("/articles/{id}/delete")     // url 요청접수
    public String delete(@PathVariable Long id, RedirectAttributes rttr) {         // 메서드 생성 및 null 값 반환, id를 매개변수로 가져오기
        log.info("삭제 요청이 들어왔습니다.");
        // todo :: 삭제할 대상 가져오기
        // db에 접근해 데이터를 처리할 때 -> JPA의 리파지터리를 이용
        Article target = articleRepository.findById(id).orElse(null);        // 데이터 찾기
        log.info(target.toString());     // 데이터 확인
        // todo :: 대상 엔티티 삭제하기
        // target에 무언가 저장되어 있다면 삭제 수행
        // if 조건문으로 target이 null 이 아닌지 확인하고 참이면 내부 코드 수행
        if(target != null){     // 삭제할 대상이 있는지 확인
            articleRepository.delete(target);       // delete() 메서드로 대상 삭제
            rttr.addFlashAttribute("msg", "삭제되었습니다!");
        }
        // todo :: 결과 페이지로 리다이렉트하기
        // 게시글을 삭제하면 목록 페이지로 돌아가야 함
        return "redirect:/articles";
    }
}
