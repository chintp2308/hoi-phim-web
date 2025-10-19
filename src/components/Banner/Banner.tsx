import Navbar from "../layout/Navbar/Navbar";
import styles from "./Banner.module.css";
export default function Banner() {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.overlayLeft}></div>
      <div className={styles.overlayBottom}></div>
      <Navbar />

      <div className={styles.content}>
        <div className={styles.bannerInfo}>
          <div>
            <img src="/images/banner1.png" className={styles.bannerImage} />
          </div>
          <span className={styles.bannerSpan}>
            The Fantastic Four: First Steps
          </span>
          <div className={styles.bannerDetails}>
            <div className={styles.info}>
              <button className={styles.btn4K}>4K</button>
              <button className={styles.btnT13}>T13</button>
              <button className={styles.btnYear}>2025</button>
              <button className={styles.btnTime}>2h 10m</button>
            </div>

            <div className={styles.tags}>
              <button>Chiếu Rạp</button>
              <button>Siêu Anh Hùng</button>
              <button>Marvel</button>
              <button>Khoa Học</button>
              <button>Kỳ Ảo</button>
              <button>Phiêu Lưu</button>
            </div>
          </div>

          <div className={styles.description}>
            The Fantastic Four: First Steps (Bộ Tứ Siêu Đẳng: Bước Đi Đầu Tiên)
            kể về một gia đình của Marvel đối mặt với thử thách khó khăn, họ vừa
            phải cân bằng vai trò là anh hùng với sức mạnh của mối quan hệ gia
            đình, vừa phải bảo vệ Trái đất khỏi một vị thần không gian hung dữ
            tên là Galactus và sứ giả của hắn, Silver Surfer.
          </div>

          <div className={styles.iconBanner}>
            <div className={styles.playButton}>
              <img src="/icons/play.png" className={styles.playIcon} />
            </div>
            <div className={styles.otherButton}>
              <img src="/icons/tym.png" className={styles.likeIcon} />
              <div className={styles.divider}></div>
              <img src="/icons/info.png" className={styles.infoIcon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
