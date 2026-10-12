import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>ТАЙГА</h1>
        <p className={styles.subtitle}>Проверь себя на прочность в лесах Сибири</p>
        <button className={styles.cta}>БРОСИТЬ ВЫЗОВ</button>
      </div>
    </section>
  );
}