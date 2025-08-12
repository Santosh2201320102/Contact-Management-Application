const express = require("express");
const errorHandler = require("./Middleware/errorHandler");
const dbConnect = require("./Config/dbConnection")
const dotenv = require("dotenv").config();

dbConnect();
const app = express();





const port = process.env.PORT || 8000;

//middleware
app.use(express.json()); //inBuilt middleware
app.use("/api/contacts" , require('./Routes/ContactRoute'));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
