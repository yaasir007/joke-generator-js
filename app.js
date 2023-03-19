let api_key = config.RAPID_DAD_JOKE_API_KEY;
let api_link = config.RAPID_DAD_JOKE_API;
let api_host = config.RAPID_HOST;

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': api_key,
		'X-RapidAPI-Host': api_host
	}
};

fetch(api_link, options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
