// from data.js
var tableData = data;
// Select the button for the form 
var button = d3.select("#filter-btn");

function init() {
  var tbody = d3.select("tbody");
  tbody.html("");
  tableData.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
})}
//Create the on click event
button.on("click", function() {
  //select the HTML body
  var tbody = d3.select("tbody");

  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");
  tbody.html("");
  
  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  // If input is blank, run the initial document
  if (inputValue ==""){init()}
  //Otherwise, filter with the data
  else{
  var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);

  filteredData.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}});

init();