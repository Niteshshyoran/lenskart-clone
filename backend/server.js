const express = require("express"); 
const { connectDB } = require("./dbConfig");
const dotenv = require("dotenv");
const cors = require("cors");
const { userRouter } = require("./routes/user.routes");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());


app.use("/users", userRouter)


const port = Number(process.env.PORT) || 8000;
app.listen(port, () => {
    connectDB();
    console.log(`Server running on port ${port}`)
});