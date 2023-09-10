-- 파일명 : 02_Select_Where.sql
-- 데이터에 조건을 붙여 조회하기
-- 1) 비교연산자로 조건절 사용하기
-- 예제 1) 월급(SALARY)이 1500 이상인 사원 조회하기
-- 사용법) SELECT 컬럼명, 컬럼명2... FROM 테이블명
--        WHERE 조건절(컬럼명 (부등호 >, >=, <, <=, =(같다), <>(같지않다)) 값);
SELECT ENAME, SALARY FROM EMPLOYEE
WHERE SALARY > 1500; 

-- 예제 2) 10번 부서의 소속 사원을 출력하세요
SELECT * FROM EMPLOYEE
WHERE DNO = 10;

-- 예제 3) 사원명(ENAME)이 SCOTT인 사원을 출력하세요
SELECT * FROM EMPLOYEE
WHERE ENAME='SCOTT';

-- 예제 4) 입사일이(HIREDATE) 이 '1981/01/01' 이전인 사원만 출력
SELECT * FROM EMPLOYEE
WHERE HIREDATE <= '1981/01/01';

-- 2) 논리 연산자와 함께 조건절 사용하기
-- 논리 연산자 : AND, OR, NOT 
-- 성능 : AND > OR(NOT)
-- 예제 5) 부서번호(DNO) 가 10이고, 직급(JOB)이 'MANAGER'인 사원을 출력하세요
SELECT * FROM EMPLOYEE
WHERE DNO = 10
AND   JOB = 'MANAGER';

-- 연습 1) 급여가 1000과 1500 사이의 사원 조회하기
SELECT * FROM EMPLOYEE
WHERE SALARY >= 1000
AND SALARY <= 1500;

-- 예제 6) 부서번호가 10이거나 직급이 'MANAGER' 인 사원만 출력하기
SELECT * FROM EMPLOYEE
WHERE DNO = 10
OR    JOB = 'MANAGER';

-- 예제 7) 10번 부서에 소속된 사원을 제외하고 나머지 사원 출력하기
-- 사용법) SELECT 컬럼명 FROM 테이블명
--        WHERE NOT 컬럼명; (그 값에 반대되는 데이터가 출력됨)
SELECT * FROM EMPLOYEE
WHERE NOT DNO = 10;

-- 다른 방법 : 비교연산자 <> 사용
SELECT * FROM EMPLOYEE
WHERE DNO <> 10;

-- 연습 2) 급여가 1000 미만이거나 1500 초과인 사원 출력
SELECT * FROM EMPLOYEE
WHERE SALARY < 1000
OR SALARY > 1500;

-- 연습 3) 커미션이 300 이거나 500이거나 1400 인 사원 출력
SELECT * FROM EMPLOYEE
WHERE COMMISSION = 300
OR    COMMISSION = 500
OR    COMMISSION = 1400;

-- 3) BETWEEN 예약어
-- 예제 8) 급여가 1000과 1500 사이의 사원 조회하기
SELECT * FROM EMPLOYEE
WHERE SALARY >= 1000
AND SALARY <= 1500;

-- BETWEEN 사용
-- 사용법 ) SELECT 컬럼명 FROM 테이블명
--         WHERE 컬럼명 BETWEEN 작은값 AND 큰 값;  
-- 사용처 : 작은값 ~ 큰 값 사이의 결과 조회하기 할 때 사용
SELECT * FROM EMPLOYEE
WHERE SALARY BETWEEN 1000 AND 1500;

-- NOT BETWEEN 
-- 예제 9) 급여가 1000 미만 이거나 1500 초과인 사원 조회하기 
SELECT * FROM EMPLOYEE
WHERE SALARY < 1000
OR SALARY > 1500;

-- NOT BETWEEN 사용
SELECT * FROM EMPLOYEE
WHERE SALARY NOT BETWEEN 1000 AND 1500;

-- 연습 3) 1982년에 입사한 사원 조회하기
SELECT * FROM EMPLOYEE
WHERE HIREDATE BETWEEN '1982/01/01' AND '1982/12/31';

-- 4) IN 예약어
-- 예제 10) 상여금(COMMISSION)이 300이거나 500이거나 1400인 사원 조회
SELECT * FROM EMPLOYEE
WHERE COMMISSION = 300
OR    COMMISSION = 500
OR    COMMISSION = 1400;

-- IN 사용
-- 사용법 ) SELECT 컬럼명 FROM 테이블명
--         WHERE 컬럼명 IN (값, 값2, 값3....);
-- 사용처 : OR로 연결된 데이터를 간단하게 사용가능
SELECT * FROM EMPLOYEE
WHERE COMMISSION IN (300, 500, 1400);

-- NOT IN 사용
-- 예제 11) 상여금(COMMISSION)이 300이 아니고, 500이 아니고, 1400이 아닌 사원 조회
-- 사용법 ) SELECT 컬럼명 FROM 테이블명
--         WHERE 컬럼명 NOT IN (값, 값2, 값3....);
SELECT * FROM EMPLOYEE
WHERE COMMISSION NOT IN (300, 500, 1400);

-- 5) LIKE 검색(*****)
-- 정의 : 일부 키워드(영문자, 한글)만 사용해서 비슷한 것들만 추려서 조회하기
-- 예제 12) 이름이 'F'로 시작하는 사원 조회하기
-- 사용법) SELECT 컬럼명 FROM 테이블명
--        WHERE 컬럼명 LIKE '%키워드%';
-- % : 키워드를 제외한 문자들
SELECT * FROM EMPLOYEE
WHERE ENAME LIKE 'F%';

-- 연습 4) 이름에 'M'이 포함되어 있는 사원 조회하기
SELECT * FROM EMPLOYEE
WHERE ENAME LIKE '%M%';

-- 연습 5) 이름이 'N'으로 끝나는 사원 조회하기
SELECT * FROM EMPLOYEE
WHERE ENAME LIKE '%N';

-- 예제 13) 이름의 두번 째 글자가 'A'인 사원 조회하기
-- LIKE기호 : %(키워드를 제외한 어떤 문자열을 의미)
--         : _(키워드를 제외한 어떤 한 문자를 의미)
SELECT * FROM EMPLOYEE
WHERE ENAME LIKE '_A%';

-- 연습 6) 이름의 세번 째 글자가 'A'인 사원 조회하기
SELECT * FROM EMPLOYEE
WHERE ENAME LIKE '__A%';

-- 예제 14)IN, BETWEEN 의 반대를 나타낼 때 NOT 앞에 붙여서 사용했음
-- LIKE의 반대를 나타낼 때 똑같이 사용할 수 있음 : NOT LIKE
-- 이름에 A가 포함되지 않는 사람을 조회하세요
SELECT * FROM EMPLOYEE
WHERE ENAME NOT LIKE '%A%';

-- 6) NULL 검색(조회)
-- 예제 15) 상여금(COMMISSION)이 NULL 인 사원을 조회하세요
-- NULL의 특징 : 연산/비교 모든 것이 안됨 -> 결과는 NULL
-- 예약어 : NULL 조회시 : WHERE 컬럼명 IS NULL;
SELECT * FROM EMPLOYEE
WHERE COMMISSION IS NULL;

-- IN과 BETWEEN, LIKE의 반대는 앞에 NOT
-- IS NOT NULL이 존재함
SELECT * FROM EMPLOYEE
WHERE COMMISSION IS NOT NULL;

-- 7) ORDER BY : 정렬 기능
-- 예제 16) 사원 테이블을 오름차순으로 정렬하세요
-- 사용법 ) SELECT 컬럼명 FROM 테이블명
--         ORDER BY 정렬대상컬럼 ASC/DESC;
-- 참고) 이 기능을 사용하면 성능이 대폭 저하
SELECT * FROM EMPLOYEE
ORDER BY SALARY ASC; -- ASC(오름차순, 생략가능)

-- 내림차순으로 정렬
SELECT * FROM EMPLOYEE
ORDER BY SALARY DESC; -- DESC(내림차순, 생략불가)

-- 연습7) 사원 테이블에서 사원명으로 오름차순 정렬
SELECT * FROM EMPLOYEE
ORDER BY ENAME;

-- 연습8) 입사일 데이터로 내림차순 정렬
SELECT * FROM EMPLOYEE
ORDER BY HIREDATE DESC;

-- 연습9) 사원테이블에서 급여는 내림차순으로 정렬하고, 사원명은 오름차순으로 정렬
SELECT * FROM EMPLOYEE
ORDER BY SALARY DESC, ENAME ASC;







