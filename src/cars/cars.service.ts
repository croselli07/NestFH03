import { Injectable } from '@nestjs/common';

//Eset decort es q lo puedo inyectar
@Injectable()
export class CarsService {

    private cars=  [
        {
            id: 0,
            marca: 'Toyota',
            modelo:'Corolla',
        },
        {
            id: 1,
            marca: 'Ford',
            modelo: 'Focus',
        },
        {
            id: 2,
            marca: 'Audi',
            modelo: 'A3',
        },
     ];

    findAll(){
        return this.cars;
    } 

    findById(id: number){
        return this.cars.find(id, id)
    }

}
