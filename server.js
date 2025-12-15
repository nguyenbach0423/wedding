const express = require("express");
const path = require("node:path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.get("/", (_, res) => res.sendFile(path.join(__dirname, "index-01.html")));
app.get("/about", (_, res) => res.sendFile(path.join(__dirname, "index-02.html")));

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});