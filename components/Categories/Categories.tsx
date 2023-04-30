import Link from "next/link";
import { CategoryType } from "@/libs/microcms";

import styles from "./categories.module.scss";

type Props = {
  categories: CategoryType[];
};

export const Categories: React.FC<Props> = ({ categories }) => {
  return (
    <div className={styles.categories}>
      <h2 className={styles.title}>募集職種</h2>
      <ul className={styles.list}>
        <li className={styles.category}>
          <Link href={`/`} className={styles.isActive}>
            すべて
          </Link>
        </li>
        {categories.map((job) => (
          <li key={job?.id} className={styles.category}>
            <Link href={`/categories/${job.id}`}>{job.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
