import express from 'express';
import dotenv from 'dotenv';
import { errorHandler } from './middlewares/errorHandler';
import { performanceMiddleware } from './middlewares/perfomanceLogger';
import tickRouter from './routes/tick';
dotenv.config();
const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.json());
app.use(performanceMiddleware)
app.use('/api', tickRouter)

app.get('/', (req, res) => {
    res.json({ message: `Telex integration API` })
});

app.all('*', (req, res) => {
    res.status(404).json({ message: 'Page Not Found' })
});

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});