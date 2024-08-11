
import { body, validationResult } from "express-validator";

export const handleInputError = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            message: errors.array()
        })
    } else {
        next();
    }
}

export const checkProducts = [
    body('name').isString().notEmpty(),
];

export const checkProductUpdate = [
    body("title").optional().isString(),
    body("content").optional().isString(),
    body("version").optional().isString(),
    body("status").isIn(["IN_PROGRESS", "SHIPPED", "DEPRECATED"]).optional(),
    body("productId").exists().isString(),
    body("updatedAt").optional().isString()
];

export const checkUpdatePoints = [
    body("name").isString().notEmpty(),
    body("description").isString().notEmpty()
]