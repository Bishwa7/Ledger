import { signUpUserSchema } from "@repo/common/types"
import { Router } from "express"

const userSignupRouter: Router = Router()


userSignupRouter.get("/user", (req, res) => {

    const parsedData = signUpUserSchema.safeParse(req.body)

    if(!parsedData.success){
        res.json({
            message: "Invalid input format",
            error: parsedData.error
        })
    }

    res.status(200).json({
        message: "Hello........This is Signup endpoint",
        success: parsedData.success,
        parsedData: parsedData.data
    })
})



export default userSignupRouter;