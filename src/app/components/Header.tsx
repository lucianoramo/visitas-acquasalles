import React from "react";
import Image from "next/image";

function Header() {
	return (
		<div className="flex flex-col w-full">
			<div className="flex items-start justify-between p-4">
				<Image
					src="/acquasalles-logo.png"
					alt="Logo"
					width={200}
					height={120}
				/>
				<p>Algum cabecalo</p>
			</div>
			<h1 className="text-2xl font-bold text-center bg-light-blue-800 text-white p-3 w-full">
				Relatório de monitoramento da água 123
			</h1>
		</div>
	);
}

export default Header;
