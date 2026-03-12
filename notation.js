/*const funnynumber = (num) => {
  for (let i = 0; i < num.length; i++) {
    if (num[i] === 3) return num[i];
  }
};*/

const funnynumber = (num) => {
  return num[3];
};
const arr = [1, 2, 3, 4, 5];
//console.time("funnynumber");
//console.log(funnynumber(arr));
//console.timeEnd("funnynumber");

function some(n) {
  // 3 operations => o(1)
  return (n * (n + 5)) / 2;
}
//console.log(some(5));
function printBoth(n) {
  // 9 operations => o(n^2)
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}
//printBoth(3);
