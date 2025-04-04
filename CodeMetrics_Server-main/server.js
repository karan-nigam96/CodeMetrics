import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'; 
import authRouter from './routes/auth_routes.js';
import userRouter from './routes/user_routes.js';
import mongoose from 'mongoose';
dotenv.config();
const app = express();

const uri = process.env.MONGO_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(
    cors({
      origin: "*",
      methods: ["GET", "POST", "DELETE", "PUT"],
      allowedHeaders: [
        "Content-Type",
        "Authorization",
        "Cache-Control",
        "Expires",
        "Pragma",
      ],
      credentials: true,
    })
  );
  

app.use(express.json());
app.use("/api/auth", authRouter);  
app.use("/api/user", userRouter);  

app.listen(process.env.PORT, () => {
    console.log(`Server is running on PORT ${process.env.PORT}`);
});
