"use client";
import React from "react";
import useStore from "../store";

const ClientInfo: React.FC = () => {
	const { selectedClient } = useStore();

	if (!selectedClient) return <div>Select a client</div>;

	return (
		<div>
			<h2>{selectedClient?.nome}</h2>
			<table className="table-auto w-full">
				<tbody>
					<tr className="border-b">
						<td className="p-2">Cnpj</td>
						<td className="p-2">{selectedClient?.cnpj || "n/a"}</td>
					</tr>
					<tr className="border-b">
						<td className="p-2">Razão Social</td>
						<td className="p-2">{selectedClient?.razao_social || "n/a"}</td>
					</tr>
					<tr className="border-b">
						<td className="p-2">Cidade</td>
						<td className="p-2">{selectedClient?.cidade || "n/a"}</td>
					</tr>
					<tr className="border-b">
						<td className="p-2">Estado</td>
						<td className="p-2">{selectedClient?.estado || "n/a"}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default ClientInfo;
