import styles from './CtaBanner.module.css';

export default function CtaBanner() {
  return (
    <section className={styles.section}>
      <img src="/berries-left.jpg" alt="" className={styles.berryLeft} />
      <div className={styles.content}>
        <h2 className={styles.title}>НАЙДИ СЕБЯ НАСТОЯЩЕГО</h2>
        <p className={styles.subtitle}>НАСТРОЙСЯ НА ВОЛНУ ПРИРОДНОЙ ЭНЕРГИИ</p>
      </div>
      <img src="/berries-right.jpg" alt="" className={styles.berryRight} />
    </section>
  );
}