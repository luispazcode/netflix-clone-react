export const Begin = () => {
	return (
		<form className='flex flex-col mt-5'>
			<h3 className='text-xl font-normal'>
				¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o
				reiniciar tu membresía de Netflix.
			</h3>
			<div className='flex gap-2 md:mx-40 mt-4'>
				<input
					type='text'
					className='bg-transparent border rounded-sm px-2 py-3 w-full'
					placeholder='Email'
				/>
				<button className='text-2xl font-medium bg-[#e50914] rounded-sm flex justify-center px-6 py-3'>
					Comenzar
				</button>
			</div>
		</form>
	);
};
