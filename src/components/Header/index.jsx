import Link from 'next/link';
import classes from './Header.module.css';

export default function Header(props) {
  return (
    <header className={classes.header}>
      <h1 className={classes.title}>{props.title}</h1>
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
        <Link href='/post'>
          <a className={classes.linkButton}>Post</a>
        </Link>
        <Link href='/post'>
          <a className={classes.linkButton}>Post</a>
        </Link>
        <Link href='/post'>
          <a className={classes.linkButton}>Post</a>
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
