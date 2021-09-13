const express = require("express");
const router = express.Router();
import { Request, Response } from "express";
/* GET home page. */
router.get("/", function (req: Request, res: Response) {
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
      console.log("Error: current day is equal to :" + currentDay);
  }
  res.render("list", { day: now });
});

export default router;
