import type { ReactElement } from "react";
import type { GetStaticProps } from "next";
import type { NextPageWithLayout } from "../_app";

import { Layout } from "@/components/Layout";
import { MetaContainer } from "@/components/MetaContainer";

import { getJobList, getJobDetail, JobType } from "@/libs/microcms";

import { JobDetail } from "@/components/JobDetail";

type Props = {
  job: JobType;
  preview?: boolean;
};

const JobsId: NextPageWithLayout<Props> = ({ job, preview }) => {
  return (
    <MetaContainer>
      <JobDetail job={job} />
    </MetaContainer>
  );
};

JobsId.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getStaticPaths = async () => {
  const jobs = await getJobList();
  const paths = jobs.contents.map((job) => `/jobs/${job.id}`);

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props, any, any> = async ({
  params,
  previewData,
  preview = false,
}) => {
  const id = params?.id as string;
  const draftKey = previewData?.draftKey as string;

  const data = await getJobDetail(id, draftKey);

  return {
    props: {
      job: data,
      preview,
    },
  };
};

export default JobsId;
