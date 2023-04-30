import Link from "next/link";

import styles from "./card.module.scss";

type Props = {
  id: string;
  title?: string;
  description?: string;
  categoryId?: string;
  categoryName?: string;
};

export const Card: React.FC<Props> = ({
  id,
  title,
  description,
  categoryId,
  categoryName,
}) => {
  return (
    <div className={styles.card}>
      <Link href={`/jobs/${id}`}>
        <h3 className={styles.title}>{title}</h3>
      </Link>
      <p className={styles.description}>{description}</p>
      <Link href={`/categories/${categoryId}`}>
        <span className={styles.categoryName}>#{categoryName}</span>
      </Link>
    </div>
  );
};
