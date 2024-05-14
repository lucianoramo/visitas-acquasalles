"use client";
import React from "react";
import ClientInfo from "./ClientInfo";
import useStore from "../store";
import VisitasTable from "./VisitasTable";
import DateFields from "./DateFields";
import MedicoesTable from "./MedicoesTable";
import ProdutosEntreguesTable from "./ProdutosEntreguesTable";
import Header from "./Header";
import MedicaoMensal from "./MedicaoMensal";

// Define the type for the Select option

const Main: React.FC = () => {
	const { selectedClient, visitas } = useStore();
	return (
		<div className='container m-auto p-10 items-center justify-center'>
			<div className='flex flex-col bg-white shadow-md rounded-md justify-center items-center'>
				<Header />
				<DateFields />
				<MedicaoMensal />
				{selectedClient && <ClientInfo />}
				{/* {selectedClient && <OrdersTable client={selectedClient} />} */}
				{selectedClient && <VisitasTable clientId={selectedClient.value} />}
				{selectedClient && <MedicoesTable ids={visitas.map((v) => v.id_visita)} />}
				{selectedClient && <ProdutosEntreguesTable ids={visitas.map((v) => v.id_visita)} />}
			</div>
		</div>
	);
};

export default Main;
