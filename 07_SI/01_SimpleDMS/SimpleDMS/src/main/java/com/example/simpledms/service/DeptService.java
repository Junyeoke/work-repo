package com.example.simpledms.service;

import com.example.simpledms.model.Dept;
import com.example.simpledms.repository.DeptRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * packageName : com.example.simpledms.service
 * fileName : DeptService
 * author : GGG
 * date : 2023-10-19
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-19         GGG          최초 생성
 */
@Service
public class DeptService {
    @Autowired
    DeptRepository deptRepository;  // DI

    /** 전체조회 */
    public List<Dept> findAll(){
        List<Dept> list = deptRepository.findAll();
        return list;
    }

    /** 검색어(dname like) 조회 함수 */
    public List<Dept> findAllByDnameContaining(String dname){
        List<Dept> list = deptRepository.findAllByDnameContaining(dname);
        return list;
    }


}
