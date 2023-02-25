const { v1: uuidv1 } = require('uuid');


function createId() {
    return uuidv1();
}

const initialUsers () => {
    let initialUserList = [
        { id: createId(), kullaniciadi: "hilal", sifre: "hilal1234454" },
        { id: createId(), kullaniciadi: "hilal1", sifre: "hilal1234454" },
        { id: createId(), kullaniciadi: "hilal2", sifre: "hilal1234454" },
        { id: createId(), kullaniciadi: "hilal3", sifre: "hilal1234454" },
        { id: createId(), kullaniciadi: "hilal4", sifre: "hilal1234454" }
    ];
    return initialUserList;

};

let users = initialUsers();


const getAllUsers = (){
    return users;

}
const createUser = (user) => {
    user.id = createId(),
        users.push(user);
    return user;
}
const findUser = (user) => {
    let isExistUser = false;
    users.forEach(userItem => {
        if (userItem.kullaniciadi == user.kullaniciadi && userItem.sifre == user.sifre) {
            isExistUser = true;
            return user;
        }

    });
    for (let i = 0; i < users.length; i++) {
        const userItem = users[i];
        if (userItem.kullaniciadi == user.kullaniciadi && userItem.sifre == user.sifre) {
            isExitUser = true;
            break;
        }
    }
    let findedList = users.filter(userItem => userItem.kullaniciadi == user.kullaniciadi && userItem.sifre == user.sifre);
    if (findedList.length > 0) {
        isExistUser = true;
    }
    let findUser = users.find(userItem => userItem.kullaniciadi == user.kullaniciadi && userItem.sifre == user.sifre);
    if (findUser) {
        isExistUser = true;
    }
    return isExistUser;
};
const checkUserName = (kullaniciadi) => {
    let isExistUserName = false;
    for (let i = 0; i < users.length; i++) {
        const userItem = users[i];

        if (userItem.kullaniciadi == kullaniciadi) {
            isExistUserName = true;
            break;
        }

    }
    return isExistUserName;
}

module.export = {
    getAllUsers,
    createUser,
    findUser,
    checkUserName
}