"use client";
import React, { useEffect, ChangeEvent } from "react";
import Select from "react-select";
import ClientInfo from "./ClientInfo";
import useStore from "../store";
import VisitasTable from "./VisitasTable";
import DateFields from "./DateFields";
import { Client } from "../../../types";

// Define the type for the Select option
interface Option {
	value: string;
	label: string;
}

const Main: React.FC = () => {
	const { clients, selectedClient, setClients, setSelectedClient } = useStore();

	// Fetch all clients
	useEffect(() => {
		fetch("/api/clients")
			.then((response) => {
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response}`);
				}
				return response.json();
			})
			.then((data: Client[]) =>
				setClients(data.map((client) => ({ value: client.id, label: client.nome, ...client })))
			)
			.catch((error) => {
				console.error("Error fetching clients:", error);
			});
	}, []);

	const handleChange = (selectedOption: Option | null) => {
		setSelectedClient(selectedOption);
		console.log(`Option selected:`, selectedOption);
	};

	return (
		<section className="flex bg-slate-600 p-10 m-10">
			<div className="bg-slate-800">
				<Select
					value={selectedClient}
					onChange={handleChange}
					options={clients}
					placeholder="Selecione um cliente"
					className="w-1/2 p-2 m-2"
				/>
				{selectedClient && <DateFields />}
				{selectedClient && <ClientInfo />}
				{/* {selectedClient && <OrdersTable client={selectedClient} />} */}
				{selectedClient && <VisitasTable clientId={selectedClient.value} />}
			</div>
		</section>
	);
};

export default Main;
