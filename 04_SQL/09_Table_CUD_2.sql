-- 09_Table_CUD_2
-- UPDATE(수정)
-- 대상 테이블 : DEPT_COPY
SELECT * FROM DEPT_COPY;
-- 예제 1) 10번 부서의 이름 수정하기 : 'ACCOUNTING' -> 'PROGRAMMING'
-- 사용법 :  UPDATE 테이블명
--          SET 
--          컬럼명 = '변경할 값'
--          WHERE 컬럼명 = 값; (조건)

UPDATE DEPT_COPY
SET 
    DNAME = 'PROGRAMMING'
WHERE DNO = 10;
COMMIT;

-- 연습 1) 20번 부서 이름 수정하기 'HR'
UPDATE DEPT_COPY
SET
    DNAME = 'HR'
WHERE DNO = 20;
SELECT * FROM DEPT_COPY;
COMMIT;

-- 연습(응용) 2) 컬럼 값을 여러개 수정하기
-- 10번 부서의 부서명을 'PROGRAMMING2', 부서위치를 'SEOUL'

UPDATE DEPT_COPY
SET
    DNAME = 'PROGRAMMING2',
    LOC = 'SEOUL'
WHERE DNO = 10;

SELECT * FROM DEPT_COPY;
COMMIT;

-- 예제 3) 10번 부서의 지역명을 20번 부서의 지역 명으로 수정하기
SELECT LOC FROM DEPT_COPY
WHERE DNO = 20; -- DALLAS

UPDATE DEPT_COPY
SET
    LOC = (SELECT LOC FROM DEPT_COPY
            WHERE DNO = 20)
WHERE DNO = 10;

COMMIT;

-- 연습 3) 10번 부서의 부서명, 지역명 30번 부서의 부서명, 지역명으로 변경하기
-- 힌트) 서브쿼리

SELECT DNAME, LOC FROM DEPT_COPY
WHERE DNO = 30;

UPDATE DEPT_COPY
SET
    DNAME = (SELECT DNAME FROM DEPT_COPY
WHERE DNO = 30),
    LOC = (SELECT LOC FROM DEPT_COPY
WHERE DNO = 30)
WHERE DNO = 10;

SELECT * FROM DEPT_COPY;

-- 다른 풀이

UPDATE DEPT_COPY
SET
  (DNAME, LOC) = (SELECT DNAME, LOC FROM DEPT_COPY
WHERE DNO = 30)
WHERE DNO = 10;

COMMIT;


-- DELETE : 삭제(D), 전체삭제, 부분삭제 모두가능, 취소가능
-- VS TRUNCATE TABLE 테이블; (빠른 전체삭제, 취소불가)
-- 예제 6) 10번 부서를 삭제하세요
-- 사용법) DELETE (FROM) 테이블명
--        WHERE 컬럼명= 값; (조건)
-- FROM 생략가능
DELETE FROM DEPT_COPY
WHERE DNO = 10;
SELECT * FROM DEPT_COPY;
COMMIT;

-- 연습문제 1) 영업부에 SALES 에 근무하는 사원번호(DNO) 삭제하기
SELECT DNO FROM DEPT_COPY
WHERE DNAME = 'SALES';

DELETE FROM DEPT_COPY
WHERE DNO = (SELECT DNO FROM DEPT_COPY
WHERE DNAME = 'SALES');

-- 기타 명령어
-- 테이블 설계구조 보기 : DESC 테이블명
DESC DEPT_COPY;

COMMIT;




