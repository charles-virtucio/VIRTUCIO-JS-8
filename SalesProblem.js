//Virtucio, Charles Adrian C.
//Kodego Bootcamp WD47P JS-8-A
function topProduct(productProfitArray) {
  if (productProfitArray.length === 0) {
    return "No Data";
  }

  let maxProfit = -Infinity;
  let topProduct = "";

  for (const [product, profit] of productProfitArray) {
    if (profit > maxProfit) {
      maxProfit = profit;
      topProduct = product;
    }
  }

  return topProduct;
}

function bottomProduct(productProfitArray) {
  if (productProfitArray.length === 0) {
    return "No Data";
  }

  let minProfit = Infinity;
  let bottomProduct = "";

  for (const [product, profit] of productProfitArray) {
    if (profit < minProfit) {
      minProfit = profit;
      bottomProduct = product;
    }
  }

  return bottomProduct;
}

function zeroProfitProduct(productProfitArray) {
  if (productProfitArray.length === 0) {
    return "No Data";
  }

  let closestProfit = Infinity;
  let zeroProfitProduct = "";

  for (const [product, profit] of productProfitArray) {
    const absProfit = Math.abs(profit);
    if (absProfit < Math.abs(closestProfit) || (absProfit === Math.abs(closestProfit) && profit > closestProfit)) {
      closestProfit = profit;
      zeroProfitProduct = product;
    }
  }

  return zeroProfitProduct;
}
const productProfits = [
  ["Product A", 1000],
  ["Product B", -500],
  ["Product C", 200],
  ["Product D", -300],
  ["Product E", 50]
];

console.log(topProduct(productProfits));         
console.log(bottomProduct(productProfits));      
console.log(zeroProfitProduct(productProfits));  
