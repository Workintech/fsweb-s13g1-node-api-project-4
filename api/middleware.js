const { getAllUsers, createUser, findUser, checkUserName } = require("./user-model");

function logger(req, res, next) {

    const method = req.method;
    const url = req.originalurl,
    const timestamp = new Date().toLocaleString();
    console.log(method + "--" + url + "--" + timestamp);
    console.log(`${method}--${url}--${timestamp}`);
    next();
}
function validateNewUser(req, res, next) {
    const { kullaniciadi, sifre } = req.body;
    if (!kullaniciadi || !sifre) {
        res.status(400).json({ message: "Eksik Alan var" })
    } else {
        let isExistUserName = checkUserName(kullaniciadi);
        if (isExistUserName) {
            res.json(400).json({ message: `${kullaniciadi} daha önce kullanılmıştır.` })
        } else {
            next();
        }
    }
}

function validateInput(req, res, next) {
    const { kullaniciadi, sifre } = req.body;
    if (!kullaniciadi || !sifre) {
        res.status(400).json({ message: "Eksik Alan var" });
    }
    else {
        next();
    }

}

function validateLoginUser(req, res, next) {
    const { kullaniciadi, sifre } = req.body;
    if (!kullaniciadi || !sifre) {
        res.status(400).json({ message: "Eksik Alan var" });
        else {
            let isExistUser = findUser({ kullaniciadi: kullaniciadi, sifre: sifre });
            if (!isExistUser) {
                res.status(404).json({ message: "Böyle bir kullanıcı bulunamadı" });
            } else {
                next();
            }
        }
    }
    module.exports = {
        validateLoginUser,
        validateNewUser
    }
}