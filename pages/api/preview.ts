import type { NextApiRequest, NextApiResponse } from "next";
import { getJobDetail } from "@/libs/microcms";

export default async function preview(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!req.query.slug || !req.query.draftKey) {
    return res.status(404).end();
  }

  const content = await getJobDetail(
    req.query.slug as string,
    req.query.draftKey as string
  );

  if (!content) {
    return res.status(401).json({ message: "Invalid slug" });
  }

  res.setPreviewData({
    slug: content.id,
    draftKey: req.query.draftKey,
  });

  res.writeHead(307, { Location: `/jobs/${content.id}` });
  res.end("Preview mode enabled");
}
