import styles from "./hero.module.css";

export const Hero: React.FC = () => {
  return (
    <div className={styles.container}>
      <img className={styles.img} src="/hero.jpg" alt="" />
    </div>
  );
};
