import { Collection, Db, MongoClient } from "mongodb";
import UserDTO from "./dto";
const uri = "mongodb://root:rootpassword@mongod:27017";

const client = new MongoClient(uri, {
  useUnifiedTopology: true,
  authSource: "admin",
});

export class UserDAO {
  db: Db;
  coll: Collection;
  cli: MongoClient;
  constructor(client: MongoClient) {
    this.cli = client;
    this.db = this.cli.db("Ashish");
    this.coll = this.db.collection("Users");
  }

  async addUser(aud: UserDTO) {
    const prom = await this.coll.insertOne({
      name: aud.name,
      class: aud.class,
      roll: aud.roll,
    });
    return prom;
  }

  async updateUser(aud: UserDTO) {
    const prom = await this.coll.updateOne(
      { name: aud.name },
      { $set: { roll: aud.roll } }
    );
    return prom;
  }
  async deleteUser(aud: UserDTO) {
    const prom = await this.coll.findOneAndDelete({ roll: aud.roll });
    return prom;
  }
}

export default function () {
  return new Promise<UserDAO>((res, rej) => {
    client.connect().then((connectedClient) => {
      if (!connectedClient) rej(Error("Could not connect to mongo"));
      else {
        const userDao = new UserDAO(connectedClient);
        res(userDao);
      }
    });
  });
}