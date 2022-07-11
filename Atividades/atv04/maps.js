function getAdmins(map){
    let admins = [];
    for([key, value] of map){
        if(value === 'Admin'){
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Diedrish','Admin');
usuarios.set('Luiz','Admin');
usuarios.set('Rick','User');
usuarios.set('Sabrina','Admin');

console.log(getAdmins(usuarios));