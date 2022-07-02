import { useCallback, useState } from 'react';
import classes from './Todo.module.css';

export default function Todo() {
  const [text, setText] = useState('');
  const [seachWord, setSeachWord] = useState('');
  const [error, setError] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [seachedTodoList, setSeachedTodoList] = useState([]);

  const changeText = useCallback(
    (e) => {
      setText(e.target.value);
    },
    [text]
  );

  const clickEnter = useCallback(
    (e) => {
      if (e.keyCode === 13) {
        // Enterを押されたら、TodoListへの追加を実行

        if (e.target.value === '') {
          textValidate('テキストを入力してください。');
          return;
        }

        if (e.target.value.length > 20) {
          textValidate('テキストは20文字以内入力してください。');
          return;
        }

        if (todoList.some((item) => item === e.target.value)) {
          textValidate('既に同じ名前のタスクが存在します。');
          return;
        }

        setTodoList((prevTodoList) => {
          const newTodoList = [...prevTodoList, text];
          setText('');
          return newTodoList;
        });
      }
    },
    [text, todoList]
  );

  const textValidate = useCallback(
    (errorText) => {
      setError('');
      setError(errorText);
    },
    [error]
  );

  const removeList = useCallback(
    (todoName) => {
      setTodoList((prevTodoList) => {
        const removedTodoList = prevTodoList.filter((item) => item !== todoName);
        return removedTodoList;
      });
      setError('');
    },
    [todoList]
  );

  const removeSeachedTodoList = useCallback((todoName) => {
    setTodoList((prevTodoList) => {
      const removedTodoList = prevTodoList.filter((item) => item !== todoName);
      return removedTodoList;
    });

    setSeachedTodoList((prevTodoList) => {
      const removedTodoList = prevTodoList.filter((item) => item !== todoName);
      return removedTodoList;
    });

    setError('');
  }, []);

  const changeSeachWord = useCallback(
    (e) => {
      setSeachWord(e.target.value);
      setSeachedTodoList(todoList.filter((item) => item.includes(e.target.value)));
    },
    [seachWord]
  );

  return (
    <div className={classes.inputContainer}>
      <label className={classes.inputLabel} htmlFor='todoInput'>
        {!seachWord ? '新しいタスクを入力' : '検索中は入力できません'}
        <input
          id='todoInput'
          className={classes.input}
          type='text'
          value={text}
          onChange={changeText}
          onKeyDown={clickEnter}
          disabled={seachWord}
        />
        <p className='errorMessage'>{error}</p>
      </label>
      <input
        className={classes.input}
        type='text'
        placeholder='タスクを検索'
        value={seachWord}
        onChange={changeSeachWord}
      />

      <ul className={classes.todoWrapper}>
        {todoList.length > 0 ? (
          seachWord ? (
            seachedTodoList.map((item) => {
              return (
                <li key={item} className={classes.link}>
                  <p className={classes.text}>{item}</p>
                  <button
                    className={classes.deleteButton}
                    onClick={() => removeSeachedTodoList(item)}
                  >
                    削除
                  </button>
                </li>
              );
            })
          ) : (
            todoList.map((item) => {
              return (
                <li key={item} className={classes.link}>
                  <p className={classes.text}>{item}</p>
                  <button className={classes.deleteButton} onClick={() => removeList(item)}>
                    削除
                  </button>
                </li>
              );
            })
          )
        ) : (
          <p className={classes.noneMessage}>タスクはまだありません。</p>
        )}
      </ul>
    </div>
  );
}
