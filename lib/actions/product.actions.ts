"use server";
// import { PrismaClient } from "../generated/prisma";
import { prisma } from "@/db/prisma";
import { convertToPlainObject } from "../utils";

//get latest products
export async function getLatestProducts() {
  //   const prisma = new PrismaClient();

  const data = await prisma.product.findMany({
    take: 4,
    orderBy: {
      createdAt: "desc",
    },
  });
  return convertToPlainObject(data);
}

export async function getProductBySlug(slug: string) {
  return await prisma.product.findFirst({
    where: { slug: slug },
  });
}
