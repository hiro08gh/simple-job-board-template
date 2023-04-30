import styles from "./heroImage.module.css";

export const HeroImage: React.FC = () => {
  return (
    <div className={styles.heroImage}>
      <img className={styles.image} src="/hero.jpg" alt="" />
    </div>
  );
};
