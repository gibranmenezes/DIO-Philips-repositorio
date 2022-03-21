// const user = {
//   id: 42,
//   displayName: 'jdoe',
//   fullName: {
//     firstName: 'John',
//     lastName: 'Doe'
//   }
// };

// function userId({id}){
//   return id;
// }

// function getFullName({fullName: {firstName: first, lastName: last}}){
//   return `${first} ${last}`;
// }

// console.log(userId(user)); //42
// console.log(getFullName(user)); //John Doe

// const person = {
//   firstName: "Gibran",
//   lastName: "Menezes",
//   id: 1,
//   fullName: function() {
//     return this.firstName + " " + this.lastName;
//   },
//   getId: function() {
//     return this.id;
//   }
// }

// console.log(person.fullName());
// console.log(person.getId());