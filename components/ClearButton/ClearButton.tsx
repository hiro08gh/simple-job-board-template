import styles from "./clearButton.module.scss";

export const ClearButton: React.FC = () => {
  return (
    <a href="/api/clear" className={styles.clearButton}>
      下書きプレビューのクリア
    </a>
  );
};
