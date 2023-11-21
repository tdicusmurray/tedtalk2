// db.js

const { MongoClient } = require('mongodb');

const dbUrl = 'mongodb://localhost:27017'; // Replace with your MongoDB URL
const dbName = 'your-database-name'; // Replace with your database name

let client;

async function connectToDatabase() {
  if (!client) {
    client = new MongoClient(dbUrl, { useUnifiedTopology: true });

    try {
      await client.connect();
      console.log('Connected to the database');
    } catch (error) {
      console.error('Error connecting to the database:', error);
      throw error;
    }
  }

  return client.db(dbName);
}

module.exports = {
  connectToDatabase,
};
