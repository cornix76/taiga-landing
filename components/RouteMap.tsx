import styles from './RouteMap.module.css';

export default function RouteMap() {
  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <h2 className={styles.title}>ПО ЛЕСАМ И ГОРАМ</h2>
        <p className={styles.subtitle}>205 КМ ЗА 4 ДНЯ — РАЗБУДИ В СЕБЕ ЗВЕРЯ</p>
        <div className={styles.line}></div>
        <p className={styles.paragraph}>
          Вас сбрасывают с вертолёта в глухой тайге. С собой у Вас будет всё необходимое, и ничего лишнего: компас, прочная одежда, нож, топор, сухпаек на 2 дня.
        </p>
        <p className={styles.paragraph}>И инстинкт самосохранения.</p>
        <div className={styles.image}>
          <img src="/knife.jpg" alt="Нож" />
        </div>
      </div>
    </section>
  );
}