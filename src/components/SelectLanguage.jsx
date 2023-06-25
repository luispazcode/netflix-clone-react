export const SelectLanguage = () => {
	return (
		<select
			name='language'
			className='bg-transparent border px-4 py-1 rounded-sm w-auto min-h-[1rem]'
		>
			<option value='es'>Español</option>
			<option value='en'>English</option>
		</select>
	);
};
