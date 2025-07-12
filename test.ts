let numbers: number[] = [1, 2, 3, 4, 5];
function isPrime(num: number): boolean {
  if (num <= 1) return false; // 0 and 1 are not prime
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false; // If divisible, it's not prime
  }
  return true; // It's a prime number
}
for (let i = 0; i < numbers.length; i++) {
  if (isPrime(numbers[i])) {
    console.log(numbers[i]); // Print if it's a prime number
  }
}
