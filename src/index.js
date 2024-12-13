import "dotenv/config";
import express from "express";
import cors from "cors";
import agendasRoutes from "./routes/agendasRoute.js";
import authenticate from "./database/connection.js";

authenticate();

const servidor = express();

servidor.use(cors({ origin: "*" }));

servidor.use(express.json());

servidor.use(agendasRoutes);

servidor.listen(3000, () => {
  console.log("Servidor em Execução");
});
