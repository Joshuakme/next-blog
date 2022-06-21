// Import MongoDB Components
import { MongoClient } from "mongodb";

export async function connectMongoDB() {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clusterName}.llduo.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`
  );

  return client;
}

export async function insertDocument(db, collection, document) {
  const result = await db.collection(collection).insertOne(document);

  return result;
}
