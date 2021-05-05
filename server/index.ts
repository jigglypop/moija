import express from 'express'
import { createServer } from "http";
import { config } from 'dotenv'
import cors from 'cors'
import { sequelize } from './models';
import rootRouter from './routers'
import cookieParser from 'cookie-parser'
import bodyParser from "body-parser";


config()
sequelize.sync()
const app = express()
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser())
// 루트 라우터


app.use(rootRouter)
const server = createServer(app)
server.listen(3000)
module.exports = {
  path: '/api', handler: app
}
