const User = require('../models/userSchema');


module.exports.create = async (req, res) => {
    try {

        const userdata = new User(req.body);

        if (!userdata) {
            return res.status(404).json({ message: "user data not found" })
        }
        const saveData = await userdata.save();
        console.log(saveData);
        return res.status(200).json(saveData)

    } catch (error) {
        return res.status(500).json({ message: error })
    }
}

module.exports.getAll = async (req, res) => {
    try {  
        const userData = await User.find();

        if (!userData) {
            return res.status(404).json(error)
        }
        console.log(userData);
        return res.status(200).json(userData);


    } catch (error) {
        return res.status(500).json({ message: error })

    }
}

module.exports.getOne = async (req, res) => {
    try {
        const id = req.params.id;
        const userData = await User.findById(id)

        if (!userData) {
            return res.status(401).json({ message: "user not available" })
        }

        console.log(userData);
        return res.status(200).json(userData);


    } catch (error) {
        return res.status(500).json({ message: error })

    }
}
module.exports.update = async (req, res) => {
    try {
        const id = req.params.id
        const userData = await User.findById(id);

        if (!userData) {
            return res.status(401).json({ message: "user not available" })
        }

        const updatedData = await User.findByIdAndUpdate(id, req.body, { new: true });
        console.log(updatedData);

        return res.status(200).json(updatedData);

    } catch (error) {
        return res.status(500).json({ message: error })

    }
}

module.exports.userdelete = async (req, res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);
        if (!userExist) {
            return req.status(404).json({ msg: "user does not exist" })
        }
        await User.findByIdAndDelete(id);
        // console.log(id.fname, " deleted");
        return res.status(200).json({ msg: "user deleted sucseccfully" });


    } catch (error) {
        return res.status(500).json({ msg: error })
    }
}