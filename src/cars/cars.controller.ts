import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Patch, ParseUUIDPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDTO } from './dto/create-car.dto';
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
    //Parse****Pipe es para definir l tipo de dato que llega y si no es el correcto 
    //devuelve un error 40X
    getCarById( @Param('idLlega', ParseUUIDPipe) id: string ){
        return this.carsService.findById(id);
    }

    //Utilizo DTO
    @Post()
    createCar(@Body() createCarDTO: CreateCarDTO){
        return createCarDTO;
    }
    @Patch(':idLlega')
    UpdateCar(
        @Param('idLlega', ParseIntPipe) id : number,
        @Body() body: any ) 
        {
        return body;
    }

    @Delete()
    DeleteCar(@Body() body: any){
        return body;
    }
}
