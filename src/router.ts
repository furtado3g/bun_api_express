import { Router } from "express";
import userRouter from "./controllers/users";

const routes = Router()

routes.get('/',(req,res) => {
    return res.json({
        message: "hello world!"
    })
})

routes.use('/users',userRouter)

export default routes