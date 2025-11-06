import axios from "axios";
import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    // Using axios.get to fetch a random activity from the bored public API
    const response = await axios.get("https://bored-api.appbrewery.com/random");
    const result = response.data;
    res.render("index.ejs", { data: result });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
});

// Server is listening on the specified port
app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
