// Exercise 5.3: Donut Chart
(function () {
  // 1. Data Definition
  const data = [
    { label: "small", value: 25 },
    { label: "medium", value: 45 },
    { label: "large", value: 30 },
  ];

  // 2. Dimensions & Radius
  const width = 350;
  const height = 350;
  const radius = Math.min(width, height) / 2 - 20;

  // 3. SVG Container setup
  const svg = d3
    .select("#donut-chart")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", `translate(${width / 2},${height / 2})`);

  // 4. Color Scale
  const color = d3
    .scaleOrdinal()
    .domain(data.map((d) => d.label))
    .range(["#6c757d", "#17a2b8", "#28a745"]);

  // 5. Pie & Arc Generators
  const pie = d3
    .pie()
    .value((d) => d.value)
    .sort(null);

  const arc = d3
    .arc()
    .innerRadius(radius * 0.55) // Inner Radius ထည့်ပေးခြင်းဖြင့် Donut Shape ရပါမည်
    .outerRadius(radius);

  // Arc for Text Label Placement
  const labelArc = d3
    .arc()
    .innerRadius(radius * 0.7)
    .outerRadius(radius * 0.7);

  // 6. Draw Donut Slices
  svg
    .selectAll("path")
    .data(pie(data))
    .enter()
    .append("path")
    .attr("d", arc)
    .attr("fill", (d) => color(d.data.label))
    .attr("stroke", "#ffffff")
    .style("stroke-width", "2px");

  // Add Category Labels
  svg
    .selectAll(".arc-label")
    .data(pie(data))
    .enter()
    .append("text")
    .attr("transform", (d) => `translate(${labelArc.centroid(d)})`)
    .attr("text-anchor", "middle")
    .attr("dy", ".35em")
    .style("font-size", "12px")
    .style("fill", "#ffffff")
    .text((d) => d.data.label);
})();
