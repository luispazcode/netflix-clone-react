export const LinkListGrid = ({ list }) => {
	return (
		<div className='my-8'>
			<ul className='grid grid-cols-2 md:grid-cols-3 gap-2'>
				{list.map(({ text, url }, index) => (
					<li key={index}>
						<a className='underline decoration-1 text-xs md:text-sm' href={url}>
							{text}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};
