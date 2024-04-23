let a = 10;
let b = 0;

const promise = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve(30);
    },2000);
}).then((data) => {
    b = data;
    console.log(a+b);
});

