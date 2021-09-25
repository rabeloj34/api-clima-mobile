const { default: axios } = require("axios");


class Busqueda {

    historial = ['Tegucigalpa', 'Madrid', 'San José'];


    constructor (){

    
    }


    async ciudad( lugar = '' ){

        const resp =  await axios.get('https://reqres.in/api/users?page=2');
        console.log(resp.data.per_page);

        return [];
    }


}

module.exports = Busqueda;