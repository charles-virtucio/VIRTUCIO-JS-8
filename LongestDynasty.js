//Virtucio, Charles Adrian C.
//Kodego Bootcamp WD47P JS-8-B
function longestDynasty(dynastyReign) {
    if (dynastyReign.length === 0) {
      return "No Data";
    }
  
    let longest = {
      name: "",
      reign: 0
    };
  
    for (let i = 0; i < dynastyReign.length; i++) {
      let dynasty = dynastyReign[i];a
      let reign = dynasty.end - 1000;
  
      if (reign > longest.reign) {
        longest.name = dynasty.name;
        longest.reign = reign;
      }
    }
  
    return longest.name;
  }
  
  function convertYear(year) {
    
    const romanToInt = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };
  
    let result = 0;
    let romanNumeral = year.toUpperCase();
  
    for (let i = 0; i < romanNumeral.length; i++) {
      let currentSymbol = romanNumeral[i];
      let currentValue = romanToInt[currentSymbol];
  
      if (currentValue === undefined) {
        return "Invalid";
      }
  
      let nextSymbol = romanNumeral[i + 1];
      let nextValue = romanToInt[nextSymbol];
  
      if (nextValue !== undefined && nextValue > currentValue) {
        result += nextValue - currentValue;
        i++;
      } else {
        result += currentValue;
      }
    }
  
    return result;
  }
  let dynastyReign = [
    { name: "Dynasty A", end: "MCMLXXIX" },
    { name: "Dynasty B", end: "MCMXCIX" },
    { name: "Dynasty C", end: "MCMXCVIII" },
    { name: "Dynasty D", end: "MCMXCVII" }
  ];
  
  let longest = longestDynasty(dynastyReign);
  console.log("Longest Dynasty:", longest);
  
  let year = "MCMLXXIX";
  let convertedYear = convertYear(year);
  console.log("Converted Year:", convertedYear);
  