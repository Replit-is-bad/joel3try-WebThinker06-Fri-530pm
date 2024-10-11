let home_address="ohio";
const MY_NRIC="S54322345";

console.log(home_address);
console.log(MY_NRIC);

//old way
function calculateMYincome() {
    console.log("$400,000");
}
//new way
let calculateTAX = () =>{
    console.log("$1200");
}

//call function
calculateMYincome();
calculateTAX();