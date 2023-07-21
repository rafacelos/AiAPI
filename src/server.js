import express from "express";
import { create } from "./bot.js";

const app = express()

app.get("/", async (req, res) => {
  try {
    const { q } = req.query
    if(!q) return res.send('error')
    
    const { data } = await create(q)
    const { choices } = data
    res.send(choices[0].message)
  } catch(e) {
    console.log(e)
  }
})

app.listen(4006)