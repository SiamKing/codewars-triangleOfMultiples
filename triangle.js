function multTriangle(n) {
  let arr = [],
      sum = 0,
      odds = 1;

  for (let i = 1; i <= n; i++) {
    sum += i**3
    if (i % 2 && i !== 1) {
      odds += i
    }
  }

  odds **= 2
  return [...arr, sum, sum - odds, odds]

}

// 2 = 8
// 3 = 36
// 4 = 64
// 5 = 125
// 6 = 216
// 7 = 343
// 8 = 512
// 9 = 729
// 10 = 1000

// Every even index jumps i**3 for evens
// Odds are the same on odd and even index then jumps
// All odds have a whole number sqrt
// 0, 8, 20, 84, 144, 360, 528, 1040, 1400, 2400 // Evens
// 0, 8, 12, 64, 60, 216, 168, 512, 360, 1000 // diff between evens
// 1, 2, 3,  4,  5,  6,   7,   8,   9,   10 // indexes
// 1, 1, 16, 16, 81, 81, 256, 256, 625, 625 // odds
// 0, 0, 15, 0,  65, 0,  175, 0,   369, 0 // diff between odds
// 1,    4,      9,       16,      25   Sqrt of value of odd indexes
//   3       5        7       9   diff between
