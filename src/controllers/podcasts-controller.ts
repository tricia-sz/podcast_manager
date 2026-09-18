import {IncomingMessage, ServerResponse} from 'http';

export const getListEpisodes  = async (req: IncomingMessage, res: ServerResponse) => {
  res.writeHead(200, {'content-type': 'application/json'});
  res.end(JSON.stringify([

    {
      podcastName: "Epifania",
      episode: "TODA HISTÓRIA DA FILOSOFIA - Parte 1",
      videoId: "Y9_UovLgduo",
      category: ["filosofia", "humor"]
    },
    {
      podcastName: "Epifania",
      episode: "TODA HISTÓRIA DA FILOSOFIA - Parte 2",
      videoId: "WEe6L5HVMwk",
      category: ["filosofia", "humor"]
    },
    {
      podcastName: "Piradigmas",
      episode: "Por que você repete padrões tóxicos",
      videoId: "GW0ACNknpnA",
      category: ["filosofia", "humor"]
    },
    
  ]
  ))
}