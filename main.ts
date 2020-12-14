export default function greet() {
  return "Hello, World!";
}

export function now() {
  return new Date();
}

export function* fizzbuzz(n: number) {
  for (let i = 0; i < n; i++) {
    if (i % 15 === 0) {
      yield "FizzBuzz";
    } else if (i % 5 === 0) {
      yield "Buzz";
    } else if (i % 3 === 0) {
      yield "Fizz";
    } else {
      yield i;
    }
  }
}

export const add = (a, b) => a + b;
export const sub = (a, b) => a - b;

export type Alias = string;

export const answer = 42;
export const contact_me = "@wperron"
