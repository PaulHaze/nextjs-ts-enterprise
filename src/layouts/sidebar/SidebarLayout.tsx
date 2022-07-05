import Link from 'next/link';
import styles from './SidebarLayout.module.scss';

export type SidebarLayoutProps = {};

export const SidebarLayout = () => {
  return (
    <nav className={styles.nav}>
      <p className="text-xs font-bold text-gray-400 uppercase">
        Sidebar Placeholder
      </p>
      <input className={styles.input} placeholder="Search..." />
      <Link href="/">
        <a href="/">Home</a>
      </Link>
      <Link href="/about">
        <a href="/about">About</a>
      </Link>
      <Link href="/contact">
        <a href="/contact">Contact</a>
      </Link>
    </nav>
  );
};
