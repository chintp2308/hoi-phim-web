import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Logo</div>

      <div className={styles.searchBox}>
        <img src="/icons/search.png" className={styles.searchIcon} />
        <input
          type="text"
          placeholder="Tìm kiếm phim, diễn viên"
          className={styles.searchInput}
        />
      </div>

      <ul className={styles.menu}>
        <li>Chủ đề</li>
        <li>Thể loại</li>
        <li>Phim lẻ</li>
        <li>Phim bộ</li>
        <li>Xem chung</li>
        <li>Quốc gia</li>
        <li>Diễn viên</li>
        <li>Lịch chiếu</li>
      </ul>
    </nav>
  );
}
