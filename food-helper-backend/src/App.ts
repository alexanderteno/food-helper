import * as express from 'express';
import MongoAdapter from './MongoDB/MongoAdapter';

class App {

  public express;
  public mongoAdapter;

  constructor() {
    this.express = express();
    this.mountRoutes();

    this.mongoAdapter = new MongoAdapter();
  }

  private mountRoutes(): void {

    const router = express.Router();

    router.get('/', (req, res) => {
      res.json({
        message: 'Hello World!',
      });
    });

    router.get('/open', (req, res) => {
      if (this.mongoAdapter.database) {
        res.json({
          message: 'A connection already exists',
        });
      } else {
        this.mongoAdapter.open();
        res.json({
          message: 'Connection established',
        });
      }
    });

    router.get('/connection', (req, res) => {
      if (this.mongoAdapter.database) {
        res.json({
          message: 'Connection active',
        });
      } else {
        res.json({
          message: 'Connection not established',
        });
      }
    });

    router.get('/close', (req, res) => {
      if (this.mongoAdapter.database) {
        this.mongoAdapter.close();
        res.json({
          message: 'Database connection closed',
        });
      } else {
        res.json({
          message: 'No connection to close',
        });
      }
    });

    this.express.use('/', router);

  }

}

export default new App().express;
