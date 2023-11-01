const User = {
    name: 'Laura',
    email: 'laura@email.com',
    isActive: true
}

function createUser({name: string, isPaid:boolean}){}

createUser({name: 'Laura', isPaid: false})

// when a object returns an object
function createCourse():{name: string, price: number}{
    return {name: "react", price: 100}
}

// type aliases
// type User = {
//     name: string;
//     email: string;
//     isActve: boolean;
// }

// function createUser1(user: User){}
// createUser1({name: 'John', email: 'john@gmail.com', isActve: true})

type User = {
    readonly_id: string;
    name: string;
    email: string;
    isActve: boolean;
    credcardDetails?: number; // ? is optional
}

let myUser: User = {
    readonly_id: "12345a",
    name: "Gabriel",
    email: "gabriel@gmail.com",
    isActve: false
}

myUser.email = "gab@gab.com";
// myUser._id = "234234a"; // can't change this

type cardNumber = {
    cardnumber: string;
}

type cardDate = {
    cardDate: string;
}

type cardDetails = cardNumber & cardDate & {
    cvv: number;
}
export {}