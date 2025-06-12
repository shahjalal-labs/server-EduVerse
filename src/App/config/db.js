import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from "dotenv";
dotenv.config();
//email: healtcare alluser
const uri = process.env.MONGODB_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let db;
export async function connectToDb() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    db = client.db("EduVerse");
    console.log(
      "Alhamdulillah, MongoDB is connected  and the server is running!",
    );
  } catch (err) {
    console.log("❌ Failed to connect to MongoDB:", err);
  }
}

export const getDb = () => {
  if (!db) {
    throw new Error("❌ DB is not connected, please call connectToDB first");
  }
  return db;
};
