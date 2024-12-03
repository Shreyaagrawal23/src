const express = require("express");
const cors = require("cors");
const { connectDb } = require("./config/database")
const Job = require("./model/jobmodel")

const app = express();
app.use(cors());
app.use(express.json());


app.get("/api/jobs", async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching jobs" });
  }
});


app.post("/api/jobs", async (req, res) => {
  try {
    const job = new Job(req.body);
    await job.save();
    res.status(201).json(job);
  } catch (error) {
    res.status(400).json({ message: "Error saving job" });
  }
});

connectDb().then(() => {
    console.log("db connected ")
    app.listen(5000, () => {
        console.log("server is running on port 5000")
    })
}).catch((err)=>{
    console.log(err.message);
})
