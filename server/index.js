const express = require('express');
const bodyParser = require('body-parser');
const port = 3001;
const app = express();
const cc = require(__dirname + '/controllers/collection.js')
const random = require(__dirname + '/controllers/randomizer.js')

app.use(express.static('../public/src'))
app.use(bodyParser.json());
app.use((req, res, next) => { next() })

app.post("/api/collection/", cc.create);
app.get("/api/collection/", cc.read);
app.put("/api/collection/:id", cc.update);
app.delete("/api/collection/:id", cc.delete);
app.get("/api/collection/search", cc.search);

app.get("/api/card/", random.read);


app.listen(port, console.log(`Listening at port ${port}`));