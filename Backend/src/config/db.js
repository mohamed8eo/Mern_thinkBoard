//DB connection
import mongoes from 'mongoose'
export const connectDB = async () => {
  try {
    await mongoes.connect(process.env.MONGBD_URL);
    console.log('Mongodb Connected Successfully!')
  } catch (error) {
    console.log(`Error Connecting => ${error}`);
    process.exit(1) 
  }
} 