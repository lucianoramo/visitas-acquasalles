import React from "react";

function GerarRelatorio() {
	const showModal = () => {
		const modal = document.getElementById("exportReportModal") as HTMLDialogElement | null;
		if (modal) {
			modal.showModal();
		}
	};

	return (
		<div className='flex mx-8 my-4 justify-end'>
			<button
				className='btn'
				onClick={showModal}>
				Exportar Relatório
			</button>
			<dialog
				id='exportReportModal'
				className='modal'>
				<div className='modal-box'>
					<h3 className='font-bold text-lg'>Exportar Relatório</h3>
					<p className='py-4'>Seu relatório foi exportado com sucesso</p>
					<div className='modal-action'>
						<form method='dialog'>
							{/* if there is a button in form, it will close the modal */}
							<button className='btn'>Fechar</button>
						</form>
					</div>
				</div>
			</dialog>
		</div>
	);
}

export default GerarRelatorio;
