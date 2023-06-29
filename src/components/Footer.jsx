import { useState } from "react";
import { LinkListGrid } from "./LinkListGrid";
import { SelectLanguage } from "./SelectLanguage";

export const Footer = () => {
	const [listLinks, setListLinks] = useState([
		{ text: "Preguntas frecuentes", url: "#" },
		{ text: "Centro de ayuda", url: "#" },
		{ text: "Cuenta", url: "#" },
		{ text: "Prensa", url: "#" },
		{ text: "Relaciones con inversionistas", url: "#" },
		{ text: "Empleo", url: "#" },
		{ text: "Canjear tarjetas de regalo", url: "#" },
		{ text: "Comprar tarjetas de regalo", url: "#" },
		{ text: "Formas de ver", url: "#" },
		{ text: "Términos de uso", url: "#" },
		{ text: "Privacidad", url: "#" },
		{ text: "Preferencias de cookies", url: "#" },
		{ text: "Información corporativa", url: "#" },
		{ text: "Contáctanos", url: "#" },
		{ text: "Prueba de velocidad", url: "#" },
		{ text: "Avisos legales", url: "#" },
		{ text: "Originales de Netflix", url: "#" },
	]);

	return (
		<footer className='bg-black text-white'>
			<div className='container mx-auto px-8 md:px-16 xl:px-28 py-16'>
				<p>
					¿Preguntas? Llama al{" "}
					<a className='underline decoration-1' href='#'>
						0-800-52352
					</a>
				</p>
				<LinkListGrid list={listLinks} />

				<SelectLanguage />

				<p className='mt-6'>Netflix Perú</p>
			</div>
		</footer>
	);
};
