import config from '../config/config';
import { MongoClient } from "mongodb";

const url = config.MONGO_URI;
const client = new MongoClient(url);

const listDatabases = async (client : MongoClient) => {
const databasesList = await client.db().admin().listDatabases();
console.log("Databases:")
databasesList.databases.forEach(db => console.log(db.name))
}

const getBBCnews = async () => {
    await client.connect();
    await listDatabases(client)
    console.log('Connected successfully to server');
    const db = client.db('bbabystyle');
    const collection = db.collection('bbcs')
    const news = await collection.find({}).toArray();
    console.log(news);
    return 'done';
}

getBBCnews()
.then()
.catch(console.error)
.finally(() => client.close());

export default getBBCnews;