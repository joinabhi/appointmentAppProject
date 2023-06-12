const User = require('../model/user');

exports.createUser = async (req, res, next) => {
    const name = req.body.name;
    const phonenumber = req.body.phonenumber;
    const email = req.body.email;
    const data= await User.create({
      name:name,
      phonenumber:phonenumber,
      email:email
    })
    res.status(201).json({ newUserDetails: data });
    
  
  };

  exports.getUser = async (req, res, next) => {
    console.log("Abhishekkkkkkkkkkk")
    const users=await User.findAll()
    console.log('22',users)
    res.status(200).json({allUsers: users});
       
       
  };
  
  exports.deleteUser=async (req, res, next)=>{
    const userId=req.params.id;
    try{
    // const user=await User.findBypk(userId)
    // if (!user) {
    //   return res.status(404).json({ message: 'User not found' });
    // }
    await User.destroy({where:{id:userId}});
    res.status(200).json({ message: 'User deleted successfully' })
  }
    catch(error){
      res.status(500).json({ error: error });
  }
}