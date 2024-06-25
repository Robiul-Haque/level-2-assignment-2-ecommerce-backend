// getting-started.js
import mongoose from "mongoose";
import app from "./app";
import config from "./config";
import { Server } from 'http';
let server: Server;

async function main() {
  try {
    await mongoose.connect(config.DB_URL as string);
    server = app.listen(config.PORT, () => {
      console.log(`E-com app listening on port ${config.PORT}`)
    })
  } catch (error) {
    console.log(error);
  }
}

main();