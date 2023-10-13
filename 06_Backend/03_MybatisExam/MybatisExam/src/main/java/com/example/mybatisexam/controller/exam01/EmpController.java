package com.example.mybatisexam.controller.exam01;

import com.example.mybatisexam.model.common.PageReq;
import com.example.mybatisexam.model.common.PageRes;
import com.example.mybatisexam.model.vo.Emp;
import com.example.mybatisexam.service.exam01.EmpService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

import java.util.Optional;

/**
 * packageName : com.example.mybatisexam.controller.exam01
 * fileName : EmpController
 * author : GGG
 * date : 2023-10-12
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-12         GGG          최초 생성
 */
@Slf4j
@Controller
@RequestMapping("/exam01")
public class EmpController {
    //  todo: 연습 1)부서클래스를 참고하여
    //      Emp 클래스 ( schema.sql 참고 )
    //      EmpDao 클래스 findByEnameContaining()
    //      emp.xml 클래스
    //      EmpService 클래스를 만들고 findByEnameContaining() 함수를 정의한다.
    //      EmpController 클래스를 만들어서 getEmpAll() 함수를 정의하고,
    //    샘플데이터를 뷰로(emp_all.html) 전송해 보세요.

    @Autowired
    EmpService empService;

//    todo : 전체 조회
    @GetMapping("/emp")
    public String getEmpAll(
            @RequestParam(defaultValue = "") String ename
            , @RequestParam(defaultValue = "0") int page
            , @RequestParam(defaultValue = "3") int size
            , Model model
    ){
        //      todo: 페이징 요청 객체에 정보 저장
//               page : 현재페이지 번호, size : 1 페이지당 개수
        PageReq pageReq = new PageReq(page, size);
        //      todo: 전체 조회 함수 호출
        PageRes<Emp> pageRes
                = empService.findByEnameContaining(ename, pageReq);
        // todo : jsp 정보전달(부서배열, 페이징 정보)
        model.addAttribute("emp", pageRes.getContent()); // 사원 배열
        model.addAttribute("currentPage", pageRes.getNumber()); // 사원 배열
        model.addAttribute("totalItems", pageRes.getTotalElements()); // 사원 배열
        model.addAttribute("totalPages", pageRes.getTotalPages()); // 사원 배열
        model.addAttribute("startPage", pageRes.getStartPage()); // 사원 배열
        model.addAttribute("endPage", pageRes.getEndPage()); // 사원 배열

        log.debug(model.toString());
        return "exam01/emp/emp_all.jsp";
    }

    /** 상세 조회 */
    @GetMapping("/emp/{eno}")
    public String getEmpId(
            @PathVariable int eno,
            Model model
    ){
        Optional<Emp> optionalEmp = empService.findById(eno);
        model.addAttribute("emp", optionalEmp.get());
        return "exam01/emp/emp_id.jsp";
    }

    /** 저장함수 : 사원 추가 페이지 이동 */
    @GetMapping("/emp/addition")
    public String addEmp() {
        return "exam01/emp/add_emp.jsp";
    }

    /** 저장함수 : db 저장 */
    @PostMapping("/emp/add")
    public RedirectView createEmp(
            @ModelAttribute Emp emp
    ){
        empService.save(emp); // db 저장

//      전체 조회 페이지로 강제 이동
        return new RedirectView("/exam01/emp");
    }

    /** 수정함수 : 수정페이지 이동 + 상세조회 */
    @GetMapping("/emp/edition/{eno}")
    public String editEmp(@PathVariable int eno, Model model){
        // todo ) 서비스 상세조회 함수 호출
        Optional<Emp> optionalEmp = empService.findById(eno);
        // todo ) jps 전달
        model.addAttribute("emp", optionalEmp.get());
        return "exam01/emp/update_emp.jsp";
    }
    /** 수정 함수 */
    @PutMapping("/emp/edit/{eno}")
    public RedirectView updateEmp(@PathVariable int eno, @ModelAttribute Emp emp){
        // todo ) db 수정 저장
        empService.save(emp);
        // todo ) 전체 조회 페이지로 강제이동
        return new RedirectView("/exam01/emp");
    }


    //  todo: 연습 5) 부서 클래스를 참고하여 사원 삭제기능을 추가하세요
    //    empDao, emp.xml, EmpService, EmpController, update_emp.jsp 수정
    //             url : /emp/delete/{eno}
    //    redirect jsp : /exam01/emp
    /** 삭제 함수 */
    @DeleteMapping("/emp/delete/{eno}")
    public RedirectView deleteEmp(@PathVariable int eno){
        empService.removeById(eno);
        return new RedirectView("/exam01/emp");
    }

}
