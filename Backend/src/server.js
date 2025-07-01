import express from 'express';
import notesRoutes from './routes/notesRoutes.js'
import path from 'path';
import { fileURLToPath } from 'url';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import rateLimiter from './middleware/rateLimiter.js';
import cors from 'cors'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;

// Middleware functions
app.use(express.json());
// app.use(cors())
if(process.env.NODE_ENV !== 'production') {
  app.use(cors());
}
app.use(rateLimiter);
app.use('/api/notes', notesRoutes);

// Serve static files in production
if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../../Client/dist')));
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../Client/dist/index.html'));
  });
}

//connecting to DateBase and after that Start the server 
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on PORT : ${PORT}`)
  })
})



