
import express from "express";
import type { Request, Response } from "express";


const app = express();


app.use(express.json());

app.use(express.urlencoded({ extended: true }));


app.get("/", (req: Request, res: Response) => {
  res.json({
    message: " Express is connected with TypeScript!",
    status: "success",
    timestamp: new Date().toISOString(),
  });
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(" Express server is running!");

});
