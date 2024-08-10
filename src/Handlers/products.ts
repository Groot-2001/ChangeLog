

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
        products
    })
}

//getAllProducts
export const getAllProduct = async (req, res) => {
    const data = await prisma.product.findMany({
        where: {
            belongsToId: req.user.id
        }
    });

    return res.status(200).json({
        data
    })
}

//getOneProduct
export const getOneProduct = async (req, res) => {
    const data = await prisma.product.findUnique({
        where: {
            id: req.params.id
        }
    });

    return res.status(200).json({
        data
    })
}

//updateOneProduct
export const updateOneProduct = async (req, res) => {
    const updated_data = await prisma.product.update({
        where: {
            id: req.params.id
        },
        data: {
            name: req.body.name
        }
    });

    return res.status(200).json({
        updated_data
    })
}

//deleteOneProduct
export const deleteOneProduct = async (req, res) => {
    const deleted_data = await prisma.product.delete({
        where: {
            id: req.params.id
        }
    });

    return res.status(200).json({
        deleted_data
    })
}