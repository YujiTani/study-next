import Links from '../Links';
import classes from './Main.module.css';

export default function Main() {
  return (
    <main className={classes.main}>
      <h1 className={classes.title}>
        Welcome to <a href='https://nextjs.org'>Next.js!</a>
      </h1>

      <p className={classes.description}>
        Get started by editing{' '}
        <code className={classes.code}>pages/index.js</code>
      </p>
      <Links />
    </main>
  );
}
