import Link from "next/link";
import { JobType } from "@/libs/microcms";

import styles from "./jobDetail.module.scss";

type Props = {
  job: JobType;
};

export const JobDetail: React.FC<Props> = ({ job }) => {
  return (
    <div className={styles.job}>
      <h1 className={styles.title}>{job.title}</h1>
      <Link href={`/categories/${job.category?.id}`}>
        <span className={styles.categoryName}>#{job?.category?.name}</span>
      </Link>
      <div
        dangerouslySetInnerHTML={{
          __html: `${job.content}`,
        }}
        className={styles.content}
      />
    </div>
  );
};
