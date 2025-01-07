const landen = [
    { NL: "Nederland" },
    { BE: "Belgie" },
    { DE: "Duitsland" },
    { RU: "Rusland" },
    { JP: "Japan" },
  ];
  
  // Sort the array alphabetically by the country name
 
  
  console.log(landen);  // Output the sorted array
  console.log(landen.length);  // Output the length of the array
  console.log([...landen].reverse());  // Output the reversed array (not affecting the original)
   
  landen.sort(function(a, b) {
    // Extract the country names from the objects
    var countryA = Object.values(a)[0];
    var countryB = Object.values(b)[0];
    
    // Compare the country names
    if (countryA < countryB) {
      return -1;
    } else if (countryA > countryB) {
      return 1;
    } else {
      return 0;
    }
  });