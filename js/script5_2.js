// Exercise 5.2: Scatter Plot and Line Chart

// 1. Data Definition
const chartData = [
  { year: 1998, price: 42 },
  { year: 2000, price: 50 },
  { year: 2002, price: 35 },
  { year: 2004, price: 38 },
  { year: 2006, price: 63 },
  { year: 2008, price: 53 },
  { year: 2010, price: 30 },
  { year: 2012, price: 65 },
  { year: 2014, price: 42 },
  { year: 2016, price: 95 },
  { year: 2018, price: 107 },
  { year: 2020, price: 60 },
  { year: 2022, price: 145 },
  { year: 2024, price: 132 },
];

// 2. Dimensions & Margins
const chartMargin = { top: 40, right: 150, bottom: 50, left: 60 };
const chartWidth = 700 - chartMargin.left - chartMargin.right;
const chartHeight = 350 - chartMargin.top - chartMargin.bottom;

// 3. SVG Container setup
const chartSvg = d3
  .select("#line-chart")
  .append("svg")
  .attr("width", chartWidth + chartMargin.left + chartMargin.right)
  .attr("height", chartHeight + chartMargin.top + chartMargin.bottom)
  .append("g")
  .attr("transform", `translate(${chartMargin.left},${chartMargin.top})`);

// 4. Scales
const chartX = d3
  .scaleLinear()
  .domain(d3.extent(chartData, (d) => d.year))
  .range([0, chartWidth]);

const chartY = d3.scaleLinear().domain([0, 150]).range([chartHeight, 0]);

// 5. Axes
chartSvg
  .append("g")
  .attr("transform", `translate(0,${chartHeight})`)
  .call(d3.axisBottom(chartX).tickFormat(d3.format("d")));

chartSvg.append("g").call(d3.axisLeft(chartY));

// Y-Axis Title Label
chartSvg
  .append("text")
  .attr("x", -chartMargin.left)
  .attr("y", -15)
  .attr("fill", "#000")
  .style("font-size", "12px")
  .text("Average Price ($ per mWh)");

// 6. Draw Stepped/Direct Line Chart
const chartLine = d3
  .line()
  .x((d) => chartX(d.year))
  .y((d) => chartY(d.price))
  .curve(d3.curveStepAfter);

chartSvg
  .append("path")
  .datum(chartData)
  .attr("fill", "none")
  .attr("stroke", "#28a745")
  .attr("stroke-width", 2)
  .attr("d", chartLine);

// 7. Draw Scatter Plot Points (Dots)
chartSvg
  .selectAll(".dot")
  .data(chartData)
  .enter()
  .append("circle")
  .attr("class", "dot")
  .attr("cx", (d) => chartX(d.year))
  .attr("cy", (d) => chartY(d.price))
  .attr("r", 4)
  .attr("fill", "#1b7d1b");

// Legend Label
chartSvg
  .append("circle")
  .attr("cx", chartWidth + 20)
  .attr("cy", 20)
  .attr("r", 4)
  .attr("fill", "#1b7d1b");

chartSvg
  .append("text")
  .attr("x", chartWidth + 30)
  .attr("y", 24)
  .style("font-size", "12px")
  .attr("fill", "#28a745")
  .text("Average Price ($ per mWh)");
