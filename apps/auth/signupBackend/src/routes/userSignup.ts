import {Router} from "express"

const signupRouter: Router = Router()


signupRouter.get("/user", (req, res)=> {

    res.json({
        message: "Hello....This is signup backend."
    })
})


export default signupRouter;