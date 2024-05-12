const Reguser = require('../models/registration')


const register = async (req, res) => {
    const { Username, Email, Password, confirmPass } = req.body;

    if (!Username || !Email || !Password || !confirmPass) {
        return res.status(400).json({ error: "All fields are required" });
    }

    if (Password !== confirmPass) {
        return res.status(400).json({ error: "Passwords do not match" });
    }

    try {
        const newUser = new Reguser({
            Username,
            Email,
            Password,
            confirmPass,
        });


        console.log(newUser);
        await newUser.save();


        return res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};


const LogUser = async (req, res) => {
    const { Username, Password } = req.params;
    const Validuser = Reguser.findOne({ Username })

    if (!Validuser) {
        return res.status(404).json({ error: 'Invalid username or password' });

    }
    const isMatch = await user.comparePassword(Password);
    
    if (!isMatch) {
        return res.status(401).json({ error: 'Invalid username or password' });
    }

    if (Validuser && isMatch) {
        return res.status(200).json({ success: true, message: 'Authentication successful' });
    }

}



module.exports = { register };














// if (!Validuser) {
//     res.status(404).json({ message: 'Registration are required' })
//     console.log('invalid username');
// }
// if (!Validpassword) {
//     res.status(404).json({ message: 'please enter valid password' })
//     console.log('invalid password');
// }