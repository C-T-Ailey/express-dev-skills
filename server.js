//const { response, request, query } = require("express");
const express = require("express");

// Creating an instance of Express on the server
const app = express();

// Tell the server to listen on this port
const port = 3000;

// Body Parser
app.use(express.urlencoded({extended: true}));

const indexRouter = require("./routes/index");
const skillsRouter = require("./routes/skills");

app.use("/", indexRouter);
app.use("/", skillsRouter);

app.listen(port, function(){
    console.log(`Express app is listening on port ${port}.`)
});