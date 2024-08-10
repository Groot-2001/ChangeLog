import bcrypt from "bcrypt";

/**
 * compare(data, encrypted, cb)
 * data - [REQUIRED] - data to compare.
 * encrypted - [REQUIRED] - data to be compared to.
 * cb - [OPTIONAL] - a callback to be fired once the data has been compared. 
 * uses eio making it asynchronous. If cb is not specified, 
 * a Promise is returned if Promise support is available.
 * err - First parameter to the callback detailing any errors.
 * same - Second parameter to the callback providing whether 
 * the data and encrypted forms match [true | false].
 */

export const comparePassword = (password, hashedPassword) => {
    return bcrypt.compare(password, hashedPassword);
}

/**
 * hash(data, salt, cb)
 * data - [REQUIRED] - the data to be encrypted.
 * salt - [REQUIRED] - the salt to be used to hash the password. 
 * if specified as a number then a salt will be generated with the 
 * specified number of rounds and used (see example under Usage).
 * cb - [OPTIONAL] - a callback to be fired once the data has been encrypted. 
 * uses eio making it asynchronous. If cb is not specified, 
 * a Promise is returned if Promise support is available.
 * err - First parameter to the callback detailing any errors.
 * encrypted - Second parameter to the callback providing the encrypted form.
 */

export const hashPassword = (password) => {
    return bcrypt.hash(password, Number(process.env.SALT))
} 