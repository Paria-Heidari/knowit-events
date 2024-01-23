import Link from 'next/link';
import styles from '../header/header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href='/'> KnowitEvents</Link>
      </div>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <Link href='/events'>All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
