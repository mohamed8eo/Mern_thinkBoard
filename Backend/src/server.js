import express from 'express';
import notesRoutes from './routes/notesRoutes.js'
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import rateLimiter from './middleware/rateLimiter.js';
import cors from 'cors'
const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;



// Middleware functions
app.use(express.json());
app.use(cors());
app.use(rateLimiter);
app.use('/api/notes', notesRoutes);

//connecting to DateBase and after that Start the server 
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on PORT : ${PORT}`)
  })
})



