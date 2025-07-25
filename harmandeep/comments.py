from faker import Faker
import random
from datetime import datetime

fake = Faker('en_US')

NUM_POSTS = 50000
COMMENTS_PER_POST = 5
NUM_USERS = 50000

def generate_comments_sql():
    comment_id = 1
    sql_lines = []

    for post_id in range(1, NUM_POSTS + 1):
        for _ in range(COMMENTS_PER_POST):
            user_id = random.randint(1, NUM_USERS)
            comment_content = fake.sentence(nb_words=12).replace("'", "''")
            created_at = fake.date_time_between(start_date='-3y', end_date='now')
            
            sql = (
                f"INSERT INTO commentss (comment_id, post_id, user_id, comment_content, createdAt) VALUES "
                f"({comment_id}, {post_id}, {user_id}, '{comment_content}', '{created_at.strftime('%Y-%m-%d %H:%M:%S')}');"
            )
            sql_lines.append(sql)
            comment_id += 1

    return sql_lines

# Write to file
comments_sql = generate_comments_sql()

with open("commentss.sql", "w", encoding="utf-8") as f:
    f.write("-- INSERT statements for 250,000 comments\n")
    f.write("-- Generated on: " + datetime.now().strftime("%Y-%m-%d %H:%M:%S") + "\n\n")
    f.write("\n".join(comments_sql))

print("✅ Generated commentss.sql with 250,000 comment INSERTs.")
