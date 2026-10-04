// Exercise 5.1: Vertical Bar Chart
(function () {
  // 1. Data Definition
  const data = [
    { type: "LED", value: 369 },
    { type: "OLED", value: 362 },
    { type: "LCD", value: 335 },
  ];

  // 2. Dimensions & Margins
  const margin = { top: 40, right: 30, bottom: 50, left: 60 };
  const width = 500 - margin.left - margin.right;
  const height = 350 - margin.top - margin.bottom;

  // 3. SVG Container setup
  const svg = d3
    .select("#bar-chart")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  // 4. Scales
  const x = d3
    .scaleBand()
    .domain(data.map((d) => d.type))
    .range([0, width])
    .padding(0.3);

  const y = d3.scaleLinear().domain([0, 400]).range([height, 0]);

  // 5. Axes
  svg
    .append("g")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(x));

  svg.append("g").call(d3.axisLeft(y));

  // Y-Axis Title Label
  svg
    .append("text")
    .attr("x", -margin.left)
    .attr("y", -15)
    .attr("fill", "#000")
    .style("font-size", "12px")
    .text("Energy Consumption (kWh)");

  // 6. Draw Bars
  svg
    .selectAll(".bar")
    .data(data)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("x", (d) => x(d.type))
    .attr("y", (d) => y(d.value))
    .attr("width", x.bandwidth())
    .attr("height", (d) => height - y(d.value))
    .attr("fill", "#1b7d1b");

  // Value Labels on Top of Bars
  svg
    .selectAll(".label")
    .data(data)
    .enter()
    .append("text")
    .attr("x", (d) => x(d.type) + x.bandwidth() / 2)
    .attr("y", (d) => y(d.value) - 8)
    .attr("text-anchor", "middle")
    .style("font-size", "12px")
    .text((d) => `${d.value} kWh`);
})();
