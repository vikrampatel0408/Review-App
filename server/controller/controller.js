var Userdb = require('../model/model');

// create and save new user
exports.create = (req, res) => {
    // validate request
    if (!req.body) {
        res.status(400).send({ message: "Content can not be emtpy!" });
        return;
    }

    // new user
    const user = new Userdb({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        password: req.body.Password
    })

    // save user in the database
    user
        .save(user)
        .then(data => {
            //res.send(data)
            res.redirect('/');
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating a create operation"
            });
        });

}

exports.login = async (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "Content can not be emtpy!" });
        return;
    }
    const uemail = await Userdb.find({ email: req.body.email })
    if (!uemail)
        return res.status(400).send('That user not found');
    if (uemail[0].password == req.body.Password) {

        return res.status(400).send('Successfully logged in.');
    }
    else
        return res.status(400).send('Incorrect password or email');
}