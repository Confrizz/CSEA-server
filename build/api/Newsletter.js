"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonexport = require("jsonexport");
class Newsletter {
}
Newsletter.newsletter = (req, res) => {
    console.log(req.body, jsonexport(req.body.json(), (err, csv) => {
        if (err)
            throw err;
        console.log(csv);
    }), string, res.send("Success"));
};
exports.default = Newsletter;
