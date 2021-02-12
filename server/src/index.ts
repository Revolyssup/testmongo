import express from "express";
import bodyParser from "body-parser";

import UserDTO from "./dto";
import userDAOP, { UserDAO } from "./dao";
const app = express();
const port = process.env.PORT;

let newUser: UserDTO;

<<<<<<< HEAD
app.use(bodyParser.json())
app.get('/',async (req,res)=>{
    userDAO=await userDAOP();
    userDAO.db.collection("users").find({}).toArray().then((result)=>{
        res.json({bruh:result})
    })
=======
app.use(bodyParser.json());
>>>>>>> restructure

function main({ userDAO }: { userDAO: UserDAO }) {
  app.get("/", async (req, res) => {

    userDAO.coll
      .find({})
      .toArray()
      .then((result) => {
        res.json({ bruh: result });
      });
  });

  app.get("/getroll", async (req, res) => {
    const name = req.query.name;
    const newReq = new UserDTO(req.body.user);
    userDAO.coll
      .find({ name: name })
      .toArray()
      .then((result) => {
        let ans = result.map((usr) => usr.roll);
        res.json({ bruh: ans });
      });
  });

  app.post("/adduser", async (req, res) => {
    newUser = new UserDTO(req.body.user);
    if (newUser.validate()) {
      res.json({ status: "Invalid Add." });
      return;
    }
    console.log(newUser.name)
    userDAO.addUser(newUser).then(
      (val) => {
        res.json({ status: `${val.insertedId} added` });
      },
      (err) => {
        res.json({ status: err });
      }
    );
  });

  app.post("/updateroll", async (req, res) => {
    newUser = new UserDTO(req.body.user);
    console.log(newUser.roll)
    if (newUser.validateRoll()) {
      res.json({ status: "Invalid roll number." });
      return;
    }
    userDAO.updateUser(newUser).then(
      (val) => {
        res.json({ status: `${val.modifiedCount} added` });
      },
      (err) => {
        res.json({ status: err });
      }
    );
  });

  app.post("/rmuser", async (req, res) => {
    newUser = new UserDTO(req.body.user);
    if (newUser.validateRoll()) {
      res.json({ status: "Invalid roll number." });
      return;
    }
    userDAO.deleteUser(newUser).then((response) => {
      res.json({ deleted: response.value });
    });
  });

  app.listen(port, () => {
    console.log(`Server listening at ${port}`);
  });
}

userDAOP()
  .then((dao) => {
    main({ userDAO: dao });
  })
  .catch((err) => console.error(err));
