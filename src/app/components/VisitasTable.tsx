// app/components/VisitasTable.tsx
import React, { useEffect, useState } from "react";
import useStore from "../store";
import { Visita } from "../../../types";
import { log } from "console";

interface VisitasTableProps {
	clientId: string;
}

const VisitasTable: React.FC<VisitasTableProps> = () => {
	const { selectedClient, startDate, endDate } = useStore();
	const [visitas, setVisitas] = useState<Visita[]>([]);
	useEffect(() => {
		console.log("selectedClient", selectedClient.id);
		fetch(`/api/visitas/${selectedClient.id}/?startDate=${startDate}&endDate=${endDate}`)
			.then((response) => {
				if (!response.ok) {
					console.log("ERROR", response.headers, response.status, response.statusText);
					throw new Error(`HTTP error! status: ${response.status} - ${response.statusText}`);
				}

				return response.json();
			})
			.then((visitas: Visita[]) => {
				setVisitas(visitas);
				console.log("Visitas", visitas);
				return visitas;
			})
			.catch((error) => {
				console.error("Error fetching clients:", error);
			});
	}, [selectedClient, startDate, endDate]);

	return (
		<>
			<p>Total Visitas {visitas.length} </p>
			<table>
				<thead>
					<tr>
						<th>ID Visita</th>
						<th>Data Visita</th>
						<th>Técnico</th>
						<th>Cliente</th>
						<th>Tipo Visita</th>
						<th>Tem Produtos</th>
						<th>Tem Medição</th>
						<th>Tem Manutenção</th>
						<th>Hora Inicial</th>
						<th>Hora Final</th>
						<th>Observação</th>
					</tr>
				</thead>
				<tbody>
					{visitas.map((visita) => (
						<tr key={visita.id_visita}>
							<td>{visita.id_visita}</td>
							<td>{visita.data_visita}</td>
							<td>{visita.tecnico}</td>
							<td>{visita.cliente}</td>
							<td>{visita.tipo_visita}</td>
							<td>{visita.tem_produtos}</td>
							<td>{visita.tem_medicao}</td>
							<td>{visita.tem_manutencao}</td>
							<td>{visita.horainicial}</td>
							<td>{visita.horafinal}</td>
							<td>{visita.observacao}</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};

export default VisitasTable;
