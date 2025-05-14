while (i <= 10) {
  console.log(i);
  i++;
}

for (let num = 2; num <= 20; num++) {
  if (num % 2 !== 0) {
    continue;
  }
  console.log(num);
}

for (let j = 1; j <= 10; j++) {
  console.log(`7 x ${j} = ${7 * j}`);
}

let n = 10;
for (let k = 0; ; k++) {
  if (k >= n) {
    break;
  }
  console.log(k);
}

let m = 1;
while (m <= 20) {
  if (m % 3 === 0) {
    m++;
    continue;
  }
  console.log(m);
  m++;
}
