CREATE TABLE IF NOT EXISTS Users(
  user_id serial primary key,
  username varchar(200) not null,
  email varchar(300),
  user_password text not null,
  bio text,
  is_active BOOLEAN DEFAULT TRUE,
  joined_at TIMESTAMP DEFAULT NOW(),
  deleted_at TIMESTAMP
);

CREATE TABLE IF NOT EXISTS posts(
  post_id serial primary key,
  user_id INT REFERENCES Users(user_id) ON DELETE CASCADE,
  post_content text,
  timestamp date,
  is_hidden BOOLEAN DEFAULT FALSE,
  is_flagged BOOLEAN DEFAULT FALSE
);

CREATE TABLE IF NOT EXISTS commentss(
  comment_id SERIAL PRIMARY KEY,
  post_id INTEGER REFERENCES posts(post_id) ON DELETE CASCADE,
  user_id INTEGER REFERENCES users(user_id) ON DELETE CASCADE,
  comment_content TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
