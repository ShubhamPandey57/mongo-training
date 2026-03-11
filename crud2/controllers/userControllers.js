const User=require("../modes/user")

exports.createUser = async (req, res) => {
    try {
        const user = await User.create(req.body)
        res.json(user)
    }
    catch (error) {
        res.json({ error: error.message })
    }
}