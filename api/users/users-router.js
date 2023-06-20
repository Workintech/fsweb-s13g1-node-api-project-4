const router = require("express").Router();
const mw = require("./users-middleware");
const usersModel = require("./users-model");

router.get("/", (req, res, next) => {
    try {
        const allUsers = usersModel.getAllUsers();
        res.json(allUsers);
    } catch (error) {
        next(error);
    }
});

router.post("/register", mw.validatePayload, (req, res, next) => {
    try {
        let userObj = {
            username: req.body.username,
            password: req.body.password
        }
        const insertedUser = usersModel.insert(userObj);
        res.status(201).json(insertedUser);   
    } catch (error) {
        next(error);
    }
});

router.post("/login", mw.validatePayload, mw.validateLogin, (req, res, next) => {

});

module.exports = router;