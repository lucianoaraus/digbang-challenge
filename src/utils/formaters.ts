import { MAX_AMOUNT, MAX_TERM, MIN_AMOUNT, MIN_TERM } from "../constants";

export function formatNumber(number: number, separator: string): string {
  let innerNumber = number;

  // prevent NaN value
  if (isNaN(innerNumber)) {
    innerNumber = 0;
  }

  const isDecimal = innerNumber % 1 !== 0;

  let formattedNumber: string = isDecimal
    ? innerNumber.toFixed(2)
    : innerNumber.toString();

  const parts = formattedNumber.split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator);

  let internalSeparator: string;
  separator === "." ? (internalSeparator = ",") : (internalSeparator = ".");

  formattedNumber = `$ ${parts.join(internalSeparator)}`;

  return formattedNumber;
}

export function parseFormatedNumber(data: string): number {
  const numberPart = data.split("$ ")[1];
  const isEmptyData = numberPart == "";
  // the function ends
  if (isEmptyData) {
    return 0;
  }
  const numberWithoutDots = numberPart.replace(".", "");
  const parseNumber = parseInt(numberWithoutDots);

  return parseNumber;
}

export function adaptedAmount(totalAmount: number): number {
  let innerAmount: number = totalAmount;
  if (totalAmount <= MIN_AMOUNT || isNaN(totalAmount)) {
    innerAmount = MIN_AMOUNT;
  } else if (totalAmount > MAX_AMOUNT) {
    innerAmount = MAX_AMOUNT;
  }
  return innerAmount;
}

export function adaptedTerm(term: number): number {
  let res: number = term;
  if (term <= MIN_TERM || isNaN(term)) {
    res = MIN_TERM;
  } else if (term > MAX_TERM) {
    res = MAX_TERM;
  }
  return res;
}
