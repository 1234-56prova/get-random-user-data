const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const dbConnect = require("./utlis/dbConnect");
const toolsRoutes = require('./routes/v1/tools.route');
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
dbConnect();

app.use('/api/v1/tools', toolsRoutes);


app.get("/", (req, res) => {

  res.render('test.ejs', {
    id: 5
  });

});

app.all('*', (req, res) => {

  res.send('NO ROUTE FOUND');

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


