const express = require('express');
const app = express();
const colors = require('colors');
const port = 3000;
const cors = require('cors');
require('./Config/ConfigDB');
const dotenv = require('dotenv');
dotenv.config();
const userRoutes = require('./Routes/userRoutes');

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  res.status(200).send('Server is running fine !!');
});
app.use("/auth", userRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}..`.bgGreen.black);
});
