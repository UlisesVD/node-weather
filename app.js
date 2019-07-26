const argv = require('./config/yargs').argv;
const {getLugarLatLng} = require('./lugar/lugar');
const {getClima} = require('./clima/clima');

let getInfo = async(direccion) => {
    try {
        let coords = await getLugarLatLng(direccion);
        let temp = await getClima(coords.lat, coords.lng);

        return `El clima en ${direccion} es de ${temp}`;        
    } catch (error) {
        return `No se pudo determinar el clima en ${direccion}`;
    }
}

getInfo(argv.direccion)
.then(msj => {
    console.log(msj);
})
.catch(err => {
    console.log(err);
})

