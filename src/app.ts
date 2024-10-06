import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import http from "http";
import { router } from "@infrastructure/web/routes";
const PORT = process.env.PORT || 8009;

const app = express();
const httpServer = http.createServer(app);

app.use(cors({origin:"*"}));
app.use(router);
httpServer.listen(PORT,function(){
    console.log(`listening on port ${PORT}...`);
});
