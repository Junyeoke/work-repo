-- 10_Table_CUD_Exam
-- 테이블 : CUD(INSERT/UPDATE/DELETE) 연습문제

-- 1) EMPLOYEE 테이블의 구조만 복사하여 
--    EMP_INSERT 란 이름의 빈 테이블을 만드시오.
CREATE TABLE EMP_INSERT
AS
SELECT * FROM EMPLOYEE
WHERE 1=2;

-- 2) 본인을 EMP_INSERT 테이블에 추가하되 SYSDATE를 이용해서 입사일을 
--    오늘로 입력하세요.
--   예) ENO(사번) : 1, ENAME(사원명) : 'KTG', JOB(직위): 'STUDENT',
--      MANAGER(관리자) : NULL, HIREDATE(입사일) : SYSDATE, 
--      SALARY(월급): 2700, COMMISSION(상여금): 230, DNO(부서번호):10

INSERT INTO EMP_INSERT(ENO, ENAME, JOB, MANAGER, HIREDATE, SALARY, COMMISSION, DNO)
VALUES(1, '이준혁', 'STUDENT', NULL, SYSDATE, 2700, 230, 10);

SELECT * FROM EMP_INSERT;

-- 3) EMP_INSERT 테이블에 옆(아시는분) 사람을 추가하되 
--    TO_DATE 함수를 이용해서 입사일을 어제로 입력하세요.
-- 참고) INSERT 시 EMP_INSERT(컬럼명 ...) : 컬럼명 생략가능 (모든 데이터를 INSERT 할 때만 가능)
INSERT INTO EMP_INSERT(ENO, ENAME, JOB, MANAGER, HIREDATE, SALARY, COMMISSION, DNO)
VALUES(2, '이주영', 'STUDENT', NULL, TO_DATE(SYSDATE-1, 'YYYY/MM/DD'), 2700, 230, 10);

SELECT * FROM EMP_INSERT;

COMMIT;