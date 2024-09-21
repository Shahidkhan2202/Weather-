
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '068a046ec7mshd9345fb25525965p1e6d7ajsnbc34520543ae',
		'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi',options)
	.then(response => response.json())
	.then(response => console.log(response))
	 .catch(err => console.error(err));
    