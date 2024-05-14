// app/components/VisitasTable.tsx
import React, { useEffect, useState } from "react";
import useStore from "../store";
import { ProdutosEntreguesType } from "../../../types";

interface ProdutosEntreguesTableProps {
	ids: any[];
}

const ProdutosEntreguesTable: React.FC<ProdutosEntreguesTableProps> = (ids) => {
	const commaSeparatedIds = ids.ids.join(",");
	const [produtosEntregues, setProdutosEntregues] = useState<ProdutosEntreguesType[]>([]);
	const { visitas } = useStore();
	useEffect(() => {
		fetch(`/api/produtosentregues/?ids=${commaSeparatedIds}`)
			.then((response) => {
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status} - ${response.statusText}`);
				}
				return response.json();
			})
			.then((produtosEntregues: ProdutosEntreguesType[]) => {
				console.log("UseEffect - Medicoes", ids.ids);
				setProdutosEntregues(produtosEntregues);
				return produtosEntregues;
			})
			.catch((error) => {
				console.error("Error fetching medicoes:", error);
			});
	}, [visitas]);

	return (
		<div className="p-4">
			<p>Total Mediçoes: {produtosEntregues.length} </p>
			<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
				<thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
					<tr>
						<th>Nome</th>
						<th>Quantidade</th>
						<th>Unidade</th>
						<th>Preço</th>
						<th>Total</th>
					</tr>
				</thead>
				<tbody className="table-auto p-2">
					{produtosEntregues.map((produto) => (
						<tr key={produto.id_visita_produtos}>
							<td>{produto.nome_produto}</td>
							<td>{produto.quantidade}</td>
							<td>{produto.unidade}</td>
							<td>{produto.preco}</td>
							<td>{produto.total}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default ProdutosEntreguesTable;
