"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const Newsletter_1 = require("./api/Newsletter");
const app = express();
app.use(cors());
app.use(express.json());
app.post("/api/newsletter", Newsletter_1.default.newsletter);
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
