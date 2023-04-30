import Link from "next/link";

import styles from "./header.module.scss";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.name}>
          Simple job board
        </Link>
      </div>
    </header>
  );
};
