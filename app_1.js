// import the data from data.js
var tableData= data;

// Reference the HTML Table. d3.select to tell java to look for <tbody> tags in HTML
var tbody= d3.select("tbody");

function buildTable(data){
    // First, clear out any existing data 
    tbody.html("");
    
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row 
        data.forEach((dataRow) => {
            let row=tbody.append("tr");
            //Object.values tells java to reference 1 object from the array of UFO sighitings
            //Adding (dataRow) as the argument we are saying we want values to go into the dataRow
            Object.values(dataRow).forEach((val)=> {
                let cell=row.append("td");
                cell.text(val);
            });
        })
}


// Filter out table
function handleClick() {
    // #datetime is our selector string, it is what d3 is looking for. Our id will be datetime
    // .property("value") is actually grabbing the values gotten by d3
     // Check to see if a date was entered and filter the data using that date.
    let date= d3.select("#datetime").property("value");
    let filteredData= tableData;
    
    if (date){
        // Show only the rows where the date is equal to the date filter we created above, (===) means strict equality, (==) means loose eqaulity
        filteredData=filteredData.filter((row) => row.datetime === date);
    }
     // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
}

// Attatch an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

//Build the table when the page loads 
buildTable(tableData);

