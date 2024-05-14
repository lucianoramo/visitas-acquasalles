// pages/api/medicoes/[id].ts
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { formatDate } from "../../../../../utils";
import Error from "next/error";
const prisma = new PrismaClient();

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
	const id = params.id;
	const searchParams = req.nextUrl.searchParams;
	const startDate = searchParams.get("startDate");
	const endDate = searchParams.get("endDate");

	try {
		const visitas = await prisma.visitas.findMany({
			where: {
				cliente: id as string,
				data_formatted: {
					gte: new Date(startDate!),
					lte: new Date(endDate!),
				},
			},
		});
		return new Response(JSON.stringify(visitas), { status: 200 });
	} catch (error: any) {
		console.error(error);
		return new Response(null, { status: 500, statusText: error.message });
	} finally {
		await prisma.$disconnect();
	}
}
