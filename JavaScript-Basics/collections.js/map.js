function getAdmin(map){
    let admin = [];
    for([key, value] of map){
       if(value === 'Admin'){
           admin.push(key);
       } 

    }
    return admin
}

const users = new Map();

users.set('Tony', 'Admin');
users.set('Jany', 'Admin');
users.set('Bill', 'Dev');
users.set('Ana', 'Admin');


console.log(getAdmin(users));