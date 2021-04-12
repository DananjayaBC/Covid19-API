const router = require('express').Router();
const User = require('../model/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { registerValidation, loginValidation } = require('../validation')




router.post('/register', async (req, res) => {

    //LETS VALIDATE THE DATA BEFORE WE A USER
    const { error } = registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    //Cheacking if the user is already in the database
    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) return res.status(400).send('Email already exists');

    //Hash passwords
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    //Create a new user
    const user = new User({
        _id: req.body._id,
        name: req.body.name,
        email: req.body.email,
        password: hashPassword,
        age: req.body.age,
        address: req.body.address,
        location: req.body.location,
        profession: req.body.profession,
        health: req.body.health,

    });
    try {
        const savedUser = await user.save();
        res.send({ user: user._id });
    } catch (err) {
        res.status(400).send(err);
    }
});

//Login
router.post('/login', async (req, res) => {
    //LETS VALIDATE THE DATA BEFORE WE A USER
    const { error } = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    //Cheacking if the email exists
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send('Email is not found');

    //PASSWORD IS CORRECT
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).send('Invalid password');

    //Create and assign a token
    const token = jwt.sign({ _id: user._id }, TOKEN_SECRET = "skjhfdjsdhfkkjwer")
    res.header('auth-token', token).send(token);




});


module.exports = router;