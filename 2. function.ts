
// en las funciones se especifica el tipo de dato que va a ser cada parametro y el tipo de dato que se va a obtener de la funcion


// crea calculateAverage coja 2 nums y de la media

let calculateAverage = (x: number, y: number):  number => {
    return  (x + y) / 2;
}

// crea addStrings coja 2 strings y devuelva concatenacion

let addStrings = (x: string, y: string): string => {
    return (x + y);
}

// crea square coja 1 numero y devuelva cuadrado

let square = (x: number): number => {
    return square(x);
}



// crea sumOfSquares coja 2 num y devuelva suma de cuadrados

let sumOfSquares = (x: number, y: number): number => {
    return  square(x) + square(y) ;
}

// crea una funcion anonima que reciba un literal y devuelva su longitad

let lenghtOfString = (string: string): number => {
    return string.length;
}

// crea una funcion anonima 2 numeros argumento y devuelva el mayor

let maxNumber = (x: number, y: number): number =>  x > y ? x: y;

// funcion coja numero y si es par devuelva true

let isEven = (x: number): boolean => x % 2 === 0 ? true : false;

// funcion principal args num1 y num2, dentro retorna una func. anonima que retorne suma

let primeraFuncion: (num1: number, num2:number) => () => number = (num1, num2) => {
    return (): number => { 
        return num1+num2 
    }
}

