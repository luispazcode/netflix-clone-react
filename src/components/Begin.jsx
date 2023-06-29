export const Begin = () => {
	return (
		<form className='flex flex-col mt-5'>
			<h3 className='text-lg md:text-xl font-normal'>
				¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o
				reiniciar tu membresía de Netflix.
			</h3>
			<div className='flex flex-wrap md:flex-nowrap gap-4 lg:mx-40 mt-4'>
				<input
					type='text'
					className='bg-transparent border rounded-sm px-2 py-3 w-full'
					placeholder='Email'
				/>
				<button className='text-2xl font-medium bg-primary rounded-sm mx-auto px-6 py-3'>
					Comenzar
				</button>
			</div>
		</form>
	);
};
