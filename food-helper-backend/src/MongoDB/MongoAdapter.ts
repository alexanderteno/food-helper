import { MongoClient } from 'mongodb';
import * as dotenv from 'dotenv';

dotenv.config();

class MongoAdapter {

  private database;

  constructor() {
    this.connect();
  }

  connect() {
    const { MONGO_HOST, MONGO_PORT, MONGO_INSTANCE } = process.env;
    const mongoUrl = `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_INSTANCE}`;
    MongoClient.connect(mongoUrl, (err, db) => {
      if (err) {
        throw err;
      }
      this.database = db;
    });
  }

  close() {
    console.log('Connection Closed!');
    this.database.close();
  }

}

export default MongoAdapter;