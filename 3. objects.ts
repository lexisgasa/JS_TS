// se declara el tipo con lo que va a contener
// el ? en password significa que es opcional
type User = {
    firstName: string;
    lastName: string;
    age: number;
    _password?: string;
    fullName(): string;
};

// se crea el objeto y se le especifica el tipo 
const user: User = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  _password: "123456",
  fullName() {
    this._password;
    return `${this.firstName} ${this.lastName}`;
  },
};

user._password;




// asignar propiedades a variables de forma nomal
const userFirstName = user.firstName;
const userLastName = user.lastName;
const userAge = user.age;

// destructurando el objeto
const { firstName, lastName, age } = user 