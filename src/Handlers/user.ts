import prisma from "../utils/psc_config";
import { hashPassword, comparePassword } from "../utils/crypto_pass";
import { createJWT } from "../utils/auth";

export const createUser = async (req, res) => {
    const user = await prisma.user.create({
        data: {
            username: req.body.username,
            password: await hashPassword(req.body.password)
        }
    });

    //create JWT Token
    const token = createJWT(user);
    res.json({ token })
}

export const signin = async (req, res) => {

    //find user in db.
    const user = await prisma.user.findUnique({
        where: {
            username: req.body.username
        }
    });

    //if user is not found in db.
    if (!user) {
        return res.status(404).json({
            message: "User not Found"
        });
    }

    //Matching current password with stored one.
    const isValid = await comparePassword(req.body.password, user.password);

    //If password is wrong.
    if (!isValid) {
        return res.status(404).json({
            message: "Password not Matched."
        })
    }

    //If username and password both right.
    //Then Assign a token to user
    const token = createJWT(user);
    res.json({ token });
}
