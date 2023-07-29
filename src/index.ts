import express, { Express, Request, Response } from "express";


const app: Express = express();
const port:number = 4000;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server + lonng123' );
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
})