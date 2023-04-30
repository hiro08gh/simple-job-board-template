import { JobType } from "@/libs/microcms";

import styles from "./jobDetail.module.scss";

type Props = {
  job: JobType;
};

export const JobDetail: React.FC<Props> = ({ job }) => {
  return (
    <div className={styles.job}>
      <h1 className={styles.title}>{job.title}</h1>
      <p className={styles.categoryName}>#{job?.category?.name}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${job.content}`,
        }}
        className={styles.content}
      />
    </div>
  );
};
