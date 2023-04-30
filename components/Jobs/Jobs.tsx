import { JobType } from "@/libs/microcms";
import { Card } from "@/components/Card";

import styles from "./jobs.module.scss";

type Props = {
  jobs: JobType[];
};

export const Jobs: React.FC<Props> = ({ jobs }) => {
  return (
    <div className={styles.jobs}>
      <div className={styles.inner}>
        {jobs.length === 0 ? (
          <div className={styles.notFound}>現在求人がありません</div>
        ) : (
          <>
            {jobs.map((job) => (
              <Card
                key={job.id}
                id={job.id}
                title={job.title}
                description={job.description}
                categoryId={job.category?.id}
                categoryName={job.category?.name}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};
