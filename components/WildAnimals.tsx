import styles from './WildAnimals.module.css';

export default function WildAnimals() {
  return (
    <section className={styles.section}>
      <div className={styles.text}>
        <h2 className={styles.title}>ДИКИЕ ЗВЕРИ</h2>
        <p className={styles.subtitle}>СТОЛКНОВЕНИЕ С ЖИВОТНЫМИ ИНСТИНКТАМИ</p>
        <div className={styles.line}></div>
        <p className={styles.paragraph}>
          Охраны болот, заросшие клюквой, черникой и брусникой, привлекают к себе многих зверей, птиц и насекомых.
        </p>
        <p className={styles.paragraph}>
          Ваш маршрут пролегает через места обитания оленей, лосей, лисиц, тетеревов, гадюк, пум и, конечно, бурых медведей.
        </p>
        <button className={styles.cta}>ПОБЕДИТЬ СТРАХ</button>
      </div>
      <div className={styles.image}>
        <img src="/bear.jpg" alt="Медведь" />
      </div>
    </section>
  );
}