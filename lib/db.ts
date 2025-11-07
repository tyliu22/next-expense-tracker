import { PrismaClient } from "@/app/generated/prisma/client";
import { GlobalLayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";

declare global {
    var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV != 'production') {
    globalThis.prisma = db
}