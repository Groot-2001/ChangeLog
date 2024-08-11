//Updates model
// model Update {
//     id           String        @id @default(uuid())
//     title        String
//     content      String
//     createdAt    DateTime      @default(now())
//     updatedAt    DateTime
//     status       UPDATE_STATUS @default(IN_PROGRESS)
//     version      String? //version is optional field
//     assets       String? //assets could be images,log etc.
//     productId    String
//     products     Product       @relation(fields: [productId], references: [id])
//     UpdatePoints UpdatePoint[]
//   }

import prisma from "../utils/psc_config";

//Create Updates
//user has a Products and Products can have updates
export const createUpdates = async (req, res) => {
    //first we need to check whether user exists or not
    const user = await prisma.user.findUnique({
        where: {
            id: req.user.id
        }
    });

    if (!user) {
        return res.status(400).json({
            message: "User not Found"
        });
    }

    //Now that we have a valid user
    //Now we need to check whether product belongs to that user or not.

    const product = await prisma.product.findUnique({
        where: {
            id: req.body.productId,
        }
    });

    //if there is no product
    if (!product) {
        return res.status(400).json({
            message: "Product not found"
        })
    };

    //Now we can create Product Updates
    const newUpdate = await prisma.update.create({
        data: req.body
    });

    return res.status(200).json({
        data: newUpdate
    })
}

//Get All Updates
export const getAllUpdates = async (req, res) => {
    const products = await prisma.product.findMany({
        where: {
            belongsToId: req.user.id
        },
        include: {
            Updates: true
        }
    });

    if (!products) {
        return res.status(400).json({
            message: "Please Signed In first."
        })
    }

    //No matter how many products there its make sure that all
    //products updates gonna show
    const AllUpdates = products.reduce((allUpdates, product) => {
        return [...allUpdates, ...product.Updates]
    }, []);

    return res.status(200).json({
        data: AllUpdates
    })
}

//Get One Update
export const getOneUpdate = async (req, res) => {
    const update = await prisma.update.findFirst({
        where: {
            id: req.params.id
        }
    });

    if (!update) {
        return res.status(400).json({
            message: "please check your update id correctly."
        })
    }

    return res.status(200).json({
        data: update
    })
}

//update one Update
export const changeUpdate = async (req, res) => {
    const updated_data = await prisma.update.update({
        where: {
            id: req.params.id
        },
        data: req.body
    });

    if (!updated_data) {
        return res.status(400).json({
            message: "update not found."
        })
    }

    return res.status(200).json({
        data: updated_data
    })
}

//delete one Update
export const deleteUpdate = async (req, res) => {
    const deleted_data = await prisma.update.delete({
        where: {
            id: req.params.id
        }
    });

    if (!deleted_data) {
        return res.status(400).json({
            message: "update not found."
        })
    }

    return res.status(200).json({
        data: deleted_data
    })
}