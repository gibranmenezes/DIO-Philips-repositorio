function returnArray(array, number){
    try{
        if (!array && !number)
            throw new ReferenceError("Insert parameters");
        
        if (typeof(array) !== "object")
            throw new TypeError("The first parameter must be an Object");
        
        if (typeof(number) !== "number")
            throw new TypeError("The second parameter must be a Number");
        
        if (number !== array.length)
            throw new RangeError("The array length is different of the given number");
        
        return array;
    }
    catch(e) {
        if (e instanceof ReferenceError) {
            console.log("This is a ReferenceError");
            console.log(e.message);
        } else if (e instanceof TypeError) {
            console.log("This is a TypeError");
            console.log(e.message);
        } else if (e instanceof RangeError) {
            console.log("This is a RangeError");
            console.log(e.message);
        } else {
            console.log("Error type not expected" + e);
        }
    }
};

const arr = [1,2,3,4,5];

console.log(returnArray(arr, 'a'));