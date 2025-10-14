## synysterdaystack

Este paquete es una combinacion con daysjs en el que se han agregado 2 metodos

- formatDate
- isWeekend
- isValidDate

## install

npm install synysterdaystack

## examples
```
js
const synysterdaystack = require("synysterdaystack" ) ;
const response = synysterdaystack. formatDate( new Date(), "DD/MM/YYYY" ) ;
console, log ( response, " response" ) ;

const isValidDate = synysterdaystack.isValidDate( new Date()) ;
console, log ( isValidDate, "isValidDate" ) ;

const isWeekend = synysterdaystack.isWeekend( new Date()) ;
console, log ( isWeekend, "isWeekend" ) ;
```
