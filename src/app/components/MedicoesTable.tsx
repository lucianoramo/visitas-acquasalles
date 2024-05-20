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
		<div className='p-4 overflow-x-auto'>
			<p>Total Mediçoes: {medicoes.length} </p>
			<table className='table table-zebra table-xs'>
				<thead className=''>
					<tr>
						<th className='text-wrap  text-center w-auto'>Local</th>
						<th className='text-wrap  text-center'>Hora</th>
						<th className='text-wrap  text-center'>Cloro Encontrado</th>
						<th className='text-wrap  text-center'>Cloro Corrigido</th>
						<th className='text-wrap  text-center'>PH Encontrado</th>
						<th className='text-wrap  text-center'>PH Corrigido</th>
						<th className='text-wrap  text-center'>Turbidez Encontrada</th>
						<th className='text-wrap  text-center'>Turbidez Corrigida</th>
						<th className='text-wrap  text-center'>Para Analise</th>
					</tr>
				</thead>
				<tbody className=''>
					{medicoes.map((medicao) => (
						<tr key={medicao.id_medicao}>
							<td>{medicao.local}</td>
							<td className=' text-center'>{medicao.hora}</td>
							<td className=' text-center'>{medicao.cloro_encontrado}</td>
							<td className=' text-center'>{medicao.cloro_corrigido}</td>
							<td className=' text-center'>{medicao.ph_encontrado}</td>
							<td className=' text-center'>{medicao.ph_corrigido}</td>
							<td className=' text-center'>{medicao.turbidez_encontrada}</td>
							<td className=' text-center'>{medicao.turbidez_corrigida}</td>
							<td className=' text-center'>{medicao.para_analise ? "Sim" : "Nâo"}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default MedicoesTable;
