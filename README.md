# COS30045 Data Visualisation - Exercise 5: D3 Multi-chart Webpage

This repository contains the completed work for **COS30045 Data Visualisation (Class 5 Exercise)** at Swinburne University of Technology.

It demonstrates the construction of multiple core chart types using **D3.js (v7)** rendered together on a single responsive HTML page.

---

## 📊 Included Visualisations

1. **5.1 Vertical Bar Chart with Axis**
   - Visualises energy consumption across different display technologies (LED, OLED, LCD) in kWh.
   - Built using SVG rect elements, ordinal band scales, and linear Y-axis scaling.

2. **5.2 Scatter Plot and Line Chart**
   - Displays historical average electricity prices ($ per mWh) from 1998 to 2024.
   - Combines a step-after line generator (`d3.curveStepAfter`) with circle elements for data points.

3. **5.3 Donut Chart**
   - Shows proportional distribution across categories (small, medium, large).
   - Utilises `d3.pie()` and `d3.arc()` with inner radius configuration to create the donut layout.

---

## 📁 Project Structure

```text
exercise5/
├── css/
│   └── styles.css        # Central stylesheet for chart layout and custom styling
├── js/
│   ├── script5_1.js      # D3 logic for Vertical Bar Chart
│   ├── script5_2.js      # D3 logic for Scatter Plot and Line Chart
│   └── script5_3.js      # D3 logic for Donut Chart
├── index.html            # Main HTML document containing SVG containers
└── README.md             # Project documentation

```

---

## 🛠️ Technologies Used

* **HTML5 & CSS3**
* **JavaScript (ES6+)**
* **D3.js v7** (Data-Driven Documents library via CDN)

---

## 🚀 How to Run Locally

1. Clone or download this repository.
2. Open the project directory using a local development server (e.g., VS Code **Live Server** extension or Python HTTP server) to avoid browser CORS policies when loading local assets. (Example using Python)
```bash
python -m http.server 8000

```

3. Access in your web browser. (Goto this url)
```bash
http://localhost:8000

```