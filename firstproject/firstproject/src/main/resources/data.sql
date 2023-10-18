INSERT INTO article(title, content) VALUES ('가가가가', '1111');
INSERT INTO article(title, content) VALUES ('나나나나', '2222');
INSERT INTO article(title, content) VALUES ('다다다다', '3333');
-- todo ) article 테이블에 데이터 추가
insert into article(title, content) values ('당신의 인생 영화는?', '댓글 고');
insert into article(title, content) values ('당신의 소울 푸드는?', '댓글 고고');
insert into article(title, content) values ('당신의 취미는?', '댓글 고고고');
-- todo ) 4번 게시글의 댓글 추가
insert into comment(article_id, nickname, body) values (4, 'Park','위대한 쇼맨');
insert into comment(article_id, nickname, body) values (4, 'Kim','라라랜드');
insert into comment(article_id, nickname, body) values (4, 'Lee','범죄도시3');
-- todo ) 5번 게시글의 댓글 추가
insert into comment(article_id, nickname, body) values (5, 'Park','치킨');
insert into comment(article_id, nickname, body) values (5, 'Choi','피자');
insert into comment(article_id, nickname, body) values (5, 'Lee','파스타');
-- todo ) 6번 게시글의 댓글 추가
insert into comment(article_id, nickname, body) values (6, 'Park','조깅');
insert into comment(article_id, nickname, body) values (6, 'Lee','유튜브 보기');
insert into comment(article_id, nickname, body) values (6, 'Kim','등산');