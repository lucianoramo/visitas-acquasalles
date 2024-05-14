// pages/api/medicoes/[id].ts
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function fetchData() {
	const x = [
		"0004dcd3",
		"09cac347",
		"0c0d2732",
		"0f121f82",
		"1272b6c1",
		"1399592a",
		"1d61c619",
		"277358d9",
		"2a337af1",
		"2c5c30d1",
		"2e997bbc",
		"2f01da82",
		"31321a23",
		"44d429dd",
		"44e3f7f9",
		"46a6012a",
		"47b1f56f",
		"4c30e64a",
		"509bbf6e",
		"53b0f7e6",
		"53c3d944",
		"5e62fe80",
		"5f1589c5",
		"67355ec6",
		"703a7c98",
		"7365a6d2",
		"77159dc1",
		"79110452",
		"82f2a587",
		"8683f0ec",
		"96579f53",
		"9fc8cc12",
		"a3e24304",
		"a451cb1c",
		"a53cedd4",
		"aacc8f74",
		"af90cd68",
		"bbaf064c",
		"c1399ae9",
		"c5b7981a",
		"cbe23101",
		"d2bef8ba",
		"dcb59004",
		"e8b8cd8d",
		"f02e4f00",
		"f16471be",
		"f2542b9d",
		"f78deb4d",
		"f80ada5d",
	];

	try {
		const medicoes = await prisma.visita_produtos.findMany({
			where: {
				id_visita: { in: x },
			},
		});
		console.log(new Response(JSON.stringify(medicoes), { status: 200 }));
	} catch (error) {
		console.error(error);
		return new Response(null, { status: 500, statusText: error.message });
	} finally {
		await prisma.$disconnect();
	}
}

fetchData();
