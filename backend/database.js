const mongoose = require("mongoose");
require("dotenv").config();
const URI = process.env.MONGO_URI;
// const URI = "mongodb+srv://usuariointegrar:integrar2023@cluster-integrar.st3f8ug.mongodb.net/";

mongoose
  .connect(URI)
  .then((db) => console.log("DB is connected"))
  .catch((err) => console.error(err));
module.exports = mongoose;
