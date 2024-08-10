

//Product Model
// model Product {
//     id          String   @id @default(uuid())
//     name        String   @db.VarChar(255)
//     belongsToId String
//     belongsTo   User     @relation(fields: [belongsToId], references: [id])
//     createdAt   DateTime @default(now())
//     Updates     Update[]
//   }

import prisma from "../utils/psc_config"


//createProduct
export const createProduct = async (req, res) => {
    const products = await prisma.product.create({
        data: {
            name: req.body.name,
            belongsToId: req.user.id
        }
    });

    return res.status(200).json({
        data: products
    })
}

//getAllProducts
export const getAllProduct = async (req, res) => {
    const product_data = await prisma.user.findUnique({
        where: {
            id: req.user.id
        },
        include: {
            products: true
        }
    });

    return res.status(200).json({
        data: product_data.products
    })
}

//getOneProduct
export const getOneProduct = async (req, res) => {
    const product_data = await prisma.product.findUnique({
        where: {
            id_belongsToId: {
                id: req.params.id,
                belongsToId: req.user.id
            }
        }
    });

    return res.status(200).json({
        data: product_data
    })
}

//updateOneProduct
export const updateOneProduct = async (req, res) => {
    const updated_data = await prisma.product.update({
        where: {
            id_belongsToId: {
                id: req.params.id,
                belongsToId: req.user.id
            }
        },
        data: {
            name: req.body.name
        }
    });

    return res.status(200).json({
        data: updated_data
    })
}

//deleteOneProduct
export const deleteOneProduct = async (req, res) => {
    const deleted_data = await prisma.product.delete({
        where: {
            id_belongsToId: {
                id: req.params.id,
                belongsToId: req.user.id
            }
        }
    });

    return res.status(200).json({
        data: deleted_data
    })
}