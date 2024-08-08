import { Router } from "express";

const router = Router();


//API ENDPOINTS
/**
 * app.[method]([route], [route handler])
 */

/**
 * Product Routes
 */

//Create A Product
router.post("/Products", () => { })

//Get All Products
router.get("/Products", (req, res) => {
    res.json({
        message: req.shhh_secret
    })
})

//Get Individual Product (Specific one)
router.get("/Products/:id", () => { })

//Update Individual Product (Specific one)
router.put("/Products/:id", () => { })

//Delete Individual Product (Specific one)
router.delete("/Products/:id", () => { })

/**
 * Updates Routes
 */

//Create A Updates
router.post("/Updates", () => { })

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
router.post("/Updatepts", () => { })

//Get All Updates
router.get("/Updatepts", () => { })

//Get Individual Updates (Specific one)
router.get("/Updatepts/:id", () => { })

//Update Individual Updates (Specific one)
router.put("/Updatepts/:id", () => { })

//Delete Individual Updates (Specific one)
router.delete("/Updatepts/:id", () => { })

export default router;