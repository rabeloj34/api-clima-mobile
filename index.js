require('colors');
const inquirer = require('inquirer');
const { leerInput, inquirerMenu, pausa } = require('./helpers/inquirer');
const Busqueda = require('./models/busqueda');



const main = async ()=> {

    let opt;
    const busqueda = new Busqueda();

    do {

       opt = await inquirerMenu();
      
       switch (opt) {
           
            case 1:

               const lugar = await leerInput('Ciudad: ');
               await busqueda.ciudad(lugar);

               //console.log("Ciudad: " , ciudad);
               
               console.log('\nInformacion de la ciudad\n'.green );
               console.log('Ciudad', );
               console.log('Lat', );
               console.log('Lng', );
               console.log('Temperatura', );
               console.log('Minima', );
               console.log('Máxima', );

               break;
       
           
       }


      
    
    if( opt !== 0 ){
        await pausa();
    }
       
    
    }while (opt !== 0);
}

main();