INSERT INTO TB_NOTICE
VALUES (SQ_NOTICE.nextval, '사이트 오픈 공지', '주녘주녘','공지사항 내용 테스트 1','N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS'),NULL, NULL);
INSERT INTO TB_NOTICE
VALUES (SQ_NOTICE.nextval, '사이트 점검 공지', '주녘주녘','공지사항 내용 테스트 2', 'N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS'),NULL, NULL);
INSERT INTO TB_NOTICE
VALUES (SQ_NOTICE.nextval, '블로그 오픈 안내', '주녘주녘','공지사항 내용 테스트 3', 'N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS'),NULL, NULL);
INSERT INTO TB_NOTICE
VALUES (SQ_NOTICE.nextval, '블로그 오픈 이벤트', '주녘주녘','공지사항 내용 테스트 4', 'N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS'),NULL, NULL);




COMMIT;