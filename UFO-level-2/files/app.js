// from data.js
var tableData = data;


// YOUR CODE HERE!
var tbody = d3.select("tbody");



function drawTable(UFOdata){
  tbody.text("");
  UFOdata.forEach(function(UFOReport) {
  
  var row = tbody.append("tr");
  Object.entries(UFOReport).forEach(function([key, value]) {
    
    // Append a cell to the row for each value
    // in the weather report object
    var cell = row.append("td");
    cell.text(value);
  });
});}
drawTable(tableData);


// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("form");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit", runEnter);

// Create the function to run for both events
function runEnter() {
  
  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputDateElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputDateValue = inputDateElement.property("value");


    // Select the input element and get the raw HTML node
  var inputCityElement = d3.select("#city");

    // Get the value property of the input element
  var inputCityValue = inputCityElement.property("value");

      // Select the input element and get the raw HTML node
  var inputStateElement = d3.select("#state");

      // Get the value property of the input element
  var inputStateValue = inputStateElement.property("value");

          // Select the input element and get the raw HTML node
  var inputShapeElement = d3.select("#shape");

        // Get the value property of the input element
  var inputShapeValue = inputShapeElement.property("value");

            // Select the input element and get the raw HTML node
  var inputDurationElement = d3.select("#duration");

        // Get the value property of the input element
  var inputDurationValue = inputDurationElement.property("value");
  

  //entered valid date
  //valid date = filter data
   //entered valid city
 //filter valid date data by valid city data
  //entered valid date - filter
 //did not enter valid city only filter by date
 //no valid date, but valid city
 //no valid entries
  var DTUFOs = tableData;

  //filter date
  if (inputDateValue.length > 0){
    DTUFOs = DTUFOs.filter(UFOReport => UFOReport.datetime === inputDateValue);
  };
  //filter cities
  if (inputCityValue.length > 0){
    DTUFOs = DTUFOs.filter(UFOReport => UFOReport.city === inputCityValue);
  };
  //filter states
  if (inputStateValue.length > 0){
    DTUFOs = DTUFOs.filter(UFOReport => UFOReport.state === inputStateValue);
  };
  //filter shape
  if (inputShapeValue.length > 0){
    DTUFOs = DTUFOs.filter(UFOReport => UFOReport.shape === inputShapeValue);
  };
  //filter duration
  if (inputDurationValue.length > 0){
    DTUFOs = DTUFOs.filter(UFOReport => UFOReport.durationMinutes === inputDurationValue);
  };
  
  drawTable(DTUFOs);
  
  
};
