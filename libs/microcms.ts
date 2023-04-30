import { createClient } from "microcms-js-sdk";
import type { MicroCMSQueries, MicroCMSDate } from "microcms-js-sdk";

export interface JobType extends MicroCMSDate {
  id: string;
  title?: string;
  description?: string;
  content?: string;
  category?: CategoryType;
}

export interface CategoryType extends MicroCMSDate {
  id: string;
  name?: string;
}

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN || "",
  apiKey: process.env.MICROCMS_API_KEY || "",
});

// 求人一覧を取得
export const getJobList = async (queries?: MicroCMSQueries) => {
  return client.getList<JobType>({
    endpoint: "jobs",
    queries,
  });
};

// 求人の内容を取得
export const getJobDetail = async (id: string, draftKey?: string) => {
  return client.getListDetail<JobType>({
    endpoint: "jobs",
    contentId: id,
    queries: { draftKey: draftKey ?? "" },
  });
};

// カテゴリー覧を取得
export const getCategoryList = async (queries?: MicroCMSQueries) => {
  return client.getList<CategoryType>({
    endpoint: "category",
    queries,
  });
};

// カテゴリーの内容を取得
export const getCategoryDetail = async (id: string) => {
  return client.getListDetail<CategoryType>({
    endpoint: "category",
    contentId: id,
  });
};
