import express, { json } from 'express';
import mainRouter from './routes';
import errorHandlder from './middlewares/error-handler';

// import './models/database/sync-db';

const app = express();

app.disable('x-powered-by');
app.use(json());

app.use('/v1/api', mainRouter);

app.use(errorHandlder);

export default app;
