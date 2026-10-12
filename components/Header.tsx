import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span className={styles.icon}>🔥</span>
        <span>WILD</span>
      </div>
      <button className={styles.burger} aria-label="Меню">
        <span></span><span></span><span></span>
      </button>
    </header>
  );
}