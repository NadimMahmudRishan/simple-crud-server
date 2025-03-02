const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;
const app = express();

// rishan35952
// kFEens8Rjmmdwv8h

app.use(cors());
app.use(express.json());

// Start

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://rishan35952:kFEens8Rjmmdwv8h@cluster0.bpllr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // const userCollection = client.db('usersDB').collection('users');
    const database = client.db("usersDB");
    const userCollection = database.collection("users");

    app.get("/users", async (req, res) => {
      const cursor = userCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    app.post("/users", async (req, res) => {
      const user = req.body;
      console.log("New user : ", user);
      const result = await userCollection.insertOne(user);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

// end

app.get("/", (req, res) => {
  res.send("SIMPLE CRUD IS RUNNING");
});

app.listen(port, () => {
  console.log(`CRUD in running on port : ${port}`);
});
