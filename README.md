# Thesis-Website ⛬

This is a web visualization of my 2025 Bachelor thesis:  
**Power Grid Load Forecasting using Machine Learning Approaches**

It presents an interactive, rolling forecast of weekly Swiss energy consumption using statistical time series models—ARIMA, SARIMA, and SARIMAX—with a focus on seasonality and weather effects.

## Overview 

The tool is based on historical data from Swissgrid and weather forecasts from ECMWF. It uses an 8-week horizon and updates weekly. Among all models tested, **SARIMAX with temperature as an exogenous variable** achieved the best forecasting accuracy with a **MAPE of 4.83%**, outperforming AR(1), ARMA, ARIMA, and SARIMA.

## Features 

- Medium-range (8-week) energy load forecasting
- SARIMAX(1,0,0)(1,0,0,52) model with ECMWF temperature integration
- Rolling forecast retrained weekly on 2 years of past data
- Clean residual diagnostics confirmed via KS tests and periodograms
- Interactive Plotly.js visualizations of forecast vs. actuals
- Built with Next.js and styled using Tailwind CSS

## Tech Stack 

- **Next.js** — frontend framework  
- **Tailwind CSS** — responsive styling  
- **Plotly.js** — interactive charts  
- **Python (offline)** — model training and data prep  

Explore the interactive forecasts on the [website](https://energy-forecast.netlify.app).
