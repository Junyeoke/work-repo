DROP SEQUENCE SQ_NOTICE;
CREATE SEQUENCE SQ_NOTICE START WITH 1 INCREMENT BY 1;

DROP SEQUENCE SQ_NEWS;
CREATE SEQUENCE SQ_NEWS START WITH 1 INCREMENT BY 1;

DROP SEQUENCE SQ_BOARD;
CREATE SEQUENCE SQ_BOARD START WITH 1 INCREMENT BY 1;

DROP SEQUENCE SQ_GUEST_BOOK;
CREATE SEQUENCE SQ_GUEST_BOOK START WITH 1 INCREMENT BY 1;


DROP TABLE TB_NOTICE CASCADE CONSTRAINT;
DROP TABLE TB_NEWS CASCADE CONSTRAINT;
DROP TABLE TB_BOARD CASCADE CONSTRAINT;
DROP TABLE TB_GUEST_BOOK CASCADE CONSTRAINT;



CREATE TABLE TB_NOTICE
(
    ID         NUMBER NOT NULL PRIMARY KEY,
    TITLE       VARCHAR2(255),
    USER_NAME   VARCHAR2(255),
    CONTENT     VARCHAR2(255),
    DELETE_YN   VARCHAR2(1) DEFAULT 'N',
    INSERT_TIME VARCHAR2(255),
    UPDATE_TIME VARCHAR2(255),
    DELETE_TIME VARCHAR2(255)
);

CREATE TABLE TB_NEWS
(
    NO         NUMBER NOT NULL PRIMARY KEY,
    TITLE       VARCHAR2(255),
    USER_NAME   VARCHAR2(255),
    CONTENT     VARCHAR2(255),
    VIEW_CNT    NUMBER DEFAULT 0,
    DELETE_YN   VARCHAR2(1) DEFAULT 'N',
    INSERT_TIME VARCHAR2(255),
    UPDATE_TIME VARCHAR2(255),
    DELETE_TIME VARCHAR2(255)
);

CREATE TABLE TB_BOARD
(
    NO         NUMBER NOT NULL PRIMARY KEY,
    TITLE       VARCHAR2(255),
    USER_NAME   VARCHAR2(255),
    CONTENT     VARCHAR2(255),
    VIEW_CNT    NUMBER DEFAULT 0,
    DELETE_YN   VARCHAR2(1) DEFAULT 'N',
    INSERT_TIME VARCHAR2(255),
    UPDATE_TIME VARCHAR2(255),
    DELETE_TIME VARCHAR2(255)
);

CREATE TABLE TB_GUEST_BOOK
(
    ID         NUMBER NOT NULL PRIMARY KEY,
    TITLE       VARCHAR2(255),
    USER_NAME   VARCHAR2(255),
    CONTENT     VARCHAR2(255),
    DELETE_YN   VARCHAR2(1) DEFAULT 'N',
    INSERT_TIME VARCHAR2(255),
    UPDATE_TIME VARCHAR2(255),
    DELETE_TIME VARCHAR2(255)
);



