const parseNumber = (value) => {
  return parseFloat(value.replace(",", ".").replace(" zł", ""));
};

export const formatNumber = (value) => {
  return value.toString().replace(".", ",") + " zł";
};

export const updateCalculatedAmount = (price, volume) => {
  const calculated = parseNumber(price) * parseNumber(volume);
  return isNaN(calculated) ? "" : formatNumber(calculated.toFixed(3));
};

export const calculateDifference = (readAmount, calculatedAmount) => {
  const difference = parseNumber(readAmount) - parseNumber(calculatedAmount);
  return isNaN(difference) ? "" : formatNumber(difference.toFixed(3));
};
