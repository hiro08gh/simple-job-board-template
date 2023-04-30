import Link from "next/link";
import { CategoryType } from "@/libs/microcms";

import styles from "./categories.module.scss";

type Props = {
  categories: CategoryType[];
  categoryId?: string;
};

export const Categories: React.FC<Props> = ({ categories, categoryId }) => {
  return (
    <div className={styles.categories}>
      <div className={styles.inner}>
        <h2 className={styles.title}>募集職種</h2>
        <ul className={styles.list}>
          <li className={styles.category}>
            <Link href={`/`} className={`${!categoryId && styles.isActive}`}>
              すべて
            </Link>
          </li>
          {categories.map((category) => (
            <li key={category?.id} className={styles.category}>
              <Link
                href={`/categories/${category.id}`}
                className={`${categoryId === category.id && styles.isActive}`}
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
