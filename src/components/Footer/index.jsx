import Image from 'next/image';
import classes from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <a
        href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
        target='_blank'
        rel='noopener noreferrer'
      >
        Thanks by{' '}
        <span className={classes.logo}>
          <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
        </span>
      </a>
    </footer>
  );
}
