// si es un tipo de dato asignalo con  : tipo
// si es constante da igual, ya que el dato va a ser siempre el mismo y ts va a interpretar que no cambia
const helloWorld1 = "hello world"
let helloWorld2: string = "hello world"



// usando | se pueden dar opciones a que sea un valor u otro, en el siguiente caso primero se declara como string, pero no da problema al asignarle un numero


let stringOrNumber: string | number = "Hello world"

stringOrNumber = 1;
