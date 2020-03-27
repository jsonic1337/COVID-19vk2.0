const fetch = require("node-fetch");
var VK = require("VK-Promise"),
    vk = new VK(" token ");
    vk.longpoll.start();
vk.on('message', function onMessage(event, msg) {
   (async () => {
   if(!msg.out) return
   if(msg.body.toLowerCase() == '!корона') {
   vk.messages.delete({ delete_for_all: 1, message_ids: msg.id.toString() });
   let url = 'https://thevirustracker.com/free-api?countryTotal=RU';
   let response = await fetch(url); 
   let ru = await response.json();
   return msg.send(`Коронавирус в России 🦠\nСлучаев сегодня: ${ru.countrydata[0].total_new_cases_today}\nСмертей сегодня: ${ru.countrydata[0].total_new_deaths_today}\nВсего случаев: ${ru.countrydata[0].total_cases}\nУмерло: ${ru.countrydata[0].total_deaths}\nВыздоровело: ${ru.countrydata[0].total_recovered}\nСерьезных случаев: ${ru.countrydata[0].total_serious_cases}`);
   }
   else if(msg.body.toLowerCase() == '!коронамир') {
   vk.messages.delete({ delete_for_all: 1, message_ids: msg.id.toString() });
   let url = 'https://thevirustracker.com/free-api?global=stats';
   let response = await fetch(url); 
   let world = await response.json();
   return msg.send(`Коронавирус в Мире 🦠\nСлучаев сегодня: ${world.results[0].total_new_cases_today}\nСмертей сегодня: ${world.results[0].total_new_deaths_today}\nВсего случаев: ${world.results[0].total_cases}\nУмерло: ${world.results[0].total_deaths}\nВыздоровело: ${world.results[0].total_recovered}\nСерьезных случаев: ${world.results[0].total_serious_cases}`);
   }
   })()
   })
