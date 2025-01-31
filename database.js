const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://sagnikmanna537:OGjqyGRVlu3RP9UY@cluster0.d069a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient instance
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

// Connect and export the database
let db;
async function connectToDatabase() {
    try {
        await client.connect();
        console.log("Connected to MongoDB Atlas!");
        db = client.db("E-COMMERCE"); // Replace with your database name
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1); // Exit process if connection fails
    }
}

// Call the connection function when the app starts
connectToDatabase();

module.exports = {
    getDb: () => db, // Export a function to get the connected database
};