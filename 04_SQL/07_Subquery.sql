-- 07_Subquery
-- 서브쿼리 : 단일행 서브쿼리(1건만 나옴)
-- 부등호나 등호를 사용하여 비교함
-- 예제 1) SCOTT 사원보다 급여를 많이 받는 사원을 찾기위한 SQL문을 작성하세요
-- 해결 1-1) 사원테이블에서 SCOTT 사원의 급여를 찾은 후에 (1번)
-- 해결 1-2) 그 급여를 비교해서 많이 받는 사원을 추가로 찾아야함 (2번)
-- 1번
SELECT SALARY
FROM EMPLOYEE
WHERE ENAME = 'SCOTT'; -- 3000(급여)

-- 2번
SELECT ENAME, SALARY
FROM EMPLOYEE
WHERE SALARY > 3000;

-- 문제점 : 성능저하 : 여러번 쿼리로 인해
-- WHERE 절의 컬럼과 서브쿼리의 SELECT 컬럼이 동일해야함
-- 사용법
-- SELECT 컬럼명 FROM 테이블명
-- WHERE 비교컬럼 > (SELECT 비교컬럼 FROM 테이블명);              
SELECT ENAME, SALARY
FROM EMPLOYEE
WHERE SALARY > (SELECT SALARY
                FROM EMPLOYEE
                WHERE ENAME = 'SCOTT');
                
-- 예제1 : SCOTT 사원과 동일한 부서에서 DNO 근무하는 사원 구하기
SELECT ENAME
FROM EMPLOYEE
WHERE DNO = (SELECT DNO 
            FROM EMPLOYEE 
            WHERE ENAME = 'SCOTT');

-- 예제2 : 30번 부서에서 최소급여를 구한후 그 최소 급여보다 부서별 최소 급여가 큰 부서만 출력하세요
SELECT MIN(SALARY)
FROM EMPLOYEE
WHERE DNO = 30;

SELECT DNO, MIN(SALARY)
FROM EMPLOYEE
GROUP BY DNO
HAVING MIN(SALARY) > (SELECT MIN(SALARY)
                      FROM EMPLOYEE
                      WHERE DNO = 30);
                      
-- 3) 특수한 경우 아래처럼 사용도 가능함
-- SELECT 문 안에도 들어감
SELECT 2*3, (SELECT 4*3 FROM DUAL)
FROM DUAL;

-- FROM 문 안에도 들어감
SELECT EMP.ENAME, EMP.ENO
FROM (SELECT ENAME, ENO FROM EMPLOYEE) EMP;

-- 2) 다중 행 서브쿼리(자식쿼리) : 여러 건이 나옴
-- 예제 4) (1) 부서별 최소급여를 받는 사원 중에서 (2) 사원번호와 이름을 출력하세요
-- (1) 부서별 최소급여 받는 사원 출력
SELECT MIN(SALARY)
FROM EMPLOYEE
GROUP BY DNO;

-- (2) 950, 1300, 800 급여를 받는 사원번호와 이름 출력
SELECT ENO, ENAME
FROM EMPLOYEE
WHERE SALARY IN (950, 1300, 800);

-- 최종쿼리
SELECT ENO, ENAME
FROM EMPLOYEE
WHERE SALARY IN (SELECT MIN(SALARY)
                    FROM EMPLOYEE
                    GROUP BY DNO);



                
                