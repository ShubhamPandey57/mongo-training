const User=require("../modes/user")


//create a user
exports.createUser = async (req, res) => {
    try {
        const user = await User.create(req.body)
        res.json(user)
    }
    catch (error) {
        res.json({ error: error.message })
    }
}


//get all user
exports.getUser = async (req, res) => {
    try {
        const user = await User.find()
        res.json(user)
    }
    catch (error) {
        res.json({ error: error.message })
    }
}


// //get single user
exports.getSingleUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)  
        res.json(user)
    }
    catch (error) {
        res.json({ error: error.message })
    }
}


//update user
exports.updateUser=async(req,res)=>{
    try{
        const user=await User.findByIdAndUpdate(req.params.id,req.body)
        res.json(user) 
    }
    catch(error){
        res.json({error:error.message})
    }
}


//delete the user
exports.deleteUser=async(req,res)=>{
    try
    {const user=await User.findByIdAndDelete(req.params.id)
    res.send("user deleted")}
    catch(error){
        res.json({error:error.message})
    }
}