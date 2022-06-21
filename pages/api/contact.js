// Import Utilities Functions
import { connectMongoDB, insertDocument } from "../../helpers/mongodb-util";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({
        message: "Invalid Input!",
      });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    // Connect to a database
    let client;
    try {
      client = await connectMongoDB();
    } catch (err) {
      res.status(500).json({
        message: "Failed to connect to the database.",
      });
      return;
    }

    const db = client.db();

    // Store it in a database
    try {
      const result = await insertDocument(db, "messages", newMessage);
      newMessage.id = result.insertedtID;
    } catch (err) {
      client.close();
      res.status(500).json({
        message: "Failed to store message!",
      });
      return;
    }

    // Close Database Connection
    client.close();

    res.status(201).json({
      message: "Successfuly stored message!",
    });
  }
}

export default handler;
