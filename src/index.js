import "dotenv/config";
import express from "express";
import cors from "cors";
import agendaRoutes from "./routes/agendaRoutes.js";
import authenticate from "./src/database/connection.js";
import verificarAdm from "./middleware/adminMiddleware.js";

authenticate();

const servidor = express();

servidor.use(cors({ origin: "*"}));

servidor.use(express.json());

servidor.use(agendaRoutes);

servidor.get("/admin", verificarAdm, (req, res) => {
    res.json({
        mensagem: "Acesso administrativo."
    });
});

servidor.listen(3000, () => {
    console.log("Servidor em Execução");
});


