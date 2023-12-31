import { useState } from "react";
import { FrontPage } from "./components/FrontPage";
import { Section } from "./components/Section";
import { Faq } from "./components/Faq";
import { Footer } from "./components/Footer";

export const App = () => {
	const [sections, setSections] = useState([
		{
			id: 1,
			title: "Disfruta en tu TV",
			description:
				"Ve en smart TV, PlayStation, Xbox, Chromecast, Apple TV, reproductores de Blu-ray y más.",
			img: "tv.png",
		},
		{
			id: 2,
			title: "Descarga tus series para verlas offline",
			description:
				"Guarda tus títulos favoritos y siempre tendrás algo que ver.",
			img: "mobile-0819.jpg",
		},
		{
			id: 3,
			title: "Disfruta donde quieras",
			description:
				"Películas y series ilimitadas en tu teléfono, tablet, computadora y TV sin costo extra.",
			img: "device-pile.png",
		},
		{
			id: 4,
			title: "Crea perfiles para niños",
			description:
				"Los niños vivirán aventuras con sus personajes favoritos en un espacio diseñado exclusivamente para ellos, sin costo con tu membresía.",
			img: "ninios.png",
		},
	]);

	return (
		<>
			<FrontPage />

			{sections.map(({ id, title, description, img }) => (
				<Section
					key={id}
					id={id}
					title={title}
					description={description}
					img={img}
				/>
			))}

			<Faq />
			<Footer />
		</>
	);
};

/*
  TODO:
    - Add footer
*/
