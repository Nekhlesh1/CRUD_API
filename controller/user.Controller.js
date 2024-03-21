const { User } = require("../models/user.model")


module.exports.createUser = async (req, res) => 
{
   const  {name, email, password} = req.body
   console.log(name,email,password)

   if ((!name) || (!email) || (!password)) {
    res.status(400).json(
        {
            message: "Required all fields"
        })
   }

   const existingUser = await User.findOne({email})
   if(existingUser)
   {
    res.status(400).json({message: "User with given email already exists!"})
   }
   const user = await User.create({name, email, password})
   if(!user)
    {
        res.status(500).json({message : "User creation failed!!"})
    }
    res.status(200).json({
        message: "User creation successfull",
        data: user
    })
}

module.exports.updateUserName = async (req,res)=>{
    const {email, newName} = req.body
    
    if(!email)
    
    res.status(400).json({message : "Email cannot be empty "})
    const user = await User.findOne({email})
    const newUser = await User.findById(user._id)
    
    if(!user)
    res.status(400).json({message: "User not found"})
    const updatedDetail = await User.findByIdAndUpdate(user._id, {name: newName},{new: true})
    console.log(updatedDetail)
    res.status(200).json({data : updatedDetail})


}

module.exports.getUser = async(req,res) =>
{
    const users = await User.find({})
    if(!users)
    {
        res.status(400).json("No users found")
    }
    res.status(200).json({
        message: "Success",
        data: users
    })

}

module.exports.deleteUser = async(req,res) =>
{
    const {email} = req.body;

    const deletedUser = await User.findOneAndDelete({email})
    if(deletedUser)
    {
        res.status(200).json({message: "User deleted ", data: deletedUser})
    }
}

