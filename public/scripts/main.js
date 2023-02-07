// console.log("test");

// `https://api.weatherapi.com/v1/forecast.json?key=<YOUR_API_KEY>&q=$London&days=1&aqi=no&alerts=no

async function getData(key) {
	let location_value = document.getElementById("location");

	let location = location_value.value;

	location_value.addEventListener("keypress", function (event) {
		// If the user presses the "Enter" key on the keyboard
		if (event.code === "Enter") {
			console.log(event);
			// Cancel the default action, if needed
			event.preventDefault();
			// retrun updated value
			// q = location_value.value;
			location = location_value.value;
			window.location.reload();
			// reload to update the vale in outer scope
		}
	});

	console.log(location);

	const response = await fetch(
		`https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${location}&days=1&aqi=no&alerts=no`
	);
	const data = await response.json();

	let climate = document.getElementById("climate");
	console.log(climate);
	console.log(data);

	climate.innerHTML = `
	<h2 class="city"> ${data.location.name}</h2>
    <h3 class="country">${data.location.country}</h3>
	<ul class='temp'>
		<li>
			<p class="max-temp">Maximum temperature: <span class="temp-value"> ${data.forecast.forecastday[0].day.maxtemp_c}&#xb0; Celsius </span></p>
		</li>
		<li>
			<p class="min-temp">Minimum temperature: <span class="temp-value">  ${data.forecast.forecastday[0].day.mintemp_c}&#xb0; Celsius</span></p>
		</li>
	</ul>
	<ul class='temp-description'>
		<li>
			<img class="max-temp" src="${data.forecast.forecastday[0].day.condition.icon}" alt="${data.forecast.forecastday[0].day.condition.text} icon">
		</li>
		<li>
			<p class="description">
			${data.forecast.forecastday[0].day.condition.text}
			</p>
		</li>
	</ul>

	`;
}
getData("8194e87402a74af091b41320230602");
