import type { ReactElement } from "react";
import type { GetStaticProps } from "next";
import type { NextPageWithLayout } from "../_app";

import { Categories } from "@/components/Categories";
import { Jobs } from "@/components/Jobs";
import { Layout } from "@/components/Layout";
import { MetaContainer } from "@/components/MetaContainer";

import {
  getJobList,
  JobType,
  CategoryType,
  getCategoryList,
} from "@/libs/microcms";

type Props = {
  jobs: JobType[];
  categories: CategoryType[];
  categoryId: string;
};

const CategoriesId: NextPageWithLayout<Props> = ({
  jobs,
  categories,
  categoryId,
}) => {
  return (
    <MetaContainer>
      <Categories categories={categories} categoryId={categoryId} />
      <Jobs jobs={jobs} />
    </MetaContainer>
  );
};

CategoriesId.getLayout = function getLayout(page: ReactElement) {
  return <Layout isHeroImage={true}>{page}</Layout>;
};

export const getStaticPaths = async () => {
  const categories = await getCategoryList();
  const paths = categories.contents.map(
    (category) => `/categories/${category.id}`
  );

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props, any, any> = async ({
  params,
}) => {
  const id = params?.id as string;
  const jobs = await getJobList({ filters: `category[equals]${id}` });
  const categories = await getCategoryList();

  return {
    props: {
      jobs: jobs.contents,
      categories: categories.contents,
      categoryId: id,
    },
  };
};

export default CategoriesId;
