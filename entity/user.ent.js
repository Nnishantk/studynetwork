const {User} = require('../modal');

module.exports={
    // register
    async register(payload){
        const result = await new User(payload)
       await result.save()
       if(result){
           return{success:true,status:200,message:"registerd successfully",data:result};
        }else{
           return{success:false,status:400,message:"something went wrong"};
       }
    },

    // login
    async login(payload){
        const result = await User.findOne({email:payload.email, isDeleted:null});
       if(result){
           const isValid = result.isValidPassward(payload.password);
           if(isValid){
               return{success:true,status:200,message:"login successfully",data:result};
           }else{
               return{success:false,status:400,message:"email or password incorrect"};
            }
        }else{
            return{success:false,status:400,message:"user not found"};
       }
    },

    // get all user
    async getAllUser(){
        const result = await User.find({isDeleted:null});
       if(result){
           return{success:true,status:200,message:"get all user successfully",data:result};
        }else{
           return{success:false,status:400,message:"something went wrong",data:result};
       }
    },
}