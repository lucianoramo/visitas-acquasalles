// app/components/VisitasTable.tsx
import React, { useEffect, useState } from "react";
import useStore from "../store";
import { MedicaoType } from "../../../types";

interface MedicoesTableProps {
	ids: any[];
}

const MedicoesTable: React.FC<MedicoesTableProps> = (ids) => {
	const commaSeparatedIds = ids.ids.join(",");
	console.log(`commaSeparatedIds:`, commaSeparatedIds);
	const { medicoes, setMedicoes, visitas } = useStore();
	useEffect(() => {
		fetch(`/api/medicoes/?ids=${commaSeparatedIds}`)
			.then((response) => {
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status} - ${response.statusText}`);
				}
				return response.json();
			})
			.then((medicoes: MedicaoType[]) => {
				console.log("UseEffect - Medicoes", ids.ids);
				setMedicoes(medicoes);
				return medicoes;
			})
			.catch((error) => {
				console.error("Error fetching medicoes:", error);
			});
	}, [visitas]);

	return (
		<div className="p-4">
			<p>Total Mediçoes: {medicoes.length} </p>
			<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
				<thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
					<tr>
						<th>Hora</th>
						<th>Cloro Encontrado</th>
						<th>Cloro Corrigido</th>
						<th>PH Encontrado</th>
						<th>PH Corrigido</th>
						<th>Turbidez Encontrada</th>
						<th>Turbidez Corrigida</th>
						<th>Local</th>
						<th>Para Analise</th>
					</tr>
				</thead>
				<tbody className="table-auto p-2">
					{medicoes.map((medicao) => (
						<tr key={medicao.id_medicao}>
							<td>{medicao.hora}</td>
							<td>{medicao.cloro_encontrado}</td>
							<td>{medicao.cloro_corrigido}</td>
							<td>{medicao.ph_encontrado}</td>
							<td>{medicao.ph_corrigido}</td>
							<td>{medicao.turbidez_encontrada}</td>
							<td>{medicao.turbidez_corrigida}</td>
							<td>{medicao.local}</td>
							<td>{medicao.para_analise ? "Yes" : "No"}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default MedicoesTable;
