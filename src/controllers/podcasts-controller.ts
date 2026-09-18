import { IncomingMessage, ServerResponse } from "http";

import { ContentType } from "../utils/content-type";
import type { PodcastTransferModel } from "../models/podcast-transfer-model";
import { serviceListEpisodes } from "../services/list-eposodes-service";
import { serviceFilterEpisodes } from "../services/filter-episodes";

const defaultContent = { "Content-Type": ContentType.JSON };

export const getListEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const content: PodcastTransferModel = await serviceListEpisodes();

  res.writeHead(content.statusCode, defaultContent);
  res.write(JSON.stringify(content.body));

  res.end();
};

export const getFilterEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const content: PodcastTransferModel = await serviceFilterEpisodes(req.url);

  res.writeHead(content.statusCode, defaultContent);
  res.write(JSON.stringify(content.body));

  res.end();
};