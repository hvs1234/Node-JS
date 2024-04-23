const app = require('./app');

const arr = [2,4,1,5,3,2,8];
let print = '';
for (let i=0;i<arr.length;i++) {
    print+=arr[i]+' ';
}
console.log(arr);
console.log(app);
console.log(app.x);
console.log(app.y);