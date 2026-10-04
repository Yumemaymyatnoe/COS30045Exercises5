// Exercise 5.2: Scatter Plot and Line Chart
(function () {
  // 1. Data Definition
  const data = [
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
  const margin = { top: 40, right: 150, bottom: 50, left: 60 };
  const width = 700 - margin.left - margin.right;
  const height = 350 - margin.top - margin.bottom;

  // 3. SVG Container setup
  const svg = d3
    .select("#line-chart")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  // 4. Scales
  const x = d3
    .scaleLinear()
    .domain(d3.extent(data, (d) => d.year))
    .range([0, width]);

  const y = d3.scaleLinear().domain([0, 150]).range([height, 0]);

  // 5. Axes
  svg
    .append("g")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(x).tickFormat(d3.format("d")));

  svg.append("g").call(d3.axisLeft(y));

  // Y-Axis Title Label
  svg
    .append("text")
    .attr("x", -margin.left)
    .attr("y", -15)
    .attr("fill", "#000")
    .style("font-size", "12px")
    .text("Average Price ($ per mWh)");

  // 6. Draw Stepped/Direct Line Chart
  const line = d3
    .line()
    .x((d) => x(d.year))
    .y((d) => y(d.price))
    .curve(d3.curveStepAfter); // Slide ပါ လှေကားထစ်ပုံစံဖြစ်ရန် curveStepAfter သုံးထားပါသည်

  svg
    .append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("stroke", "#28a745")
    .attr("stroke-width", 2)
    .attr("d", line);

  // 7. Draw Scatter Plot Points (Dots)
  svg
    .selectAll(".dot")
    .data(data)
    .enter()
    .append("circle")
    .attr("class", "dot")
    .attr("cx", (d) => x(d.year))
    .attr("cy", (d) => y(d.price))
    .attr("r", 4)
    .attr("fill", "#1b7d1b");

  // Legend Label
  svg
    .append("circle")
    .attr("cx", width + 20)
    .attr("cy", 20)
    .attr("r", 4)
    .attr("fill", "#1b7d1b");

  svg
    .append("text")
    .attr("x", width + 30)
    .attr("y", 24)
    .style("font-size", "12px")
    .attr("fill", "#28a745")
    .text("Average Price ($ per mWh)");
})();
