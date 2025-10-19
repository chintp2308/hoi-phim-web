import {
  FaTelegramPlane,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.banner}>
          🇻🇳 Hoàng Sa & Trường Sa là của Việt Nam!
        </div>
        <div className={styles.container}>
          <div className={styles.branding}>
            <div className={styles.logo}>Logo</div>

            <div className={styles.socials}>
              <a href="#">
                <FaTelegramPlane />
              </a>
              <a href="#">
                <FaFacebookF />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaYoutube />
              </a>
            </div>
          </div>

          <ul className={styles.links}>
            <li>Hỏi - Đáp</li>
            <li>Chính sách bảo mật</li>
            <li>Điều khoản sử dụng</li>
            <li>Giới thiệu</li>
            <li>Liên hệ</li>
          </ul>

          <p className={styles.description}>
            HoiPhim – Phim hay cả thúng - Trang xem phim online chất lượng cao
            miễn phí Vietsub, thuyết minh, lồng tiếng full HD. Kho phim mới
            khổng lồ, phim chiếu rạp, phim bộ, phim lẻ từ nhiều quốc gia như
            Việt Nam, Hàn Quốc, Trung Quốc, Thái Lan, Nhật Bản, Âu Mỹ… đa dạng
            thể loại. Khám phá nền tảng phim trực tuyến hay nhất 2024 chất lượng
            4K!
          </p>

          <p className={styles.copyright}>© 2024 HoiPhim</p>
        </div>
      </div>
    </footer>
  );
}
