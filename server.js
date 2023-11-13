const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");

const app = express();
const apiInfoRouter = require("./routes/apiInfoRotes");
const authRouter = require("./routes/authRoutes");
const adRouter = require("./routes/adRoutes");

app.use(express.json({ limit: "10mb" }));
app.use(morgan("dev"));
app.use(cors());
app.use(express.static(path.join(__dirname, ".", "public")));
app.get("/*", function (req, res) {
	res.sendFile(path.join(__dirname, "public"));
});
app.use("/api/v1/info", apiInfoRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/ad", adRouter);

module.exports = app;
