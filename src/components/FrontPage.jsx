import { Header } from "./Header";
import { Hero } from "./Hero";

export const FrontPage = () => {
	const borderHero = {
		backgroundImage:
			"linear-gradient(to top, rgba(0, 0, 0, 0.9) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.9) 100%)",
	};

	const bgHero = {
		background: "rgb(0 0 0 / 40%)",
	};

	return (
		<main className="bg-[url('../portada.jpg')] bg-cover bg-no-repeat bg-center relative h-[55vh] md:h-[70vh]">
			<div className='absolute inset-0 z-30' style={borderHero}></div>
			<div className='absolute inset-0 z-20' style={bgHero}></div>
			<div className='relative container mx-auto px-8 md:px-16 xl:px-28 py-5 flex flex-col h-full z-50'>
				<Header />
				<Hero />
			</div>
		</main>
	);
};
