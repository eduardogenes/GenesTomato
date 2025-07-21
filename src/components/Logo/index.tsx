import { Icon } from './Icon';
import styles from './styles.module.css';

export function Logo() {
  return (
    <div className={styles.logo}>
      <a className={styles.logoLink} href='#'>
        <div className={styles.iconWrapper}>
          <Icon />
        </div>
        <span>GenesTomato</span>
      </a>
    </div>
  );
}