# Frontend Dashboard App with Backend Graph Integration - Solution

## Overview

This repository contains the solution for the Evaluation Assignment - Building a Frontend Dashboard App with Backend Graph Integration. The goal was to create a complex web app with a user-friendly UI based on a provided Figma design, utilizing ReactJs for the frontend and Nodejs for the backend. The key feature is the integration of an interactive graph component with downsampling for efficient rendering.


## Demo

Check out the live demo of the app [here](https://65bb8371a823b21203c129e8--glistening-eclair-6ea68c.netlify.app/).

## Features

- **Adherence to Figma Design:** The UI closely follows the provided Figma design in terms of layout, colors, fonts, and components.
  
- **Interactive Graph Component:** The graph represents the relationship between profit percentage and time. It is interactive, allowing users to explore the data dynamically.

- **Efficient Downsampling Algorithm:** Implemented a downsampling algorithm to reduce the dataset size while preserving essential trends, ensuring optimal performance.

- **Backend API Endpoints:** The backend provides API endpoints for fetching data based on different time intervals (1 week, 1 month, 1 year, all).

## Backend API Endpoints

The backend of this application exposes API endpoints to fetch data based on different time intervals. These endpoints allow the frontend to retrieve and display relevant data for various time periods.

### API Endpoints:

1. **1 Week Data:**
   - **Endpoint:** `/api/data?query=1week`
   - **Description:** Fetches data for the last 7 days.
   - **Response Format:**

2. **1 Month Data:**
   - **Endpoint:** `/api/data?query=1month`
   - **Description:** Retrieves data for the last 30 days.

3. **1 Year Data:**
   - **Endpoint:** `/api/data?query=1year`
   - **Description:** Returns data for the last 365 days.
  
4. **All Data:**
   - **Endpoint:** `/api/data?query=all`
   - **Description:** Retrieves the entire dataset.

### Usage

To fetch data for a specific time interval, make a GET request to the respective endpoint. The `query` parameter in the URL determines the time interval:

- `/api/data?query=1week` for 1-week data
- `/api/data?query=1month` for 1-month data
- `/api/data?query=1year` for 1-year data
- `/api/data?query=all` for the entire dataset.

Example using `fetch` in JavaScript:

```javascript
fetch('/api/data?query=1week')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching data:', error));
