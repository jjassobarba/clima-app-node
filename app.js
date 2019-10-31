const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Descripcion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const getInfo = async(direccion) => {

    try {

        const coordenadas = await lugar.getLugarLatLng(direccion);

        const temperatura = await clima.getClima(coordenadas.lat, coordenadas.lng);

        return `El clima de ${coordenadas.dir} es de ${temperatura}`

    } catch (error) {
        return `No se pudo determinar el clima de ${direccion} ${error}`
    }

}

// clima.getClima('Madrid')
//     .then(console.log)
//     .catch(console.log);

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);