const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=44f1246c4e7ef479362c3e17a49f2020&units=metric`)
    return resp.data.main.temp;
}

module.exports = {
    getClima
}