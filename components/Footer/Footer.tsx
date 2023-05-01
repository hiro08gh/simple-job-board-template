import { meta } from "@/libs/meta";
import styles from "./footer.module.scss";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <footer className={styles.title}>Copyright ©︎ {meta.title}.</footer>
      </div>
    </footer>
  );
};
