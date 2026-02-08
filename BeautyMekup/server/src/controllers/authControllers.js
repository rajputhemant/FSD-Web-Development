export const UserRegister = async (req, res, next) => {
  try {
    const { fullName, email, mobileNumber, password, role } = req.body;

    if (!fullName || !email || !mobileNumber || !password || !role) {
      const error = new Error("All fields required");
      error.statusCode = 400;
      return next(error);
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const error = new Error("Email already registered");
      error.statusCode = 409;
      return next(error);
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      fullName,
      email,
      mobileNumber,
      password: hashPassword,
      role,
    });

    res.status(201).json({ message: "Registration Successful", data: newUser });
  } catch (error) {
    next(error);
  }
};

export const UserLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      const error = new Error("All fields required");
      error.statusCode = 400;
      return next(error);
    }

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      const error = new Error("Email not registered");
      error.statusCode = 401;
      return next(error);
    }

    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
      const error = new Error("Password didn't match");
      error.statusCode = 401;
      return next(error);
    }

    res.status(200).json({ message: "Login successful", data: existingUser });
  } catch (error) {
    next(error);
  }
};
