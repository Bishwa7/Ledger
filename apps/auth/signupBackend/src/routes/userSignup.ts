import { Router } from "express"


const userSignupRouter: Router = Router()


userSignupRouter.get("/user", (req, res) => {

    res.status(200).json({
        message: "Hello........This is Signup endpoint"
    })
})



export default userSignupRouter;