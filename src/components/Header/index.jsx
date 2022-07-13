import Link from 'next/link';
import classes from './Header.module.css';

export default function Header(props) {
  return (
    <header className={classes.header}>
      <div className={classes.linkWrapper}>
        <Link href='/'>
          <a className={classes.linkButton}>Index</a>
        </Link>
        <Link href='/about'>
          <a className={classes.linkButton}>About</a>
        </Link>
        <Link href='/todo'>
          <a className={classes.linkButton}>Todo</a>
        </Link>
        <Link href='/postreducer'>
          <a className={classes.linkButton}>PostReducer</a>
        </Link>
        <Link href='/swr'>
          <a className={classes.linkButton}>SWR</a>
        </Link>
        <Link href='/ssr'>
          <a className={classes.linkButton}>SSR</a>
        </Link>
        <Link href='/post'>
          <a className={classes.linkButton}>Post</a>
        </Link>
        <Link href='/post'>
          <a className={classes.linkButton}>Post</a>
        </Link>
      </div>
    </header>
  );
}
