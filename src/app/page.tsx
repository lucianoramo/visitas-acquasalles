"use client";
import "./globals.css";
import Main from "./components/Main";
import { ThemeProvider } from "@material-tailwind/react";

export default function Home() {
	return (
		<ThemeProvider>
			<Main />
		</ThemeProvider>
	);
}
