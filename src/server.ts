import * as http from "http"
import { getFilterEpisodes, getListEpisodes } from "./controllers/podcasts-controller";

const server = http.createServer( 
  async (req: http.IncomingMessage, res: http.ServerResponse) => { 

    //queryString
    //http://localhost:3333/api/episode?=teste

    const [baseUrl, quaryString] = req.url?.split("?") ?? [", "];
   console.log(baseUrl);
   console.log(quaryString);
   
    
    //listar podecasts
    if(req.method === "GET" && baseUrl === "/api/list") {
     await getListEpisodes(req, res);
    }
    
    if(req.method === "GET" && baseUrl === "/api/episode") {
     await getFilterEpisodes(req, res);
    }
  }
);

const port = process.env.PORT

server.listen(port, () => {
  console.log(`Servidor iniciado na porta: ${port}`);
  
})
