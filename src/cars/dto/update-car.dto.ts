import { IsString, IsUUID, IsOptional } from "class-validator";


export class UpdateCarDTO{

    @IsString()
    @IsUUID()
    @IsOptional()
    readonly id: string;
    
    @IsString({message: `La marca nos es correcta`}) //puedo customizar el mensaje de error
    @IsOptional()
    readonly marca: string;

    @IsString()
    @IsOptional() //Esto para que sea opcional si vienen o no el param
    readonly modelo: string;



}