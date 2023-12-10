import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import dbConnect from "./database/db.js";
import authRouter from "./routes/users.js";
const app = express();

app.use(cors());
app.use(express.json());
dotenv.config();
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
// app.use((req, res, next) => {
//     console.log("HTTP Method: " + req.method + " - URL: " + req.url);
//     next();
//   }); 
app.use(morgan("dev"));
app.use(morgan("combined"));
app.use(helmet());

app.use("/app", authRouter);

app.use("/", function(req,res,next){
    res.send("hello world")
})

dbConnect();
app.listen(8000, () =>
  console.log(`Server is running successfully on PORT 8000`)
);