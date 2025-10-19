import { X } from "lucide-react";
import styles from "./MovieCardContinue.module.css";
type Props = {
  data: {
    title: string;
    subtitle: string;
    duration: string;
    image: string;
  };
};

export default function MovieCardContinue({ data }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={data.image} alt={data.title} className={styles.image} />
        <button className={styles.closeBtn}>
          {" "}
          <X className={styles.closeIcon} />
        </button>
      </div>
      <div className={styles.info}>
        <div className={styles.progressBar}>
          <div className={styles.progress} />
        </div>
        <p className={styles.duration}>{data.duration}</p>
        <h3 className={styles.title}>{data.title}</h3>
        <p className={styles.subtitle}>{data.subtitle}</p>
      </div>
    </div>
  );
}
