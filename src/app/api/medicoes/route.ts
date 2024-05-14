// pages/api/medicoes/[id].ts
import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";
const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
	const searchParams = req.nextUrl.searchParams;
	const ids = searchParams.get("ids")?.split(",");

	try {
		const medicoes = await prisma.medicoes.findMany({
			where: {
				id_visita: { in: ids },
			},
		});
		return new Response(JSON.stringify(medicoes), { status: 200 });
	} catch (error: any) {
		console.error(error);
		return new Response(null, { status: 500, statusText: error.message });
	} finally {
		await prisma.$disconnect();
	}
}
