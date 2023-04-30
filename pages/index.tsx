import type { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";

import { MetaContainer } from "@/components/MetaContainer";
import { Jobs } from "@/components/Jobs";
import { Layout } from "@/components/Layout";

import {
  getJobList,
  getCategoryList,
  JobType,
  CategoryType,
} from "@/libs/microcms";

type Props = {
  jobs: JobType[];
  categories: CategoryType[];
};

const Home: NextPageWithLayout<Props> = ({ jobs }) => {
  return (
    <MetaContainer>
      <Jobs jobs={jobs} />
    </MetaContainer>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout isHeroImage={true}>{page}</Layout>;
};

export const getStaticProps = async () => {
  const jobs = await getJobList();
  const categories = await getCategoryList();

  return {
    props: {
      jobs: jobs.contents,
      categories: categories.contents,
    },
  };
};

export default Home;
