const axios = require('axios');

let getClima = async(lat, lng) => {
    let resp = await axios.get(`https://samples.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=33383412de47b652283c6cd46927f915`)

    return resp.data.main.temp;
}


module.exports = {
    getClima
}