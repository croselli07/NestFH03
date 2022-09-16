## Notes

Se configuran las variables en .env luego se agregan en constant.ts para luego utilizarlas sin que sena string
https://www.youtube.com/watch?v=tfsa_NyJfrA&list=PL4bT56Uw3S4zIAOX1ddx8oJS6jaD43vZC&index=2
## Conecto con mysql
Se agrega dentro del app.module el TypeOrmModule donde se pasan los parámetros de la DB

https://www.youtube.com/watch?v=Y047Kra3_5o&list=PL4bT56Uw3S4zIAOX1ddx8oJS6jaD43vZC&index=3

## Arquitectura

CONTROLLER : @ Todos lso endpoint
SERVICE: Agregas todos los métodos y usas dto que vienen de la vista y entity para ir al repo
REPOSITORY: se implemnetan los métodos del service 



## Promise  away async
Promise: Cuando tengo que pedir info al back genere un obj Promise , espera que se ejecute y luego devuelve el resultado
new Promise ((resolve, reject) =>{setTimeout(()=>{resolve (datos);},1500);});
.then((datos)=>console.log(datos)); // Mostrar
.catch(error)

await : Espera la respuesta del promise para asignarlo a una const
"Para usar el await va a solicitar que todo esté dentro de una func async

## Eaguer Lazy
{Eaguer: true}   Trae todo cuando solicito el padre
{Lazy: true} Trae la lista de hijos solo cuando hago el get

## Libraries
## Promise  away async

npm i --save class-validator class-transformer        (validador de DTO)

####
Ya te da todo un esqueleto de una app con nodejs, bajo Express
Estructura y Archivos
.eslintntrc y prettierrc son para la Estructuray buenas practicas 
##### Controllers
Escucha las solicitud y emite una respuesta

#### Providers (@Inyectable)
Todos los servicios son Providers, pero no todos los providerson servicios
Esto es porque los providers no siempre tienen logica
PARA INYECTAR LO HAGO A TRAVES DE UN CONSTRUCTOR

#### DTO
Objeto para transferir data, es una clase no es una interface porque no puede tener 
funcionalidades
