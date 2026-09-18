import type { PodcastModel } from "./podecast-model";

export interface PodcastTransferModel {
  statusCode: number;
  body: PodcastModel[];
}