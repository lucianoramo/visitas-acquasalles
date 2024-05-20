import React from "react";
import Image from "next/image";

function Header() {
	return (
		<div className='flex w-full bg-slate-200 p-4'>
			<Image
				src='/logo.png'
				alt='Logo'
				width={200}
				height={120}
			/>
			<h1 className='text-2xl font-bold text-center bg-light-blue-800 primary p-3 w-full'>
				Relatório de monitoramento da água
			</h1>
			<p>Algum cabecalo</p>
		</div>
	);
}

export default Header;
