function sum(a,b) {
  return parseInt(a)+parseInt(b);
}

console.log(process.argv.slice(2).reduce(sum, 0))
