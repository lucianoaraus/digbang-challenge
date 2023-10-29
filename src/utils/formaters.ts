export function formatNumber(number: number, separator: string): string {
  const isDecimal = number % 1 !== 0;

  let formattedNumber = isDecimal ? number.toFixed(2) : number.toString();

  const parts = formattedNumber.split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator);

  let internalSeparator;
  separator === "." ? (internalSeparator = ",") : (internalSeparator = ".");

  formattedNumber = `$ ${parts.join(internalSeparator)}`;

  return formattedNumber;
}

export function parseFormatedNumber(data: string): number {
  const parts = data.split("$")[1].split(".");
  const concatenatedData = parts.join("");
  const parseData = parseInt(concatenatedData);
  return parseData;
}
