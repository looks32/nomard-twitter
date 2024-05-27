// import { PrismaClient } from "@prisma/client";

// declare global {
//   var db: PrismaClient | undefined;
// }

// const db = new PrismaClient();

// if (process.env.NODE_ENV === "development") global.db = db;

// export default db;

import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare global {
  var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>;
}

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;