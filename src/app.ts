import express, { Application, Request, Response } from "express";
// import corse from "cors";
import { globalErrorHandler } from "./middleware/globalErrorHandler";
import { notFound } from "./middleware/notFound";
import router from "./routes";
const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(
//   corse({
//     origin: "*", // Allow all origins for simplicity, adjust as needed
//   })
// );

//routes
// app.use("/api/v1", router);




app.get("/", (req: Request, res: Response) => {
  res.send("Hey, Im working fine :)");
});

//middleware

app.use(globalErrorHandler);
app.use(notFound);

export default app;
