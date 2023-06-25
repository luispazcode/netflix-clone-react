import { Hero } from "./Hero";
import { Logo } from "./Logo";
import { SelectLanguage } from "./SelectLanguage";

export const FrontPage = () => {
	const borderHero = {
		backgroundImage:
			"linear-gradient(to top, rgba(0, 0, 0, 0.9) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.9) 100%)",
	};

	const bgHero = {
		background: "rgb(0 0 0 / 40%)",
	};

	return (
		<main className="bg-[url('./src/assets/img/portada.jpg')] bg-cover bg-no-repeat bg-center h-[38rem] min-h-full relative ">
			<div className='absolute inset-0 z-30' style={borderHero}></div>
			<div className='absolute inset-0 z-20' style={bgHero}></div>
			<div className='relative container mx-auto px-4 md:px-32 py-5 flex flex-col h-full z-50'>
				<header>
					<div className='flex justify-between'>
						<Logo />
						<nav className='text-white flex gap-4 items-center text-sm'>
							<SelectLanguage />
							<a
								href='#'
								className='bg-[#e50914] border border-[#e50914] px-3 py-1 w-auto min-h-[1rem] font-semibold rounded-sm'
							>
								Iniciar sesión
							</a>
						</nav>
					</div>
				</header>
				<Hero />
			</div>
		</main>
	);
};
