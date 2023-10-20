DROP SEQUENCE SQ_NOTICE;
CREATE SEQUENCE SQ_NOTICE START WITH 1 INCREMENT BY 1;



DROP TABLE TB_NOTICE CASCADE CONSTRAINT;



CREATE TABLE TB_NOTICE
(
    NUM         NUMBER NOT NULL PRIMARY KEY,
    TITLE       VARCHAR2(255),
    USER_NAME   VARCHAR2(255),
    CONTENT     VARCHAR2(255),
    DELETE_YN   VARCHAR2(1) DEFAULT 'N',
    INSERT_TIME VARCHAR2(255),
    UPDATE_TIME VARCHAR2(255),
    DELETE_TIME VARCHAR2(255)
);



