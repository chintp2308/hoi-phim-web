import styles from "./MovieCard.module.css";
type Props = {
  data: {
    title: string;
    subtitle: string;
    image: string;
    typeLeft: string;
    typeRight: string;
  };
};

export default function MovieCardContinue({ data }: Props) {
  return (
    <div className={styles.card}>
      <img src={data.image} alt={data.title} className={styles.poster} />
      <div className={styles.type}>
        <div className={styles.left}>{data.typeLeft}</div>
        <div className={styles.right}>{data.typeRight}</div>
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{data.title}</h3>
        <span className={styles.subtitle}>{data.subtitle}</span>
      </div>
    </div>
  );
}
