All routes:

NEW POST http://localhost:3000/posts
{
    "title": "My First Post",
    "content": "This is the content of my first post.",
    "author": "63f9c3a6b7eae300dc4f24d5" user's ID,
    "category": "Technologies"
}

GET ALL POSTS http://localhost:3000/posts

GET POST BY ID http://localhost:3000/posts/POST_ID

UPDATE POST http://localhost:3000/posts/POST_ID
{
    "title": "Updated Post Title",
    "content": "Updated post content.",
    "author": "63f9c3a6b7eae300dc4f24d5" post's autor ID
}

DELETE POST http://localhost:3000/posts/POST_ID
{
    "author": "63f9c3a6b7eae300dc4f24d5" post's autor ID
}

LIKE POST http://localhost:3000/posts/POST_ID/like
{
    "userId": "63f9c3a6b7eae300dc4f24d7"  ID of the user who like post
}

UNLIKE POST http://localhost:3000/posts/POST_ID/unlike
{
    "userId": "63f9c3a6b7eae300dc4f24d7"  ID of the user who unlike post
}

ADD COMMENT TO A POST http://localhost:3000/comments
{
  "postId": "POST_ID", 
  "userId": "USER_ID", 
  "content": "Write your comment"
}

GET POST`S COMMENT http://localhost:3000/comments/POST_ID

DELETE COMMENT http://localhost:3000/comments/COMMENT_ID

GET POSTS FROM ONE CATEGORY http://localhost:3000/posts/category/CATEGORY_NAME



