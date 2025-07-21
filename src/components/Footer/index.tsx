import styles from './styles.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.aboutLink}>
        <a href='#'>Entenda a técnica pomodoro 🍅</a>
      </div>
      <a href='#' className={styles.footerLink}>
        GenesTomato &copy; {new Date().getFullYear()} - Feito com 💚
      </a>
    </footer>
  );
}
