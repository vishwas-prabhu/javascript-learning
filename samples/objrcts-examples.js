console.log("Hai!")

let user = {}
user.name = "John";
user.surname = "Smith";
console.log(user.name);
user["name"] = "Pete";
console.log(user.name);
delete user.name;
console.log(user.name);

function isEmpty(inObj) {
    for (let key in inObj){
        return false;
    }
    return true;
}
let inOb = {
    // hai: false
}
console.log(isEmpty(inOb));

let salaries = {
    John: 300,
    pete: 100,
    lon: 250
};
let sum = 0;
for ( let men in salaries){
    sum += salaries[men]
}
console.log(sum);

const multiplyNumeric = (inObj) => {
    for(let key in inObj){
        if(typeof inObj[key] == 'number'){
            inObj[key] *= 2;
        }
    }
    return inObj;
}

let menu = {
    num: 300,
    sal: 500,
    type: "savings"
};
console.log(menu)
console.log(multiplyNumeric(menu));

let n = "10.2";
console.log(typeof +n);