const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const toolsRoutes = require('./routes/v1/user.routes');
const { connectToServer } = require("./utlis/dbConnect");
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

connectToServer((err) => {
  if(!err) {
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
  } 
  else {
    console.log(err);
  }
});
app.use('/user', toolsRoutes);


app.all('*', (req, res) => {

  res.send('NO ROUTE FOUND');

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


