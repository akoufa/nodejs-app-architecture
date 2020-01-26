import mongoose from 'mongoose';

export class Database {
  mongo?: mongoose.Mongoose;

  constructor(private readonly connectionString: string) {}

  async connect() {
    this.mongo = await mongoose.connect(this.connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }

  async disconnect() {
    if (this.mongo) {
      await this.mongo.disconnect();
    }
  }
}
