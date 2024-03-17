import { log } from "console";
import { MongoClient } from "mongodb";

if (!process.env.DB_USERNAME || !process.env.DB_PASSWORD || !process.env.MONGODB_URI || !process.env.DB_NAME) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const encodedUsername = encodeURIComponent(process.env.DB_USERNAME);
const encodedPassword = encodeURIComponent(process.env.DB_PASSWORD);

// Construct the MongoDB URI using the environment variables, including the encoded credentials
const uri = `${process.env.MONGODB_URI.replace("mongodb+srv://", `mongodb+srv://${encodedUsername}:${encodedPassword}@`)}/?retryWrites=true&w=majority&appName=JaviHermosa`;



const options = {
};
console.log('MongoDB URI: ', uri);

let client;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  let globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>;
  };

  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri, options);
    globalWithMongo._mongoClientPromise = client.connect();
  }
  clientPromise = globalWithMongo._mongoClientPromise;
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise;