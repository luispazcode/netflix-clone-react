import { Accordion } from "@rewind-ui/core";
import { useState } from "react";
import { Begin } from "./Begin";

export const Faq = () => {
	const [faqs, setFaqs] = useState([
		{
			id: 1,
			question: "¿Qué es Netflix?",
			answer:
				"Netflix es un servicio de streaming que ofrece una gran variedad de películas, series y documentales premiados en casi cualquier pantalla conectada a internet. <br/><br/> Todo lo que quieras ver, sin límites ni comerciales, a un costo muy accesible. Siempre hay algo nuevo por descubrir, ¡y todas las semanas se agregan más películas y series!",
		},
		{
			id: 2,
			question: "¿Cuánto cuesta Netflix?",
			answer:
				"Disfruta Netflix en tu smartphone, tablet, smart TV, laptop o dispositivo de streaming, todo por una tarifa plana mensual. Planes desde S/24.90 hasta S/44.90 al mes. Sin costos adicionales ni contratos.",
		},
		{
			id: 3,
			question: "¿Dónde puedo ver Netflix?",
			answer:
				"Disfruta donde quieras, cuando quieras. Inicia sesión en tu cuenta de Netflix para ver contenido al instante a través de netflix.com desde tu computadora personal o en cualquier dispositivo con conexión a internet que cuente con la app de Netflix, como smart TV, smartphones, tablets, reproductores multimedia y consolas de juegos.<br/> <br/> Además, puedes descargar tus series favoritas con iOS, Android o la app para Windows 10. Con la función de descarga, puedes ver donde vayas y sin conexión a internet. Lleva Netflix contigo adonde sea.",
		},
		{
			id: 4,
			question: "¿Cómo cancelo?",
			answer:
				"Netflix es flexible. Sin contratos molestos ni compromisos. Cancela la membresía online con solo dos clics. No hay cargos por cancelación. Empieza y termina cuando quieras.",
		},
		{
			id: 5,
			question: "¿Qué puedo ver en Netflix?",
			answer:
				"Netflix tiene un amplio catálogo de películas, series, documentales, animes, originales premiados y más. Todo lo que quieras ver, cuando quieras.",
		},
		{
			id: 6,
			question: "¿Es bueno Netflix para los niños?",
			answer:
				"La experiencia de Netflix para niños está incluida en la membresía para que los padres tengan el control mientras los peques disfrutan series y películas familiares en su propio espacio.<br/><br/>Los perfiles para niños incluyen controles parentales protegidos por PIN que te permiten restringir el contenido que pueden ver los niños en función de la clasificación por edad y bloquear determinados títulos que no quieras que los niños vean.",
		},
	]);

	return (
		<section className='bg-black text-white'>
			<div className='container mx-auto px-8 md:px-16 xl:px-28 py-16'>
				<h2 className='font-black text-3xl xl:text-5xl text-center'>
					Preguntas frecuentes
				</h2>

				<Accordion
					defaultItem=''
					radius='none'
					bordered={false}
					shadow='none'
					withRing={false}
					className='bg-transparent my-7'
				>
					{faqs.map(({ id, question, answer }) => (
						<Accordion.Item key={id} anchor={`item-${id}`} className='pb-2'>
							<Accordion.Header className='text-lg xl:text-2xl bg-secondary mt-2'>
								{question}
							</Accordion.Header>
							<Accordion.Body
								className='text-lg xl:text-2xl bg-secondary mt-0.5 mb-2'
								dangerouslySetInnerHTML={{ __html: answer }}
							></Accordion.Body>
						</Accordion.Item>
					))}
				</Accordion>

				<div className='text-center'>
					<Begin />
				</div>
			</div>
		</section>
	);
};
