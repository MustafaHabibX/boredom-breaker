import axios from "axios";
import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

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

app.post("/", async (req, res) => {
  try {
    // Using the public API via Axios with specific parameters specified with queries
    const selectedType = req.body.type;
    const selectedParticipants = parseInt(req.body.participants);

    const specificResponse = await axios.get(
      `https://bored-api.appbrewery.com/filter/?type=${selectedType}&participants=${selectedParticipants}`
    );

    // Storing the data that came from the API
    const result = specificResponse.data;

    // Calculation for randomly selecting one of the returned answers from the array of result that we had
    let randomNumber = Math.floor(Math.random() * result.length);

    // Rnadomly sending of of the results
    res.render("index.ejs", { data: result[randomNumber] });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: "No activities that match your criteria.",
    });
  }
});

// Server is listening on the specified port
app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
