"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
/* GET home page. */
router.get("/", function (req, res) {
    let today = new Date();
    let currentDay = today.getDay();
    let now = "";
    switch (currentDay) {
        case 0:
            now = "Sunday";
            break;
        case 1:
            now = "Monday";
            break;
        case 2:
            now = "Tuesday";
            break;
        case 3:
            now = "Wednesday";
            break;
        case 4:
            now = "Thursday";
            break;
        case 5:
            now = "Friday";
            break;
        case 6:
            now = "Saturday";
            break;
        default:
    }
    res.render("list", { day: now });
});
exports.default = router;
//# sourceMappingURL=index.js.map