// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");



tableData.forEach(function(UFOReport) {
  
  var row = tbody.append("tr");
  Object.entries(UFOReport).forEach(function([key, value]) {
    
    // Append a cell to the row for each value
    // in the weather report object
    var cell = row.append("td");
    cell.text(value);
  });
});



// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#datetime");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("change", runEnter);

// Create the function to run for both events
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  
  var DTUFOs = tableData.filter(UFOReport => UFOReport.datetime === inputValue);
  tbody.text("");


  console.log(DTUFOs)
  var row = tbody.append("tr");

  tableData.forEach(function(filler) {
  
    var row = tbody.append("tr");
    Object.entries(DTUFOs).forEach(function([key, value]) {
      
      // Append a cell to the row for each value
      // in the weather report object
      var cell = row.append("td");
      cell.text(value);
    });
  });

  return DTUFOs
};
