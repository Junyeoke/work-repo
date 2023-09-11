-- 05_Group_Func
-- 그룹 함수 : 데이터 전체집계 함수들(총액, 평균, 최고, 최저액, 총개수)
-- 결과 특징)  1건이 나옴
--            SUM(컬럼명), AVG(컬럼명), MAX(컬럼명), MIN(컬럼명), COUNT(컬럼명)
-- 예제 1) 사원들의 급여 총액, 평균액, 최고액 출력하기
SELECT SUM(SALARY) AS 총액
      ,ROUND(AVG(SALARY)) AS 평균액
      ,MAX(SALARY) AS 최고액
      ,MIN(SALARY) AS 최저액
FROM EMPLOYEE;

-- 예제 1) 최근에 입사한 사원과 가장 오래전에 입사한 사원의 입사일 출력하기
SELECT MAX(HIREDATE) AS 최근
      ,MIN(HIREDATE) AS 오래전
FROM EMPLOYEE;

-- 예제 2) 사원들의 상여금(COMMISSION) 총액 출력
SELECT SUM(COMMISSION) AS "상여금 총액"
FROM EMPLOYEE;

-- 예제 3) 사원들의 총인원을 출력하세요
-- 사용법) COUNT(컬럼명[*])
SELECT COUNT(*) AS 총인원
FROM EMPLOYEE;

-- 예제 4) 상여금(COMMISSION) 받는 사원의 수 계산하기
-- COMMISSION 컬럼 NULL 있음(상여금 못받음)
-- 집계함수는 자동으로 NULL 제외하고 계산
SELECT COUNT(COMMISSION) AS "상여금 받는 사원의 수"
FROM EMPLOYEE;

-- 예제 5) NOT NULL 인 데이터만 계산하기
SELECT COUNT(COMMISSION) AS 사원수
FROM EMPLOYEE
WHERE COMMISSION IS NOT NULL;


-- 예제 6) 직위(JOB) 종류가 몇 개인지 출력하기
-- DISTINCT : 중복제거 키워드
-- 사용법 COUNT(DISTINCT 컬럼명)
-- 컬럼별칭(*) : 컬럼명 AS 별칭
-- 테이블 별칭(*) : 테이블명 별칭
-- 사용법        : 별칭.컬럼명
SELECT COUNT(DISTINCT EMP.JOB) AS 직업개수
FROM EMPLOYEE EMP;

-- 전체 집계 함수 특징 : 1) 1건이 결과로 나옴
--                    2) 일반 컬럼과 같이 사용할 수 없음 : 에러 발생

--SELECT ENAME, MAX(SALARY)
--FROM EMPLOYEE; -- 에러 (일반컬럼(ENAME), MAX(SALARY) 같이 사용불가)

-- 2) 부분(컬럼별)집계하기 : GROUP BY (예약어)
-- 사용법 ) GROUP BY 컬럼명, 컬럼명2, ...
-- 예제 7) 소속 부서별(DNO) 평균 급여를 부서번호와 함께 출력하세요
-- TRUNC() : 버림(절삭)
-- 전체집계시에는 일반컬럼과 같이 사용할 수 없지만
-- 부분집계시에는 일반컬럼과 같이 사용가능 (GROUP BY 사용하기 때문)
SELECT DNO
, TRUNC(AVG(SALARY)) AS 평균급여
FROM EMPLOYEE
GROUP BY DNO; -- 부서번호 컬럼별 집계(부서번호 컬럼은 출력할 수 있음)
-- 주의점 ) 1) 그룹함수와 일반컬럼은 같이 사용불가
--         단, 컬럼별 집계에서 그 컬럼은 그룹함수와 같이 사용할 수 있음
--SELECT DNO, ENAME
--, TRUNC(AVG(SALARY)) AS 평균급여
--FROM EMPLOYEE
--GROUP BY DNO;  -- 에러 : ENAME 컬럼은 GROUP BY 대상 컬럼이 아니므로 그룹함수와 같이 출력할 수 없음

-- 예제 8) 부서번호(DNO)별, 직위별(JOB), 데이터 건수(COUNT) 및 급여(SALARY) 총액(SUM) 구하기
SELECT DNO, JOB
      ,COUNT(*)
      ,SUM(SALARY)
FROM EMPLOYEE
GROUP BY DNO, JOB;

-- GROUP BY 사용시 조건을 추가 : HAVING 키워드 // GROUP 함수에만 사용가능
-- 사용법) HAVING 그룹함수(컬럼명) > 값
-- 예제 9) 부서번호별(DNO) 최고급여가 3000 이상인 부서의 번호와 최고금액 구하기
SELECT DNO ,MAX(SALARY)
FROM EMPLOYEE
GROUP BY DNO
HAVING MAX(SALARY) >= 3000;

-- 연습 1) 사원테이블에서(EMPLOYEE) JOB(직위)이 1) MANAGER 인
--       값을 제외하고 3) 급여(SALARY) 총액(SUM)이 5000 이상인
--       2) 직급별(JOB) 총액 구하기

SELECT JOB, SUM(SALARY)
FROM EMPLOYEE
WHERE JOB NOT LIKE '%MANAGER%'
GROUP BY JOB
HAVING SUM(SALARY) >= 5000;




