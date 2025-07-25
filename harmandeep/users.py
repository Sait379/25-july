import sys
from faker import Faker
import random
from datetime import datetime

# Initialize Faker
fake = Faker('en_US')

# --- Configuration ---
NUM_POSTS = 50000  # Adjust as needed
# --- End Configuration ---

def generate_posts_data(num_posts, user_id_join_dates):
    """Generates fake post data, linking to existing user IDs."""
    posts_data = []
    if not user_id_join_dates:
        print("Error: No users provided to link posts to.")
        return posts_data

    print("-- Generating Posts Data...")
    for i in range(1, num_posts + 1):
        post_id = i
        # Select a random user to associate with the post
        random_user = random.choice(user_id_join_dates)
        user_id = random_user['user_id']
        user_joined_at = random_user['joined_at']

        post_content = fake.paragraph(nb_sentences=5, variable_nb_sentences=False)
        post_timestamp = fake.date_between(start_date=user_joined_at.date(), end_date='today')

        is_hidden = fake.boolean(chance_of_getting_true=10)  # 10% hidden
        is_flagged = fake.boolean(chance_of_getting_true=5)  # 5% flagged

        # Escape single quotes in post content
        escaped_post_content = post_content.replace("'", "''")

        posts_data.append(
            f"INSERT INTO posts (post_id, user_id, post_content, timestamp, is_hidden, is_flagged) VALUES "
            f"({post_id}, {user_id}, '{escaped_post_content}', '{post_timestamp.strftime('%Y-%m-%d')}', "
            f"{str(is_hidden).upper()}, {str(is_flagged).upper()});"
        )
    return posts_data

if __name__ == "__main__":
    sys.setrecursionlimit(NUM_POSTS + 1000)

    # Simulated user_id_join_dates – replace this with your actual user data
    user_id_join_dates = [
        {'user_id': i, 'joined_at': fake.date_time_between(start_date='-5y', end_date='now')}
        for i in range(1, 50001)  # Example: 1,000 users
    ]

    # Generate Posts data
    posts_sql_statements = generate_posts_data(NUM_POSTS, user_id_join_dates)

    # Print the SQL output
    print("-- SQL INSERT statements for Posts table")
    print("-- Generated on:", datetime.now().strftime('%Y-%m-%d %H:%M:%S'))
    print("-- Number of posts:", NUM_POSTS)
    print("\n".join(posts_sql_statements))
    print("\n-- Data generation complete.")
