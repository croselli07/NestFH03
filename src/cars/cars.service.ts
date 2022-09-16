import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface'
import { v4 as uuid } from 'uuid';

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
        if(car== null) throw new NotFoundException('Ho hay car')
        return car;
    }

}
