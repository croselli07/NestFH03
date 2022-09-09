import { Injectable, NotFoundException } from '@nestjs/common';

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
        const car= this.cars.find(car => car.id == id)
        //Ya me arma la excepcion , solo la envio y hasta le agrego un mensaj
        if(car== null) throw new NotFoundException('Ho hay car')
        return car;
    }

}
