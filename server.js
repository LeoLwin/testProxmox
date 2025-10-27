const express = require("express");
const app = express();
const { getList } = require("./model")
require("./dbconfig")

app.use(express.json());


app.get("/", (req, res) => {
    console.log("hello", req.url)
    res.json("Hello this is nodejs project")
});

app.get("/list", async (req, res) => {
    const result = await getList();
    res.json(result)
})

app.listen(3000, "0.0.0.0", () => {
    console.log(`Server is litening on  http://localhost:3000`)
})