let moneyCar = 10000;
const buyACar = (car) => {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            if (moneyCar >= 10000) {
                resolve("can buy " + car);
            } else {
                reject("Do not enough money");
            }
        }, 1000);
    }))
}

moneyCar = 100111;
 buyACar("VinFast").then(value => {
    console.log(value);
}, error => {
    console.log(error);
})