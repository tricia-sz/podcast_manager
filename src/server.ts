import * as http from "http"
import { getFilterEpisodes, getListEpisodes } from "./controllers/podcasts-controller";
import { Routes } from "./routes/routes";

const server = http.createServer( 
  async (req: http.IncomingMessage, res: http.ServerResponse) => { 

    //queryString
    //http://localhost:3333/api/episode?=teste

    const [baseUrl, quaryString] = req.url?.split("?") ?? [", "];
   console.log(baseUrl);
   console.log(quaryString);
   
    
    //listar podecasts
    if(req.method === "GET" && baseUrl ===  Routes.LIST) {
     await getListEpisodes(req, res);
    }
    
    if(req.method === "GET" && baseUrl === Routes.EPISODE) {
     await getFilterEpisodes(req, res);
    }
  }
);

const port = process.env.PORT

server.listen(port, () => {
  console.log(`Servidor iniciado na porta: ${port}`);
  
})
