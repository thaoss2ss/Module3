const checkLicensePlateInHanoi = (licensePlate) => {
    const array = ['29', '30', '31', '32', '33', '40'];
    for (const value of array) {
        if (licensePlate.startsWith(value)) {
            return true;
        }
    }
    return false;
}
const listLicensePlates = ["29P1-124123", "30L9-63568", "17B3-29013", "33H2-21231"];

let listLicensePlateInHaNoi = [];

for (const value of listLicensePlates) {
    if (checkLicensePlateInHanoi(value)) {
        listLicensePlateInHaNoi.push(value);
    }
}

console.log("Các biển số thuộc Hà Nội: ", listLicensePlateInHaNoi);