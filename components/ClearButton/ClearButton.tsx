import styles from "./clearButton.module.scss";

export const ClearButton: React.FC = () => {
  return (
    <a href="/api/clear" className={styles.clearButton}>
      プレビューのクリア
    </a>
  );
};
