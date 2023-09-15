import { PrismaClient } from "@prisma/client";
import { Router } from "express";


const userRouter = Router();
const prisma = new PrismaClient()


userRouter.get(`/`, async (req, res) => {
    const users = await prisma.users.findMany()
    res.json(users)
})


export default userRouter