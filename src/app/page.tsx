"use client";
import "../../styles/globals.css";
import Main from "./components/Main";

export default function Home({ Component, pageProps }: { Component: React.ComponentType<any>; pageProps: any }) {
	return <Main {...pageProps} />;
}
