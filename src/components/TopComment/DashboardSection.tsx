import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./DashboardSection.module.css";

export default function DashboardSection() {
  return (
    <div className={styles.dashboard}>
      <section className={styles.topComments}>
        <h3> TOP BÌNH LUẬN</h3>
        <div className={styles.sliderContainer}>
          <div className={styles.arrowBtn}>
            <ChevronLeft />
          </div>
          <div className={styles.commentSlider}>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div className={styles.commentCard} key={i}>
                <div className={styles.commentThumbnail} />
              </div>
            ))}
          </div>
          <div className={styles.arrowBtn}>
            <ChevronRight />
          </div>
        </div>
      </section>

      <div className={styles.dashboardGrid}>
        <div className={styles.cardBlock}>
          <h4>SÔI NỔI NHẤT</h4>
          <ul>
            <li>1. Ngày Không Ngủ</li>
            <li>2. Thần Đèn Ơi, Ước Đi</li>
            <li>3. Ngày Không Ngủ</li>
            <li>4. Thần Đèn Ơi, Ước Đi</li>
            <li>5. Ngày Không Ngủ</li>
          </ul>
          <span className={styles.seeMore}>Xem thêm</span>
        </div>

        <div className={styles.cardBlock}>
          <h4>YÊU THÍCH NHẤT</h4>
          <ul>
            <li>1. Ngày Không Ngủ</li>
            <li>2. Thần Đèn Ơi, Ước Đi</li>
            <li>3. Ngày Không Ngủ</li>
            <li>4. Thần Đèn Ơi, Ước Đi</li>
            <li>5. Ngày Không Ngủ</li>
          </ul>
          <span className={styles.seeMore}>Xem thêm</span>
        </div>

        <div className={styles.cardBlock}>
          <h4>THỂ LOẠI HOT</h4>
          <ul className={styles.genres}>
            <li>
              <span
                className={styles.tag}
                style={{ backgroundColor: "#742D4B" }}
              >
                Chính Kịch
              </span>
            </li>
            <li>
              <span
                className={styles.tag}
                style={{ backgroundColor: "#387FDA" }}
              >
                Lãng Mạn
              </span>
            </li>
            <li>
              <span
                className={styles.tag}
                style={{ backgroundColor: "#7356B1" }}
              >
                Tình Cảm
              </span>
            </li>
            <li>
              <span
                className={styles.tag}
                style={{ backgroundColor: "#91AB47" }}
              >
                Hài
              </span>
            </li>
            <li>
              <span
                className={styles.tag}
                style={{ backgroundColor: "#A98762" }}
              >
                Kỳ Ảo
              </span>
            </li>
          </ul>
          <span className={styles.seeMore}>Xem thêm</span>
        </div>

        <div className={styles.cardBlock} style={{ flex: 2 }}>
          <h4>BÌNH LUẬN MỚI</h4>
          <div className={styles.commentsList}>
            <div className={styles.userComment}>
              <img className={styles.avatar} src="/images/avatar.jpg" />
              <div className={styles.commentText}>
                <div className={styles.commentContent}>
                  <p className={styles.username}>Lý Nhã Kỳ</p>
                  <p className={styles.commentText1}>
                    xem lại nhớ vụ ecopark ở văn giang ngày xưa
                  </p>
                </div>
                <span className={styles.commentText2}>
                  Tôi Mộng Giữa Ban Ngày
                </span>{" "}
              </div>
            </div>
            {[1, 2, 3].map((i) => (
              <div className={styles.userComment} key={i}>
                <img className={styles.avatar} src="/images/avatar.jpg" />
                <div className={styles.commentText}>
                  <div className={styles.commentContent}>
                    <p className={styles.username}>Lý Nhã Kỳ</p>
                    <p className={styles.commentText1}>
                      T thề là coi phim nào t cũng xem tua, chỉ duy nhất phim
                      này t không...
                    </p>
                  </div>
                  <span className={styles.commentText2}>
                    Tôi Mộng Giữa Ban Ngày
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
