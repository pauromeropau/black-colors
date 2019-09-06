# GAME: *black&color.*
## Project 1 week 3 at Ironhack Madrid
*Un juego pensado para quien ama los colores, o incluso, se dedica a ello.*
*Enfocado como un entrenamiento de Color IQ (cociente intelectual de color).*

## 🧩 Descripción
###### Game board
La pantalla principal del juego consta de un contador, de nivel y movimientos restantes, un grid  y botones de "back", "random" y "reset".

###### Movimientos
- Se representa una cuadrícula de 6x6, cada celda tiene un color aleatorio, el que le corresponda dentro del rango de la gama cromática de la cuadrícula. 
- La cuadrícula se desordena, hay que volver a montarlo. La única pista son los 800ms que se mantuvo en su estado original antes de barajarse.
- Para ordenar la cuadrícula, se pulsa una vez dos celdas diferentes y éstas intercambian su posición. Esto resta un movimiento. Si se pulsa dos veces una celda, ésta se deselecciona.
- Los movimientos comienzan siendo 100, cada intercambio de celdas resta uno. Si llega a cero, ***game over.***

###### Niveles
Los niveles son ~~casi~~ infinitos. Tantos como combinaciones de colores.

###### Random
Este botón cambia el rango de la gama cromática de la cuadrícula. Mantiene el nivel actual.

###### Reset
Este botón resetea los movimientos, es decir, vuelve al estado original de la cuadrícula y la baraja de nuevo. También mantiene el nivel actual.

## 💪🏻 Mi mayor reto...
...ha sido sin duda la cuadrícula. Crearla parecía fácil, hasta que hubo que barajarla y compararla con la original. 
*NOTA: Al mismo tiempo que se crea la cuadrícula, se le asigna un id a cada celda (compuesto por una clase fija, un número de item de 0 a 35, un color aleatorio dentro del rango y una posición por defecto en la array). Se baraja y el jugador la ordena. Cada movimiento compara el id completo de cada celda de la cuadrícula actual con la original.*

## 🛠 Posibles mejoras
- Añadir más combinaciones de colores. 
- Ampliar el grid en cada nivel. 
- Disminuir la cantidad de movimientos en cada nivel.
- RESPONSIVE!!
- Poder arrastrar las celdas en lugar de hacer tap.

## 👏🏻 Me siento orgullosa...
... de haber sabido priorizar y ordenar las ideas...
... y de cuánto he aprendido con este proyecto!

## 🤔 Si volviera a empezar...
~~Escogería otro juego~~ plantearía primero el objetivo final, ya que cada adición ha supuesto cierta reestructuración del código.

Espero que os guste! 
👉🏻 [Link here](https://pauromeropau.github.io/black-colors/)

