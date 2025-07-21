import styles from './styles.module.css';

type DefaultButtonProps = {
  icon: React.ReactNode;
  state?: 'start' | 'stop';
} & React.ComponentProps<'button'>;

export function DefaultButton({
  icon,
  state = 'start',
  ...props
}: DefaultButtonProps) {
  return (
    <>
      <button className={`${styles.button} ${styles[state]}`} {...props}>
        {icon}
      </button>
    </>
  );
}
