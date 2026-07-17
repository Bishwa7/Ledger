import { signUpUserSchema } from "@repo/common/types"
import {prisma} from "@repo/ledger-db/client"
import { Router } from "express"
import bcrypt from "bcrypt"

const userSignupRouter: Router = Router()


userSignupRouter.post("/user", async (req, res) => {

    const parsedData = signUpUserSchema.safeParse(req.body)

    if(!parsedData.success){
        res.json({
            message: "Invalid input format",
            error: parsedData.error
        })
        return;
    }

    const { email, username, password } = parsedData.data;

    try{
        const existingUser = await prisma.user.findFirst({
            where:{
                email
            }
        })

        if(existingUser){
            res.status(403).json({
                message: "Email Already Exists"
            })
            return;
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await prisma.user.create({
            data: {
                email: email,
                username: username,
                password: hashedPassword
            }
        })


        res.status(200).json({
            message: "You are signed up",
            user: {
                email: user.email,
                username: user.username
            }
        })

    }
    catch(err){
        console.error(err)
        res.json({
            message: "Error in Signup (user) API endpoint",
            error: err
        })
    }
})



export default userSignupRouter;