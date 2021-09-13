const express = require("express");
const router = express.Router();
import { Request, Response } from "express";

interface optionsInterface {
  weekday?: "long" | "short" | "narrow";
  month?: "numeric" | "2-digit" | "long" | "short" | "narrow";
  day?: "numeric" | "2-digit";
}

let items: string[] = [
  "do robin wieruch React",
  "be the best in node",
  "become a king",
];

/* GET home page. */
router.get("/", function (req: Request, res: Response) {
  let today = new Date();
  let options: optionsInterface = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };

  //returns the date format like Monday, September 13
  let now = today.toLocaleDateString("en-US", options);

  res.render("list", { day: now, listitems: items });
});

//Post Request
router.post("/", (req: Request, res: Response) => {
  //save what was typed in the form
  let item = req.body.newItem;
  //push it to our items variable
  items.push(item);
  //redirect to home route
  res.redirect("/");
});

export default router;
