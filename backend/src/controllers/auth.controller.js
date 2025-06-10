import User from "../models/user.model";

export const signup = async(req,res) => {
    const {fullNmae,email,password} = req.body
    try{
        if(password.length < 6) {
            return res.status(400).json({ message: "password must be at least 6 characters"});
        }

        const user = await User.findOne({email})

        if(user) return res.status(400).json({ message: "Email alredy exists"});

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        const newUser = new User({
            fullName,
            email,
            password,
        })

        if(newUser) {
            //generate jwt token here

        } else {
            res.status(400).json({ message: "invalid user date"})
        }

    } catch (error){

    }
}

export const login = (req,res) => {
    res.send("login route")
}

export const logout = (req,res) => {
    res.send("logout route")
}