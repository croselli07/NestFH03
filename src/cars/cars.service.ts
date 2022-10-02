import { Injectable, NotFoundException,BadRequestException , Get } from '@nestjs/common';
import { Car } from './interfaces/car.interface'
import { v4 as uuid } from 'uuid';
import { CreateCarDTO } from './dto/create-car.dto';
import { UpdateCarDTO } from './dto/update-car.dto';

//Eset decort es q lo puedo inyectar
@Injectable()
export class CarsService {

    private cars: Car[]=  [
        {
            id: uuid(),
            marca: 'Toyota',
            modelo:'Corolla',
        },
        {
            id: uuid(),
            marca: 'Ford',
            modelo: 'Focus',
        },
        {
            id: uuid(),
            marca: 'Audi',
            modelo: 'A3',
        },
     ];

    findAll(){
        return this.cars;
    } 

    findById(id: string){
        const car= this.cars.find(car => car.id == id)
        //Ya me arma la excepcion , solo la envio y hasta le agrego un mensaj
        if(car== null) throw new NotFoundException('No hay car con ese ID')
        return car;
    }

    createCarDTO (createCardDto: CreateCarDTO){
        //creo un obj y desp lo agrego a la lista (RAAAro)
        const car2: Car ={
            id: uuid(),
            marca:createCardDto.marca,
            modelo: createCardDto.modelo,
        }        
        this.cars.push(car2)
        return "OK" ;
    }

    uptadeCarDTO (id: string ,updateCardDto: UpdateCarDTO){
        //
        let car = this.findById(id)
        if(updateCardDto.id && updateCardDto.id !== car.id)
             throw new BadRequestException (`Esta mal pisar un ID`)
        //Lo busco con un map , si lo encuentra lo pisa 
        this.cars = this.cars.map(carM =>{
            if(carM.id === id){
                car = {
                    ...car,
                    ...updateCardDto,
                    id
                }
                return car;
            }
            return carM ;
        }
        )
        return car;
        //car.modelo = updateCardDto.modelo
        //this.cars.push(car)
    }
    deleteCarDTO (id: string){
        //
        let car = this.findById(id)
        if(car == null)
            throw new BadRequestException (`EL ID ingresado no corresponde a ningun objeto`)
        //Filtro y lo piso descartando
        this.cars = this.cars.filter(data => data.id !== id)
        return this.cars;

    }
}
