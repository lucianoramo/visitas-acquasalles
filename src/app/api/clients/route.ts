import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();
export async function GET() {
	try {
		const clients = await prisma.clientes.findMany({
			orderBy: {
				nome: "asc",
			},
		});
		return NextResponse.json(clients);
	} catch (error) {
		return NextResponse.error();
	} finally {
		await prisma.$disconnect();
	}
}
