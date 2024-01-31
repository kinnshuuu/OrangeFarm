const express = require("express");
const fs = require("fs");
const csv = require("csv-parser");
const { groupBy, mapValues } = require("lodash");

const app = express();
const port = 5000;

const data = [];
fs.createReadStream("dataset.csv")
  .pipe(csv())
  .on("data", (row) => {
    data.push(row);
  })
  .on("end", () => {
    console.log("CSV file successfully processed");
  });

function calculateAverageProfit(dayData) {
  const totalProfit = dayData.reduce(
    (sum, entry) => sum + parseFloat(entry["Profit Percentage"]),
    0
  );
  return totalProfit / dayData.length;
}

function formatDate(dateString) {
  return dateString.split(" ")[0];
}

// Define API endpoints
app.get("/api/data", (req, res) => {
  const { query } = req.query;

  if (query === "1week") {
    const groupedData = groupBy(data, (entry) =>
      formatDate(entry["Timestamp"])
    );
    const last7Days = Object.keys(groupedData).slice(0, 7);

    const resultData = last7Days.map((day) => {
      const averageProfit = calculateAverageProfit(groupedData[day]);
      return {
        Date: day,
        AverageProfit: averageProfit,
      };
    });

    res.json(resultData);
  } else if (query === "1month") {
    const groupedData = groupBy(data, (entry) =>
      formatDate(entry["Timestamp"])
    );
    const last30Days = Object.keys(groupedData).slice(0, 30);

    const resultData = last30Days.map((day) => {
      const averageProfit = calculateAverageProfit(groupedData[day]);
      return {
        Date: day,
        AverageProfit: averageProfit,
      };
    });

    res.json(resultData);
  } else if (query === "1year") {
    const groupedData = groupBy(data, (entry) =>
      formatDate(entry["Timestamp"])
    );
    const last365Days = Object.keys(groupedData).slice(0, 365);

    const resultData = last365Days.map((day) => {
      const averageProfit = calculateAverageProfit(groupedData[day]);
      return {
        Date: day,
        AverageProfit: averageProfit,
      };
    });

    res.json(resultData);
  } else if (query === "all") {
    const resultData = data.map((entry) => {
      return {
        Date: entry["Timestamp"],
        ProfitPercentage: parseFloat(entry["Profit Percentage"]),
      };
    });

    res.json(resultData);
  } else {
    res.status(400).json({ error: "Invalid query parameter" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
