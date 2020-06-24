const express = require("express");
const router = express.Router();
const db = require("../data/config");
const { insert } = require("../data/config");


router.get("/", async (req, res, next) => {
    try{
       const cars = await db("cars")
       res.json(cars)
    }catch(err){
        next(err)
    }
})

router.post("/", async (req, res, next) => {
    try{
        await db("cars").insert(req.body)
        const cars = await db("cars")
        res.status(201).json(cars);
    }catch(err){
        next(err)
    }
})

module.exports = router;