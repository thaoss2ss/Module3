async function onMyBirthDayAsync(isKayoSick){

    if (!isKayoSick) return 2;

    throw new Error("I am sad")
}
async function doSomethingAsync(){
    try {
        let result = await onMyBirthDayAsync(false);
        console.log(`I have ${result} cakes`)
    }
    catch(error) {
        console.log(error);
    }
    finally {
        console.log("Party");
    }
}
doSomethingAsync();