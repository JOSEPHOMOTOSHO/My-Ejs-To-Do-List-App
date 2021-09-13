"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
let items = [
    "do robin wieruch React",
    "be the best in node",
    "become a king",
];
/* GET home page. */
router.get("/", function (req, res) {
    let today = new Date();
    let options = {
        weekday: "long",
        month: "long",
        day: "numeric",
    };
    //returns the date format like Monday, September 13
    let now = today.toLocaleDateString("en-US", options);
    res.render("list", { day: now, listitems: items });
});
//Post Request
router.post("/", (req, res) => {
    let item = req.body.newItem;
    items.push(item);
    res.redirect("/");
});
exports.default = router;
//# sourceMappingURL=index.js.map