export const UserRegister = async (req, res, next)=>{
    try {
        console.log(req.body);
        const  {fullName,email,mobileNumber,password,role}=req.body;

        if (!fullName || !email || !mobileNumber || !password || !role) {
      const error = new Error("All feilds required");
      error.statusCode = 400;
      return next(error);
    }
    
     console.log({ fullName, email, mobileNumber, password });

     const existingUser = await UserRegister.findOne({email});
     if(existingUser){
      const error = new Error("Email alredy registered");
      error.statusCode=409;
      return next(error);

     }
         console.log("Sending data to db");

         const salt =await bcrypt.hash(10);
         const hashPassword =await bcrypt.hash(password,salt);
          console.log("Password Hashing Done. hashPassword = ", hashPassword);

         
          const newUser = await User.create({
            fullName,
            mobileNumber,
            password:hashPassword,
          })

          console.log(newUser);
          res.status(201).json({message:"Registration Successful "})       
    } catch (error) {
        next(error);
    }
};


export const UserLogin = async (req,res,next)=>{
  try {
     const {email,password}=req.body;

     if(!email||!password){
      const error=new Error("All feilds required");
      error.statusCode=400;
      return next(error);
     }

     const existingUser = await User.findOne({ email });
    if (!existingUser) {
      const error = new Error("Email not registered");
      error.statusCode = 401;
      return next(error);
    }

     const isVerified = await bcrypt.compare(password, existingUser.password);
    if (!isVerified) {
      const error = new Error("Password didn't match");
      error.statusCode = 401;
      return next(error);
    }

     genToken(existingUser, res);

      res.status(200).json({ message: "Login Successfull", data: existingUser });

  } catch (error) {
    next(error);
  }
};

export const UserLogout = async (req, res, next) => {
  try {
    res.clearCookie("parleG");
    res.status(200).json({ message: "Logout Successfull" });
  } catch (error) {
    next(error);
  }
};
