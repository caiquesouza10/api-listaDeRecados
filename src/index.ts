import express from "express";
import { usersRoutes } from "./routes/users.routes";
import cors from "cors";


const app = express();
app.use(cors({origin:'*'}))
app.use(express.json());

app.use("/user", usersRoutes());

app.listen(3333, () => {
  console.log("API is running Recados");
});
