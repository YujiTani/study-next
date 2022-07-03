import { useCallback, useEffect, useState } from 'react';
import classes from './Post.module.css';

export default function Post() {
  const [posts, setPosts] = useState([]);

  const getPosts = useCallback(async () => {
    const responce = await fetch('https://jsonplaceholder.typicode.com/posts');
    const responceJson = await responce.json();
    setPosts(responceJson);
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <ul>
      {posts.length > 0
        ? posts.map((post) => {
            return (
              <ol key={posts.id} className={classes.postWrapper}>
                <p>{post.title}</p>
                <p>{post.body}</p>
              </ol>
            );
          })
        : 'データがありません'}
    </ul>
  );
}
