function generateOrderNumber(productType = "", orderNumbers = []) {
  const monthRoman = [
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
    "X",
    "XI",
    "XII",
  ];

  const date = new Date();
  const year = date.getFullYear().toString().substring(2);
  const month = monthRoman[date.getMonth()];
  const day = date.getDate().toString().padStart(2, "0");

  const HMS_CODE = `HMS/${month}/${year}${day}`;
  const HSR_CODE = `HSR/${month}/${year}${day}`;

  if (!Array.isArray(orderNumbers)) {
    return "UNDIFINED_TYPE";
  }
  let orderNumber;

  switch (productType) {
    case "bootcamp":
      orderNumber =
        HMS_CODE +
        (
          "0000" +
          (
            orderNumbers.filter((num) => num.startsWith("HMS")).length + 1
          ).toString()
        ).slice(-4);
      break;
    case "webinar":
      orderNumber =
        HSR_CODE +
        (
          "0000" +
          (
            orderNumbers.filter((num) => num.startsWith("HSR")).length + 1
          ).toString()
        ).slice(-4);
      break;
    default:
      return "UNDIFINED_TYPE";
  }

  orderNumbers.push(orderNumber);
  return orderNumber;
}

console.log(generateOrderNumber("bootcamp", []));
console.log(generateOrderNumber("webinar", []));
