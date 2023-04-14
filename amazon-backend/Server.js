import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express'
import http from 'http';
const app = express();
const port = process.env.PORT || 9000

app.use(express.json());
 

app.get('/', (req,res) => res.status(200).send('hello world'));


app.listen(port, () => console.log(`listening on localhost:${port}`));

