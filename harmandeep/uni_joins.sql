SELECT 
	u.user_id,
	u.username,
	p.post_id,
	p.post_content,
	c.user_id,
	c.comment_content
FROM users AS u
JOIN posts AS p
	ON p.post_id = u.user_id
JOIN commentss AS c
	ON c.user_id = u.user_id
	ORDER BY p.post_id
LIMIT 1000;

SELECT * FROM users LIMIT 1000;
