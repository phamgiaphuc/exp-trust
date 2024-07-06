"use strict";

import mongoose from "mongoose";

const connectString = `mongodb+srv://admin:123@cluster0.aeysnuj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

class Database {
  constructor() {
    this.connect();
  }
  connect(type = "mongodb") {
    if (1 === 1) {
      mongoose.set("debug", true);
      mongoose.set("debug", { color: true });
    }
    mongoose
      .connect(connectString, {
        maxPoolSize: 100,
      })
      .then(() => {
        console.log("Connect Mongodb Successed");
      })
      .catch((err: Error) => console.log(err));
  }
}

const instanceMongodb = new Database();

module.exports = instanceMongodb;
