import { Controller, Get, Param } from '@nestjs/common';
import { CarsService } from './cars.service';
//Escucho las peticiones y envio respuesta
//Este es el path '/cars' dentro de la URL para acceder
@Controller('cars')
export class CarsController {

    //Cone esto insyecto , como si hiciera un new CarsService
    constructor(
        //Privado porque solo uso aca,
        //readonly porque no quiero q modifique solo use
        private readonly carsService: CarsService
    ){}


    @Get()
    getAllCars(){
        return this.carsService.findAll();
    }

    @Get(':idLlega')
                //param que me llega lo asocio al id que uso en la funcion
    getCarById( @Param('idLlega') id: number ){
        return this.carsService.findById(id);
    }
}
