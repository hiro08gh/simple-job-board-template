import Link from "next/link";

import styles from "./card.module.scss";

type Props = {
  id: string;
  title?: string;
  description?: string;
  categoryName?: string;
};

export const Card: React.FC<Props> = ({
  id,
  title,
  description,
  categoryName,
}) => {
  return (
    <div className={styles.card}>
      <Link href={`/jobs/${id}`}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <span className={styles.categoryName}>#{categoryName}</span>
      </Link>
    </div>
  );
};
