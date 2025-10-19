import styles from "./MovieUpcomingCard.module.css";

type Props = {
  data: {
    title: string;
    subtitle: string;
    image: string;
    typeLeft: string;
  };
};

export default function MovieUpcomingCard({ data }: Props) {
  return (
    <div className={styles.card}>
      <img src={data.image} alt={data.title} className={styles.poster} />
      <div className={styles.type}>
        <div className={styles.left}>{data.typeLeft}</div>
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{data.title}</h3>
        <span className={styles.subtitle}>{data.subtitle}</span>
      </div>
    </div>
  );
}
