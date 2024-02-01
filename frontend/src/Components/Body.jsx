import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import { Box, Typography } from "@mui/material";
import frame from "../resources/Avatar (1).png";
import frame1 from "../resources/Avatar (2).png";
import frame2 from "../resources/Avatar (3).png";
import frame6 from "../resources/Avatar.png";
import avatar from "../resources/Frame 31.png";
import avatar1 from "../resources/Frame 32.png";
import avatar2 from "../resources/Frame 33.png";
import avatar3 from "../resources/Frame 34.png";
import avatar4 from "../resources/Frame 35.png";
import avatar5 from "../resources/Frame 36.png";
import avatar6 from "../resources/Frame 37.png";
import avatar7 from "../resources/Frame 38.png";
import bar from "../resources/Bar (2).png";
import bar1 from "../resources/Bar (1).png";
import bar2 from "../resources/Bar (3).png";
import bar3 from "../resources/Bar.png";

import year1 from "../resources/Frame 5.svg";
import axios from "axios";
import {
  ArcElement,
  Chart as ChartJS,
  Legend,
  Tooltip,
  Title,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";
import Customers from "./Customers";

ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
  ArcElement
);

const Body = () => {
  const [data1, setData1] = useState({
    labels: ["2016", "2017", "2018", "2019"],
    datasets: [
      {
        label: "Profit %",
        data: [27, 35, 56, 42],
        backgroundColor: "#25CD2566",
        borderColor: "#25CD2566, #25CD2500",
        tension: 0.4,
        fill: true,
        pointStyle: "rect",
        pointBorderColor: "blue",
        pointBackgroundColor: "#fff",
        showLine: true,
      },
    ],
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = "1year"; // Define your query here
        const response = await axios.get("https://chakr.onrender.com/api/downsampled");
        // console.log(response.data);


        // Function to restructure the data
        function restructureData(inputData) {
          const result = {
            labels: [],
            datasets: [{
              label: "Profit %",
              data: [],
              backgroundColor: "#25CD2566",
              borderColor: "#25CD2566, #25CD2500",
              tension: 0.4,
              fill: true,
              pointStyle: "rect",
              pointBorderColor: "blue",
              pointBackgroundColor: "#fff",
              showLine: true,
            }]
          };

          const dataMap = {};

          // Process each data point
          // debugger
          inputData.downsampledData.forEach(entry => {
            const year = entry.Timestamp.substring(0, 4);
            if (!dataMap[year]) {
              dataMap[year] = [];
            }
            dataMap[year].push(entry.ProfitPercentage/500);
          });

          for (const year in dataMap) {
            const averageProfit = dataMap[year].reduce((acc, val) => acc + val, 0) / (dataMap[year].length);
            result.labels.push(year);
            result.datasets[0].data.push(averageProfit);
          }

          return result;
        }

        const restructuredData = restructureData(response.data);
        console.log(JSON.stringify(restructuredData, null, 2));
        setData1(restructuredData)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const gradient = () => {
    const chartCanvas = document.getElementById("yourChartId");

    if (chartCanvas) {
      const ctx = chartCanvas.getContext("2d");
      const gradient = ctx.createLinearGradient(0, 0, 0, 200);
      gradient.addColorStop(0, "rgba(37, 205, 37, 0.4)");
      gradient.addColorStop(1, "rgba(37, 205, 37, 0.00)");
      return gradient;
    }

    return "rgba(37, 205, 37, 0.4)";
  };

  useEffect(() => {
    document.documentElement.style.setProperty("--Light-Green", "#25CD25");
  }, []);

  const data = {
    labels: [],
    datasets: [
      {
        label: "Revenue Growth",
        data: [84, 16],
        backgroundColor: ["#FFCD71", "#FFF7E8"],
        borderColor: ["#FFCD71", "#FFF7E8"],
        circumference: 180,
        rotation: 270,
      },
    ],
  };


  return (
    <div>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "25px",
          flex: "1 0 0",
          alignSelf: "stretch",
          padding: "0px 10px 0px 10px",
          // border: "2px solid red",
        }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            gap: "20px",
            flex: "1 0 0",
            alignSelf: "stretch",
            // border: "2px solid red",
          }}
        >
          {/*row 1 */}
          <Box
            style={{
              display: "flex",
              minWidth: "300px",
              minHeight: "200px",
              padding: "24px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "20px",
              flex: "1 0 0",
              alignSelf: "stretch",
              borderRadius: "16px",
              background: "var(--White, #FFF)",
              // border: "2px solid yellow",
            }}
          >
            <Typography
              style={{
                color: "var(--Black, #131313)",
                fontFamily: "Inter",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: " 600",
                lineHeight: "normal",
                letterSpacing: "-0.2px",
              }}
            >
              Revenues
            </Typography>
            <Box display="flex" align-items="baseline" gap=" 8px">
              <Typography
                style={{
                  color: "var(--Black, #131313)",
                  fontFamily: "Inter",
                  fontSize: "48px",
                  fontStyle: "normal",
                  fontWeight: " 500",
                  lineHeight: "normal",
                  letterSpacing: "-2px",
                }}
              >
                15%
              </Typography>
              <Box width="32px" height="32px" mt="10px">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M22.6667 9.33334L9.33334 22.6667M22.6667 9.33334H10.6667M22.6667 9.33334V21.3333"
                    stroke="#25CD25"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Box>
            </Box>

            <Typography
              style={{
                color: "var(--Dark-Gray, #454545)",
                fontFamily: "Inter",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: " 400",
                lineHeight: "normal",
                letterSpacing: "-0.3px",
              }}
            >
              Increase compared to last week
            </Typography>
            <Box display="flex" align-items="center" gap=" 10px" mt="40px">
              {" "}
              <Typography
                style={{
                  color: "var(--Dark-Orange, #734A00)",
                  fontFamily: "Inter",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: " 400",
                  lineHeight: "normal",
                  letterSpacing: "-0.3px",
                }}
              >
                Revenues report
              </Typography>
              <Box width="14px" height="14px">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="15"
                  viewBox="0 0 14 15"
                  fill="none"
                >
                  <path
                    d="M2.91666 7.11162H11.0833M11.0833 7.11162L8.75 9.44496M11.0833 7.11162L8.75 4.77829"
                    stroke="#734A00"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Box>
            </Box>
          </Box>
          <Box
            style={{
              display: "flex",
              minWidth: "300px",
              minHeight: "200px",
              padding: "24px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "20px",
              flex: "1 0 0",
              alignSelf: "stretch",
              borderRadius: "16px",
              background: "var(--White, #FFF)",
              // border: "2px solid red",
            }}
          >
            <Typography
              style={{
                color: "var(--Black, #131313)",
                fontFamily: "Inter",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: " 600",
                lineHeight: "normal",
                letterSpacing: "-0.2px",
              }}
            >
              Lost deals
            </Typography>
            <Box display="flex" align-items="baseline" gap=" 8px">
              <Typography
                style={{
                  color: "var(--Black, #131313)",
                  fontFamily: "Inter",
                  fontSize: "48px",
                  fontStyle: "normal",
                  fontWeight: " 500",
                  lineHeight: "normal",
                  letterSpacing: "-2px",
                }}
              >
                4%
              </Typography>
            </Box>

            <Typography
              style={{
                color: "var(--Dark-Gray, #454545)",
                fontFamily: "Inter",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: " 400",
                lineHeight: "normal",
                letterSpacing: "-0.3px",
              }}
            >
              You closed 96 out of 100 deals
            </Typography>
            <Box display="flex" align-items="center" gap=" 10px" mt="40px">
              {" "}
              <Typography
                style={{
                  color: "var(--Dark-Orange, #734A00)",
                  fontFamily: "Inter",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: " 400",
                  lineHeight: "normal",
                  letterSpacing: "-0.3px",
                }}
              >
                All deals
              </Typography>
              <Box width="14px" height="14px">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="15"
                  viewBox="0 0 14 15"
                  fill="none"
                >
                  <path
                    d="M2.91666 7.11162H11.0833M11.0833 7.11162L8.75 9.44496M11.0833 7.11162L8.75 4.77829"
                    stroke="#734A00"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Box>
            </Box>
          </Box>
          <Box
            style={{
              display: "flex",
              minWidth: "250px",
              minHeight: "200px",
              padding: "24px",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
              alignSelf: "stretch",
              borderRadius: "16px",
              background: "var(--White, #FFF)",
              // border: "2px solid var(--Dark-Orange, #734A00)", // Fix border property
            }}
          >
            <Typography
              style={{
                color: "var(--Black, #131313)",
                fontFamily: "Inter",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "normal",
                letterSpacing: "-0.2px",
              }}
            >
              Quarter goal
            </Typography>
            <Box height="140px" position="relative" display="flex" flexDirection="column">
              <Doughnut
                data={data}
                options={{
                  cutout: "80%",
                  maintainAspectRatio: false,
                }}
              />
              <Box
                position="absolute"
                // display="flex"
                top="75%"
                left="40%"
                transform="translate(-50%, -50%)"
                textAlign="center"
              >
                <Typography
                  style={{
                    color: "var(--Black, #131313)",
                    fontFamily: "Inter",
                    fontSize: "25px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "normal",
                    letterSpacing: "-2px",
                  }}
                >
                  84%
                </Typography>
                <Box display="flex" alignItems="center" gap="10px" mt="20px">
                  <Typography
                    style={{
                      color: "var(--Dark-Orange, #734A00)",
                      fontFamily: "Inter",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "normal",
                      letterSpacing: "-0.3px",
                    }}
                  >
                    All goals
                  </Typography>
                  <Box width="14px" height="14px">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="15"
                      viewBox="0 0 14 15"
                      fill="none"
                    >
                      <path
                        d="M2.91666 7.11162H11.0833M11.0833 7.11162L8.75 9.44496M11.0833 7.11162L8.75 4.77829"
                        stroke="#734A00"
                        strokeLinecap="round" // Fix property name
                        strokeLinejoin="round" // Fix property name
                      />
                    </svg>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      {/*row 2 */}

      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          gap: "20px",
          padding: "0px 10px 0px 10px",
          flex: "1 0 0",
          alignSelf: "stretch",

          // border: "2px solid  orange",
          w: "100%",
        }}
        mt="20px"
      >

        <Customers />
        <Box minWidth="45%" minHeight="300px">
          <Box
            style={{
              display: "flex",
              // minHeight: "200px",
              padding: "14px 40px",
              flexDirection: " column",
              alignItems: "flex-start",
              gap: "38px",
              flex: " 1 0 0",
              // border: "2px solid  green",
              borderRadius: "16px",
              background: "var(--White, #FFF)",
              alignSelf: "stretch",
            }}
          >
            <Box>
              <Box
                style={{
                  display: "flex",
                  gap: "280px",

                }}
              >
                <Typography
                  style={{
                    color: "var(--Black, #131313)",
                    fontFamily: "Inter",
                    fontSize: "20px",
                    fontStyle: "normal",
                    fontWeight: " 600",
                    lineHeight: "normal",
                    letterSpacing: "-0.2px",
                  }}
                >
                  Growth
                </Typography>
                <Box
                  style={{
                    alignItems: "flex-start",
                    gap: "36px",
                  }}
                >
                  <img src={year1} alt="Image Description" />{" "}
                </Box>
              </Box>
              <Box height="200px">
                <Line
                  id="yourChartId"
                  data={data1}
                  options={{
                    cutout: "1000%",
                    maintainAspectRatio: false,
                    elements: {
                      line: {
                        borderColor: "var(--Light-Green)",
                        borderWidth: 1,
                        background: gradient(),
                      },
                    },
                  }}
                />
              </Box>
            </Box>
          </Box>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
              flex: "1 0 0",
              alignSelf: "stretch",
              // border: "2px solid  yellow",
              borderRadius: "16px",
              // background: "var(--White, #FFF)",
            }}
            mt="12px"
          >
            <Box
              style={{
                display: "flex",
                padding: "16px",
                flexDirection: " column",
                alignItems: "flex-start",
                gap: "16px",
                flex: " 1 0 0",
                // border: "2px solid  blue",
                borderRadius: "16px",
                background: "var(--White, #FFF)",
                alignSelf: "stretch",
              }}
            >
              <Typography
                style={{
                  color: "var(--Mid-Gray, #7D7D7D)",
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: " 600",
                  lineHeight: "normal",
                  letterSpacing: "-0.4px",
                }}
              >
                Top month
              </Typography>
              <Typography
                style={{
                  color: "var(--Dark-Orange, #734A00)",
                  fontFamily: "Inter",
                  fontSize: "24px",
                  fontStyle: "normal",
                  fontWeight: " 600",
                  lineHeight: "normal",
                  letterSpacing: "-0.2px",
                }} mt="15px"
              >
                November
              </Typography>
              <Typography
                style={{
                  color: "var(--Orange, #FFA500)",
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: " 500",
                  lineHeight: "normal",
                  letterSpacing: "-0.2px",
                }} mt="-10px"
              >
                2019
              </Typography>
            </Box>
            <Box
              style={{
                display: "flex",
                padding: "16px",
                flexDirection: " column",
                alignItems: "flex-start",
                gap: "16px",
                flex: " 1 0 0",
                // border: "2px solid  blue",
                borderRadius: "16px",
                background: "var(--White, #FFF)",
                alignSelf: "stretch",
              }}
            >
              {" "}
              <Typography
                style={{
                  color: "var(--Mid-Gray, #7D7D7D)",
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: " 600",
                  lineHeight: "normal",
                  letterSpacing: "-0.4px",
                }}
              >
                Top year
              </Typography>
              <Typography
                style={{
                  color: "var(--Dark-Orange, #734A00)",
                  fontFamily: "Inter",
                  fontSize: "24px",
                  fontStyle: "normal",
                  fontWeight: " 600",
                  lineHeight: "normal",
                  letterSpacing: "-0.2px",
                }} mt="15px"
              >
                2023
              </Typography>
              <Typography
                style={{
                  color: "var(--Dark-Gray, #454545)",
                  fontFamily: "Inter",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: " 400",
                  lineHeight: "normal",
                  letterSpacing: "-0.3px",
                }} mt="-10px"
              >
                96K sold so far
              </Typography>
            </Box>
            <Box
              style={{
                display: "flex",
                padding: "16px",
                flexDirection: " column",
                alignItems: "flex-start",
                gap: "16px",
                flex: " 1 0 0",
                // border: "2px solid  blue",
                borderRadius: "16px",
                background: "var(--White, #FFF)",
                alignSelf: "stretch",
              }}
            >
              {" "}
              <Typography
                style={{
                  color: "var(--Mid-Gray, #7D7D7D)",
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: " 600",
                  lineHeight: "normal",
                  letterSpacing: "-0.4px",
                }}
              >
                Top buyer
              </Typography>
              <Box
                style={{
                  width: " 24px",
                  height: "24px",
                  flexShrink: "0",
                  borderRadius: "24px",
                }}
              >
                <img src={frame6} alt="no" />
              </Box>
              <Typography
                style={{
                  color: "var(--Black, #131313)",
                  fontFamily: "Inter",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: " 500",
                  lineHeight: "normal",
                  letterSpacing: "-0.3px",
                }}
              >
                Maggie Johnson
              </Typography>
              <Typography
                style={{
                  color: "var(--Dark-Gray, #454545)",
                  fontFamily: "Inter",
                  fontSize: "10px",
                  fontStyle: "normal",
                  fontWeight: " 400",
                  lineHeight: "normal",
                  letterSpacing: "-0.3px",
                }} mt="-10px"
              >
                Oasis Organic Inc.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/*row 3 */}
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          gap: "20px",
          flex: "1 0 0",
          padding: "0px 10px 0px 10px",
          alignSelf: "stretch",
          // border: "2px solid  green",
        }}
        mt="20px"
      >
        <Box
          style={{
            display: "flex",
            minWidth: "250px",
            minHeight: "130px",
            padding: "24px",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "8px",
            alignSelf: "stretch",
            borderRadius: "16px",
            background: "var(--White, #FFF)",
          }}
        >
          <Typography
            style={{
              color: "var(--Black, #131313)",
              fontFamily: "Inter",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: " 600",
              lineHeight: "normal",
              letterSpacing: "-0.2px",
            }}
          >
            Chats
          </Typography>
          <Typography
            style={{
              color: "var(--Dark-Gray, #454545)",
              fontFamily: "Inter",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: " 400",
              lineHeight: "normal",
              letterSpacing: "-0.3px",
            }}
          >
            2 unread messages
          </Typography>
          <Box
            style={{
              display: "flex",
              alignContent: "center",
              alignItems: "center",
              padding: "20px",
              gap: "20px",
              flexWrap: "wrap",
              alignSelf: "stretch",
              // border: "2px solid red",
            }}
          >
            <Box
              style={{
                alignItems: "center",
                display: "flex",
                width: "32px",
                height: "32px",
                justifyContent: " center",
              }}
            >
              <img src={frame6} width="32" alt="logo" />
            </Box>
            <Box
              style={{
                alignItems: "center",
                display: "flex",
                width: "32px",
                height: "32px",
                justifyContent: " center",
              }}
            >
              <img src={frame} alt="logo" />
            </Box>
            <Box
              style={{
                alignItems: "center",
                display: "flex",
                width: "32px",
                height: "32px",
                justifyContent: " center",
              }}
            >
              <img src={frame2} alt="logo" />
            </Box>
            <Box
              style={{
                alignItems: "center",
                display: "flex",
                width: "32px",
                height: "32px",
                justifyContent: " center",
              }}
            >
              <img src={frame1} alt="logo" />
            </Box>
          </Box>
          <Box display="flex" align-items="center" gap=" 10px" mt="40px">
            {" "}
            <Typography
              style={{
                color: "var(--Dark-Orange, #734A00)",
                fontFamily: "Inter",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: " 400",
                lineHeight: "normal",
                letterSpacing: "-0.3px",
              }}
            >
              All Messages
            </Typography>
            <Box width="14px" height="14px">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="15"
                viewBox="0 0 14 15"
                fill="none"
              >
                <path
                  d="M2.91666 7.11162H11.0833M11.0833 7.11162L8.75 9.44496M11.0833 7.11162L8.75 4.77829"
                  stroke="#734A00"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Box>
          </Box>
        </Box>
        <Box
          style={{
            display: "flex",
            minWidth: "300px",
            minHeight: "10px",
            padding: "20px",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "10px",
            alignSelf: "stretch",
            borderRadius: "16px",
            background: "var(--White, #FFF)",
            // border:"2px solid red"
          }}
        >
          <Typography
            style={{
              color: "var(--Dark Gray, #131313)",
              fontFamily: "Inter",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: " 600",
              lineHeight: "normal",
              letterSpacing: "-0.2px",
            }}
          >
            Top states
          </Typography>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <Box
              style={{
                display: "flex",
                // height: "180px",
                // padding: "6px 8px ",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-end",
                alignSelf: "stretch",
                // gap: "8px",
              }}
            >
              {" "}
              <img src={bar3} alt="logo" />
            </Box>
            <Box
              style={{
                display: "flex",
                width: "229px",
                // height: "180px",
                // padding: "6px 8px ",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-end",
                alignSelf: "stretch",
                // gap: "8px",
              }}
            >
              <img src={bar1} alt="logo" />{" "}
            </Box>
            <Box
              style={{
                display: "flex",
                width: "207px",
                // height: "180px",
                // padding: "6px 8px ",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-end",
                alignSelf: "stretch",
                // gap: "8px",
              }}
            >
              <img src={bar} alt="logo" />{" "}
            </Box>
            <Box
              style={{
                display: "flex",
                // height: "180px",
                width: "150px",
                // padding: "6px 8px ",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-end",
                alignSelf: "stretch",
                // gap: "8px",
              }}
            >
              <img src={bar2} alt="logo" />{" "}
            </Box>
          </Box>
        </Box>
        <Box
          style={{
            display: "flex",
            minWidth: "10px",
            padding: "20px  20px",
            // minHeight: "200px",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "4px",
            alignSelf: "stretch",
            justifyContent: "space-evenly",
            borderRadius: "16px",
            background: "var(--White, #FFF)",
          }}
        >
          <Typography
            style={{
              color: "var(--Black, #131313)",
              fontFamily: "Inter",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: " 600",
              lineHeight: "normal",
              letterSpacing: "-0.2px",
            }}
          >
            New deals
          </Typography>
          <Box
            style={{
              display: "flex",
              alignContent: "flex-start",
              alignItems: "flex-start",
              gap: "8px",
              flexWrap: "wrap",
              alignSelf: "stretch",
              // padding: "10px ",
              // border: "2px solid red",
            }}
          >
            <Box display="flex" gap="3px">
              {" "}
              <img src={avatar} alt="logo" />
              <img src={avatar1} alt="logo" />
              <img src={avatar2} alt="logo" />
            </Box>{" "}
            <Box display="flex" gap="3px">
              <img src={avatar3} alt="logo" />

              <img src={avatar5} alt="logo" />
            </Box>
            <Box display="flex" gap="3px">
              <img src={avatar4} alt="logo" /> <img src={avatar6} alt="logo" />
              <img src={avatar7} alt="logo" />
            </Box>
          </Box>
        </Box>
      </Box>
    </div >
  );
};

export default Body;
