const express = require("express")
const app = express()
app.set("view engine", "ejs");
app.use(express.static("static"));


app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));


const Router = require("./routes/index")

app.use("/", Router)


app.listen(3000, () => {
    console.log("hi fawzi the server is runing at :3000")
})