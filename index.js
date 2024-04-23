const prompt = require('prompt-sync')();

const fibo = (n) => {
    if(n==0) return 0;
    if(n==1) return 1;
    else return fibo(n-2)+fibo(n-1)
}

var n = prompt('Enter the value of n: ')
console.log(`Fibonaaci Series upto ${n}: `);
let print = '';
for(let i=0;i<=n;i++) {
    print+=fibo(i) + ' ';
}
console.log(`${print}`);