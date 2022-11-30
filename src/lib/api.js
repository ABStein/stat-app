export const fetchAllCompetitions = async () => {
	const res = await fetch(
		'https://api.thedogapi.com/v1/images/search'
	);
	const data = res.json();

	return data;
};
