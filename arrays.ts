// acepta un array que contenga strings, o un array que contenga numeros
const ages1: string[] | number[] = []
// acepta un array mixto que puede contener strings o numeros
const ages2: (string | number)[] = []



// para tener un array de objetos se tiene que declarar el tipo del que es el objeto
type UserData = {
    id: string | number;
    name: string;
    email: string
}
// entonces se especifica que es un array del tipo userdata y por tanto solo aceptará objetos que tengan ese tipo - en este caso sera un array que puede contener o objetos que sigan el userdata, o boleanos
const users: (UserData | boolean)[] = [{
    id: 1,
    name: "John",
    email: "john@gmail.com"
}, true
]


// metodos más comunes de los arrays son el .length, .push y .pop para añadir y quitar el ultimo elemento, .shift y .unshift para quitar y poner un elemento al principio

// mini challenge
//  crea un objeto shoppingCart que tenga un array de objetos y que tenga "name" string y "price" number. addToCart una funcion que reciba un objeto con las mismas propiedades 



type Product = {
    name: string,
    price: number
}

type CartItem = Product;


type ShoppingCart = {
    cart: CartItem[],
    totalPrice: number,
    addToCart(product: Product): void;
}

const shoppingCart: ShoppingCart = {
    cart: [],
    totalPrice: 0,
    addToCart(product){
        this.cart.push(product);
        this.totalPrice += product.price;
    }
}