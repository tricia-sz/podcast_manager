import {IncomingMessage, ServerResponse} from 'http';
import {serviceListEpisodes} from '../services/list-eposodes-service'
import { serviceFilterEpisodes } from '../services/filter-episodes';

export const getListEpisodes  = async (req: IncomingMessage, res: ServerResponse) => {
  // listar podcasts
  const content = await serviceListEpisodes()
  res.writeHead(200, {'content-type': 'application/json'});
  res.end(JSON.stringify(content))
};

export const getFilterEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
  const queryString = req.url?.split("?p=")[1] ?? "";

  const content = await serviceFilterEpisodes(queryString)
  res.writeHead(200, {'content-type': 'application/json'});
  res.end(JSON.stringify(content))
}