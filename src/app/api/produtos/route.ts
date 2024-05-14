// pages/api/produtos/[id].ts
import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";
const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
	try {
		const produtos = await prisma.produtos.findMany({});
		return new Response(JSON.stringify(produtos), { status: 200 });
	} catch (error: any) {
		console.error(error);
		return new Response(null, { status: 500, statusText: error.message });
	} finally {
		await prisma.$disconnect();
	}
}
