import { Begin } from "./Begin";

export const Hero = () => {
	return (
		<div className='text-white text-center grow flex flex-col justify-center items-center'>
			<h1 className='text-5xl font-black tracking-tight'>
				Películas y series ilimitadas y mucho más
			</h1>
			<p className='font-normal text-2xl mt-4'>
				Disfruta donde quieras. Cancela cuando quieras.
			</p>
			<Begin />
		</div>
	);
};
