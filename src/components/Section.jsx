export const Section = ({ id, title, description, img }) => {
	const posImg = id % 2 === 0 ? "md:order-first" : "md:order-last";

	return (
		<section className='h-full bg-black py-16'>
			<div className='flex md:gap-8 items-center flex-wrap md:flex-nowrap container mx-auto px-8 md:px-16 xl:px-28 h-full'>
				<div className='w-full h-full text-white text-center md:text-left'>
					<h2 className='font-black text-3xl xl:text-5xl'>{title}</h2>
					<p className='text-lg xl:text-2xl mt-4'>{description}</p>
				</div>
				<div className={`w-full h-full text-center ${posImg}`}>
					<img src={img} alt='img-section' />
				</div>
			</div>
		</section>
	);
};
