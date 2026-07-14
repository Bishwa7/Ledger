import express from "express"
import cors from "cors"
import userSignupRouter from "./routes/userSignup";

const app = express()
const PORT = process.env.PORT || 4000;

app.use(express.json())
app.use(cors())


app.use("/api/v1/signup", userSignupRouter)


async function main(){
    app.listen(PORT, ()=> {
        console.log(`SignUp Backend running on port: ${PORT}`)
    })
}

main().catch(err => console.error(err))