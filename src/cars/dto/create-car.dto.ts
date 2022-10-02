import { IsString } from "class-validator";


export class CreateCarDTO{
    
    @IsString({message: `La marca nos es correcta`}) //puedo customizar el mensaje de error
    readonly marca: string;
    @IsString()
    readonly modelo: string;



}