import express from 'express';
import cors from 'cors';
import ogRoute from './routes/og.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/og", ogRoute);

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});