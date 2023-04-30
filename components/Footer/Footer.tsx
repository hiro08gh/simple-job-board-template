import styles from "./footer.module.scss";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <footer className={styles.title}>Copyright ©︎ simple job site.</footer>
      </div>
    </footer>
  );
};
