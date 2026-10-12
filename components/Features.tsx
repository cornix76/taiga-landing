import styles from './Features.module.css';

const features = [
  {
    number: '01',
    title: 'Тайга',
    description: 'Глухие леса Сибири, куда не ступала нога человека.',
  },
  {
    number: '02',
    title: 'Горы',
    description: 'Скалы, перевалы и виды, от которых захватывает дух.',
  },
  {
    number: '03',
    title: 'Реки',
    description: 'Ледяные сибирские реки, броды и переправы.',
  },
  {
    number: '04',
    title: 'Звери',
    description: 'Встреча с бурым медведем — часть маршрута.',
  },
];

export default function Features() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>ЧТО ТЕБЯ ЖДЁТ</h2>
      <p className={styles.lead}>Четыре стихии, которые проверят тебя на прочность</p>
      <div className={styles.grid}>
        {features.map((f) => (
          <article key={f.number} className={styles.card}>
            <span className={styles.number}>{f.number}</span>
            <h3 className={styles.cardTitle}>{f.title}</h3>
            <p className={styles.cardText}>{f.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}