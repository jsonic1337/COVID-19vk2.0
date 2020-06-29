const {
	VK,
	Keyboard
} = require('vk-io');
const fetch = require("node-fetch");
const vk = new VK({
	token: " token " //токен от группы с разрешением на сообщения
});
var nachalo = 'начать',
	russia = 'вирус в россии',
	wrld = 'вирус в мире';
vk.updates.start();
vk.updates.on('message', (context, next) => {
	(async () => {
		if (context.isGroup == true) return
		if (context.text.toLowerCase().includes(nachalo)) {
			let url = 'https://thevirustracker.com/free-api?countryTotal=RU';
			let response = await fetch(url);
			let ru = await response.json();
			await context.send({
				message: (`Коронавирус в России 🦠\nСлучаев сегодня: ${ru.countrydata[0].total_new_cases_today}\nСмертей сегодня: ${ru.countrydata[0].total_new_deaths_today}\nВсего случаев: ${ru.countrydata[0].total_cases}\nУмерло: ${ru.countrydata[0].total_deaths}\nВыздоровело: ${ru.countrydata[0].total_recovered}\nСерьезных случаев: ${ru.countrydata[0].total_serious_cases}`),
				attachment: ('photo-193422280_457239018'),
				keyboard: Keyboard.builder().textButton({
					label: 'Вирус в России',
					payload: {
						command: 'Вирус в России'
					},
					color: 'negative'
				}).inline().textButton({
					label: 'Вирус в мире',
					payload: {
						command: 'Вирус в мире'
					},
					color: 'negative'
				}).inline()
			});
		} else if (context.text.toLowerCase().includes(russia)) {
			let url = 'https://thevirustracker.com/free-api?countryTotal=RU';
			let response = await fetch(url);
			let ru = await response.json();
			await context.send({
				message: (`Коронавирус в России 🦠\nСлучаев сегодня: ${ru.countrydata[0].total_new_cases_today}\nСмертей сегодня: ${ru.countrydata[0].total_new_deaths_today}\nВсего случаев: ${ru.countrydata[0].total_cases}\nУмерло: ${ru.countrydata[0].total_deaths}\nВыздоровело: ${ru.countrydata[0].total_recovered}\nСерьезных случаев: ${ru.countrydata[0].total_serious_cases}`),
				attachment: ('photo-193422280_457239018'),
				keyboard: Keyboard.builder().textButton({
					label: 'Вирус в России',
					payload: {
						command: 'Вирус в России'
					},
					color: 'negative'
				}).inline().textButton({
					label: 'Вирус в мире',
					payload: {
						command: 'Вирус в мире'
					},
					color: 'negative'
				}).inline()
			});
		} else if (context.text.toLowerCase().includes(wrld)) {
			let url = 'https://thevirustracker.com/free-api?global=stats';
			let response = await fetch(url);
			let world = await response.json();
			await context.send({
				message: (`Коронавирус в Мире 🦠\nСлучаев сегодня: ${world.results[0].total_new_cases_today}\nСмертей сегодня: ${world.results[0].total_new_deaths_today}\nВсего случаев: ${world.results[0].total_cases}\nУмерло: ${world.results[0].total_deaths}\nВыздоровело: ${world.results[0].total_recovered}\nСерьезных случаев: ${world.results[0].total_serious_cases}`),
				attachment: ('photo-193422280_457239018'),
				keyboard: Keyboard.builder().textButton({
					label: 'Вирус в России',
					payload: {
						command: 'Вирус в России'
					},
					color: 'negative'
				}).inline().textButton({
					label: 'Вирус в мире',
					payload: {
						command: 'Вирус в мире'
					},
					color: 'negative'
				}).inline()
			});
		}
	})()
});
