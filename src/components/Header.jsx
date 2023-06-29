import { Logo } from "./Logo";
import { SelectLanguage } from "./SelectLanguage";

export const Header = () => {
	return (
		<header>
			<div className='flex justify-between'>
				<Logo />
				<nav className='text-white flex gap-4 items-center text-sm'>
					<SelectLanguage />
					<a
						href='#'
						className='bg-primary border border-primary px-3 py-1 w-auto min-h-[1rem] font-semibold rounded-sm'
					>
						Iniciar sesión
					</a>
				</nav>
			</div>
		</header>
	);
};
