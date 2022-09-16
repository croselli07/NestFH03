import { Injectable, NotFoundException, ParseUUIDPipe } from '@nestjs/common';
import { v4 as uuid } from 'uuid'


export interface Car {
    id: string,
    marca: string,
    modelo: string

}