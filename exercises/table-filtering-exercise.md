# Part 1

- load the table with the data from your array of objects
  - optional 1:create a function to buildTableRow that takes one of your objects as a parameter so the properties can be used to fill in the table cells inside the rows. Call the function.
  - optional 2: use `insertRow` and `insertCell` to shorten your row building code
- verify the tables is loaded with the data

# Part 2

- make sure your data has a column that you can filter by
  - if not then add that data using AI or manually
- create an array of unique values that you want to filter by
  - you can use AI to generate this as well if you want
- add a dropdown to the page
  - add a default ` <option value="">Select...</option>`
- write JavaScript code to load the dropdown with your array of unique values (what you are going to filter by)
- verify the dropdown is loaded with the data

# Part 3

- write a function that will `filterByX`. X being your unique values
  - don't implement the function yet just have it log "changed"
- call it when the `onchange` event happens on the dropdown
- verify the function is called by checking the console in DevTools after you change the selected value in the dropdown
- now instead of logging "changed" get the value from the dropdown and log it
- verify the function is called and prints the selected item by checking the console in DevTools after you change the selected value in the dropdown

# Part 4

- have the `filterByX` function call filter to return a filtered array of your data
- loop through that array and generate the table
  - this will be the same code you used earlier you will just make a copy of it and change it to point to the filtered array
