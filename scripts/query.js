// query.js

// Sample request to find documents in the 'Bromley' district
// where the 'In Use?' field is set to 'Yes'
// and the date is after 2014

db.postcodes.find({
  "District": "Bromley",
  "In Use?": "No",
  "Introduced": { $gt: "2014-01-01" }
});
