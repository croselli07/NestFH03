import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Patch, ParseUUIDPipe, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDTO } from './dto/create-car.dto';
import { UpdateCarDTO } from './dto/update-car.dto';
//Escucho las peticiones y envio respuesta
//Este es el path '/cars' dentro de la URL para acceder
@Controller('cars')
//@UsePipes(ValidationPipe) // Con eso valida los @ que agrego en el DTO
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
        return this.carsService.createCarDTO(createCarDTO);
    }
    @Patch(':idLlega')
    UpdateCar(
        @Param('idLlega', ParseUUIDPipe) id : string,
        @Body() createCarDTO: UpdateCarDTO ) 
        {
         return this.carsService.uptadeCarDTO(id,createCarDTO);
        }

    @Delete(':idLlega')
    DeleteCar(
            @Param('idLlega', ParseUUIDPipe) id : string) 
            {
             return this.carsService.deleteCarDTO(id);
            }
    
}
