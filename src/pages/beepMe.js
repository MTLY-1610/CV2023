const url = 'https://sms77io.p.rapidapi.com/rcs/events';
const data = new FormData();
data.append('msg_id', '123456789');
data.append('to', '46768167500');

const options = {
	method: 'POST',
	headers: {
		'x-rapidapi-key': '0211db70f2msh9dcddd9f6608631p1fff03jsn30a3f8142eff',
		'x-rapidapi-host': 'sms77io.p.rapidapi.com'
	},
	body: data
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}