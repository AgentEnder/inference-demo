import { isEven } from "is-even";

export function isOdd(n: number) {
  return !isEven(n);
}
