

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1da92de020msh88608772bd7f708p16ff04jsnc92b20273f45',
		'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
	}
};

fetch('https://dad-jokes.p.rapidapi.com/random/joke', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
