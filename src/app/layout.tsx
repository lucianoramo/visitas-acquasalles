import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Relatório de Visitas",
	description: "Acquasalles - Relátorio de Visitas",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='pt-br'
			data-theme='winter'>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
