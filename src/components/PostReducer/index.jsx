import { useCallback, useEffect, useReducer } from 'react';
import classes from './Post.module.css';

export default function PostReducer() {
  const initialArg = {
    posts: [],
    fetching: true,
    error: null,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'end':
        return {
          ...state,
          posts: action.posts,
          fetching: false,
        };
      case 'error':
        return {
          ...state,
          fetching: false,
          error: action.error,
        };
      default:
        throw new Error('No such action type!');
    }
  };

  const [state, dispatch] = useReducer(reducer, initialArg);

  const getPosts = useCallback(async () => {
    try {
      const responce = await fetch('https://jsonplaceholder.typicode.com/posts');

      if (!responce.ok) {
        throw new Error('データ取得に失敗しました。');
      }
      const responceJson = await responce.json();
      await dispatch({ type: 'end', posts: responceJson });
    } catch (error) {
      dispatch({ type: 'error', error });
    }
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  if (state.fetching) {
    return <h2 style={{ textAlign: 'center' }}>データ取得中...</h2>;
  }

  if (state.error) {
    return <h2 style={{ textAlign: 'center' }}>エラーが発生しました。</h2>;
  }

  if (state.posts.length === 0) {
    return <h2 style={{ textAlign: 'center' }}>データがありません。</h2>;
  }

  return (
    <ul>
      {state.posts.map((post) => {
        return (
          <ol key={post.id} className={classes.postWrapper}>
            <p>{post.title}</p>
            <p>{post.body}</p>
          </ol>
        );
      })}
    </ul>
  );
}
