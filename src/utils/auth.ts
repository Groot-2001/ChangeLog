import jwt from "jsonwebtoken";
//Generating and verifying JWT Tokens

/**
 * jwt.sign(payload, secretkey, [options, callback])
 * 
 * returns Token
 */


/** createJWT()
 * @param user 
 * user is user payload to identify the user.
 * @return Token
 */

export const createJWT = (user) => {
    try {
        //get the token
        const token = jwt.sign(
            //payload to hash
            { id: user.id, username: user.username },
            //secret key to decode later
            process.env.JWT_SECRET
        );

        //return that token
        return token;
    } catch (error) {
        //During creating token any error generated
        console.log(error);
    }
}

//This function is passed into our protected route like so:
//app.get('/user/login', protect, (req, res) => { //Callback });

export const protect = (req, res,next) => {
    // our Authorization header requires Bearer as the type, 
    // with the JWT token being the credentials.

    /**                     bearer dlfjdjjdljfldj
     * Note: Authorization: <type> <credentials> 
     */

    const Authorization_string = req.headers.authorization;

    //We check to make sure the token is not undefined,
    if (!Authorization_string) {
        console.log(Authorization_string)
        return res.status(401).json({
            message: "There is No Authorization Header"
        })
    }
    /**
     * And then we split req.header into an array. 
     * ["bearer","dfsdfdfdfdfdfs"]
     * This is because the Authorization header comes back as a string. 
     * "bearer dfsdfdfdfdfdfdfs"
     */

    const [, token] = Authorization_string.split(" ");

    //We check to make sure the token is not undefined,
    if (!token) {
        return res.status(401).json({
            message: "Token is Not found in Authorization Header"
        })
    }
    try {
        /**
         * jwt.verify(token, secretkey, [options, callback]) 
         * returns decodedString
        */
        const decode_string = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decode_string;
        next();
    } catch (error) {
        console.error(error);
        res.status(401).json({
            message: "Invalid Token as per the JWT Protocol"
        })
    }
}