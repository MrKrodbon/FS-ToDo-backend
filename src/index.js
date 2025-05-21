import { initMonogDB } from './db/initMongoDB.js';
import { startServer } from './server.js';

const bootstrap = async () => {
  await initMonogDB();
  startServer();
};
bootstrap();
