const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
const cors = require("cors"); 
const Routes = require("./routes/routes");

app.use(express.json());
app.use("/", Routes);
app.use(cors());  


const startServer = () => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();
