import { Router } from "express";
import { createProduct, deleteOneProduct, getAllProduct, getOneProduct, updateOneProduct } from "./Handlers/products";

const router = Router();

import {
    checkProducts,
    checkProductUpdate,
    handleInputError,
    checkUpdatePoints
} from "./utils/input_validator";

//API ENDPOINTS
/**
 * app.[method]([route], [route handler])
 */

/**
 * Product Routes
 */

//Create A Product
router.post("/Products", createProduct)

//Get All Products
router.get("/Products", getAllProduct)

//Get Individual Product (Specific one)
router.get("/Products/:id", getOneProduct)

//Update Individual Product (Specific one)
router.put("/Products/:id", checkProducts, handleInputError, updateOneProduct)

//Delete Individual Product (Specific one)
router.delete("/Products/:id", deleteOneProduct)

/**
 * Updates Routes
 */

//Create A Updates
router.post("/Updates", checkProductUpdate, handleInputError, () => { })

//Get All Updates
router.get("/Updates", () => { })

//Get Individual Updates (Specific one)
router.get("/Updates/:id", () => { })

//Update Individual Updates (Specific one)
router.put("/Updates/:id", () => { })

//Delete Individual Updates (Specific one)
router.delete("/Updates/:id", () => { })

/**
 * Updatepts Routes
 */

//Create A Updates
router.post("/Updatepts", checkUpdatePoints, handleInputError, () => { })

//Get All Updates
router.get("/Updatepts", () => { })

//Get Individual Updates (Specific one)
router.get("/Updatepts/:id", () => { })

//Update Individual Updates (Specific one)
router.put("/Updatepts/:id", () => { })

//Delete Individual Updates (Specific one)
router.delete("/Updatepts/:id", () => { })

export default router;