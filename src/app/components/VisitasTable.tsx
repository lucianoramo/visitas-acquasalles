// app/components/VisitasTable.tsx
import React, { useEffect, useState } from "react";
import useStore from "../store";
import { VisitaType } from "../../../types";

interface VisitasTableProps {
	clientId: string;
}

const VisitasTable: React.FC<VisitasTableProps> = () => {
	const { selectedClient, startDate, endDate, visitas, setVisitas } = useStore();
	useEffect(() => {
		if (endDate === null || startDate === null) return;
		fetch(`/api/visitas/${selectedClient.id}/?startDate=${startDate}&endDate=${endDate}`)
			.then((response) => {
				if (!response.ok) {
					console.log("ERROR", response.headers, response.status, response.statusText);
					throw new Error(`HTTP error! status: ${response.status} - ${response.statusText}`);
				}

				return response.json();
			})
			.then((visitas: VisitaType[]) => {
				setVisitas(visitas);
				console.log("Visitas", visitas);
				return visitas;
			})
			.catch((error) => {
				console.error("Error fetching clients:", error);
			});
	}, [selectedClient, startDate, endDate]);

	return (
		<div className="p-4">
			<p>Total Visitas {visitas.length} </p>
			<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 row-">
				<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
					<tr h-6>
						<th
							scope="col"
							className="px-6 py-3">
							Data Visita
						</th>
						<th
							scope="col"
							className="px-6 py-3">
							Técnico
						</th>
						<th
							scope="col"
							className="px-6 py-3">
							Tipo Visita
						</th>
						<th
							scope="col"
							className="px-6 py-3">
							Tem Produtos
						</th>
						<th
							scope="col"
							className="px-6 py-3">
							Tem Medição
						</th>
						<th
							scope="col"
							className="px-6 py-3">
							Tem Manutenção
						</th>
						<th
							scope="col"
							className="px-6 py-3">
							Hora Inicial
						</th>
						<th
							scope="col"
							className="px-6 py-3">
							Hora Final
						</th>
						<th
							scope="col"
							className="px-6 py-3">
							Observação
						</th>
					</tr>
				</thead>
				<tbody className="p-2">
					{visitas.map((visita) => (
						<tr
							key={visita.id_visita}
							className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 h-4">
							<td className="px-6 py-4">{visita.data_visita}</td>
							<td className="px-6 py-4">{visita.tecnico}</td>
							<td className="px-6 py-4">{visita.tipo_visita}</td>
							<td className="px-6 py-4">{visita.tem_produtos}</td>
							<td className="px-6 py-4">{visita.tem_medicao}</td>
							<td className="px-6 py-4">{visita.tem_manutencao}</td>
							<td className="px-6 py-4">{visita.horainicial}</td>
							<td className="px-6 py-4">{visita.horafinal}</td>
							<td className="px-6 py-4">{visita.observacao}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default VisitasTable;
