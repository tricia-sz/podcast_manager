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
  const content = await serviceFilterEpisodes("Teste")
  res.writeHead(200, {'content-type': 'application/json'});
  res.end(JSON.stringify(content))
}