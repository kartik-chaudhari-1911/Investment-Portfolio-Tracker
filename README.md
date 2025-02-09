# Investment Portfolio Tracker

## Project Overview

This project aims to develop a sleek and responsive investment portfolio tracker that allows users to add and manage various assets (stocks, crypto, etc.) and view real-time performance data through an intuitive dashboard. The application is designed to provide a comprehensive overview of the user's portfolio, enabling them to make informed investment decisions.

**Note:** This project uses dummy data for demonstration purposes. Real-time data integration with external APIs is a planned feature for future development.

## Key Features

### 1. Portfolio Overview Dashboard

**Feature Description:**  
The dashboard provides users with a real-time snapshot of their portfolio's performance. It visually displays portfolio distribution and tracks asset performance over time.

**Frontend Focus:**
- **Dynamic Pie Charts & Line Graphs:**  
  - Visualize portfolio distribution by asset type (e.g., stocks, bonds, crypto) using dynamic pie charts.
  - Track asset performance trends with real-time updating line graphs, showing fluctuations over time.
  
- **Interactive Data Points:**  
  - Users can hover over or click on specific sections of the charts/graphs to reveal detailed data points, such as total investment, daily/weekly performance, and asset allocation percentages.
  
- **Real-Time Updates:**  
  - The dashboard is designed to provide real-time data updates. Smooth animations and transitions are used to update chart visuals instantly.

### 2. Interactive Asset Management

**Feature Description:**  
Users can manage their portfolio by adding/removing assets, customizing the layout, and viewing detailed information for each asset.

**Frontend Focus:**
- **Draggable Widgets:**  
  - Implement a modular interface with draggable widgets, allowing users to personalize their portfolio dashboard. Widgets may include stock tickers, crypto performance, or news feeds.
  
- **Detailed Asset View:**  
  - When a user clicks on an asset, an in-depth view is provided with real-time price updates, performance charts, and market trends. Additional analytics like daily percentage changes, historical performance, and comparison with market benchmarks are included.
  
- **Customization Options:**  
  - Users can customize which data points they want to see for each asset, such as price history, volume, or technical indicators. Smooth, animated transitions are used between different views or asset details.

### 3. Responsive Asset Filters

**Feature Description:**  
A responsive filtering system allows users to sort and categorize their assets based on different criteria, offering a customizable view of their portfolio.

**Frontend Focus:**
- **Asset Type & Performance Filters:**  
  - Users can sort their portfolio by asset type (e.g., stocks, crypto, bonds) or performance metrics (e.g., highest gain, lowest loss). Smooth transitions are implemented between filtered views, with the ability to combine multiple filters.
  
- **Search & Grouping Features:**  
  - A real-time search bar and grouping options are included, allowing users to easily find specific assets within their portfolio. Assets can be grouped by categories (e.g., sector, market cap) with expandable/collapsible sections for easy navigation.
  
- **Animations & Visual Feedback:**  
  - Subtle animations enhance the user experience, such as fading in/out when applying filters or expanding/collapsing asset categories. Visual feedback is provided when sorting or filtering, like highlighting the top-performing assets in the list.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**
   
   git clone https://github.com/ykartik-chaudhari-1911/investment-portfolio-tracker.git


2. **Navigate to the project directory:**


  cd investment-portfolio-tracker
  Install dependencies:

  npm install
  
3. **Start the development server:**

  npm start
  
4. **Open your browser and visit:**

  http://localhost:5173


# Technologies Used

- Frontend: React.js, Chart.js, D3.js

- Styling: CSS3,TailwindCSS

- State Management: Redux

- API Integration: Axios (for future real-time data   integration)
