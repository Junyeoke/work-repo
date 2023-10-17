package com.example.jpaexam.service;

import com.example.jpaexam.model.Emp;
import com.example.jpaexam.repository.EmpRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * packageName : com.example.jpaexam.service
 * fileName : EmpService
 * author : GGG
 * date : 2023-10-16
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-16         GGG          최초 생성
 */
@Service
public class EmpService {

    @Autowired
    EmpRepository empRepository; // 객체 가져오기(DI)

    /** 전체 조회 */
    public List<Emp> findAll(){
        List<Emp> list = empRepository.findAll();
        return list;
    }

    /** 상세조회 */
    public Optional<Emp> findById(int eno){
        Optional<Emp> optionalEmp = empRepository.findById(eno);
        return optionalEmp;
    }

    /** 저장(수정) 함수 */
    public Emp save(Emp emp){
        Emp emp2 = empRepository.save(emp);
        return emp2;
    }

    /** 삭제함수 */
    public boolean removeById(int eno){
        if(empRepository.existsById(eno)){
            empRepository.deleteById(eno);
            return true;
        }
        return false;
    }
}
