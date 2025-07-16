import { PrismaClient } from "../../generated/prisma";

const prisma = new PrismaClient();

export default async() => {
    prisma.$transaction([
        prisma.request.deleteMany(),
    ])
}