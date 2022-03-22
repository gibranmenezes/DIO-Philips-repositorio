/* SPREAD */

// function sum(x, y, z){
//     return x+y+z;
//   }

//   const numbers = [1, 2, 3];
//   console.log(sum(...numbers)); 

// /*Rest: combine the arguments in a array*/
 
//    function len(...args){
//     console.log(args,length)
//   }

//     len(); //0
//     len(1, 2); // 2
//     len(3, 5, 4); // 3

/*Destructuring:*/
    
        // const user = {
        //   id: 42,
        //   displayName: 'jdoe',
        //   fullName : {
        //     firstName: 'John',
        //     lastName: 'Doe'
        //   }
        // };

        // function userId(id){
        //   return id;
        // }

        // function getFullName({fullName: {firstName: first, lastName: last}}){
        //   return `${first} ${last}`;
        // }

        // userId(user); //42
        // getFullName(user); //John Doe

/*Methods to manipulate 'this':*/

//Call: in this example, the Call method indicates which is the element referenced by this.
//Apply: in this example, the apply method indicates which is the element referenced by this.
    // const person = {
    //     name: 'Gibran',
    // };

    // const animal = {
    //     name: 'Oreo',
    // };

    // function getSomething(){
    //     console.log(this.name);
    // }

    // getSomething.call(person);
    // getSomething.call(animal);

    // getSomething.apply(person);
    // getSomething.apply(animal);

    // //call with parameter

    // const myObj = {
    //     num1: 2,
    //     num2: 4
    // };

    // function sum(a,b){
    //     console.log(this.num1 + this.num2 + a + b); 
    // }

    // sum.call(myObj, 1, 5); //using ',' to separate the parameters

    // sum.apply(myObj, [1, 5]); //parameters as an array

/*bind: clones the function where it is called and apply the objetc value past as parameter.*/

    const returnNames = function(){
        return this.name;
    }

    let gibran = returnNames.bind({name: 'Gibran'});

    console.log(gibran());