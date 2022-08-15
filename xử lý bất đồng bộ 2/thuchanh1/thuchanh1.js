async function getSum(arr) {
    if (arr instanceof Array){
        let sum=0
        for (let i = 0; i < arr.length; i++) {
            sum+=arr[i];
        }
        return sum;
    }
    throw new Error("Input data is incorrect")

}
async function check() {
    try{
        let result = await getSum(1);
        console.log(result);
    }
    catch(error) {
        console.log(error);
    }
}
check();