const express = require("express");
const server = express();
const carsRouter = require("./Routers/carsRouter");
server.use(express.json());


server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({errorMessage:"Something went wrong!"})
})

server.use("/cars", carsRouter);

server.listen(5000,() =>{
    console.log("API running on port 5000")
})