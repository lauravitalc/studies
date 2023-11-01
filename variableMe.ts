let greetings: string = "Hello Laura";
console.log(greetings);

// number
let userId: number = 334455;

// boolean
let isLoggedIn: boolean = false;

// function getValue(myVal: number): boolean {
//     if(myVal > 5){
//         return true
//     }
//     return "200 ok"
// }

const getHello = (s: string):string => {
    return ""
}

const heros = ['Homelander', "Black Noir", "Starlight"]
// const heros = [1, 2, 3]

heros.map((hero): string => {
    return `hero is ${hero}` 
})

function consoleError(errormsg: string): void{
    console.log(errormsg);
}

function handleError(errormsg: string): never{
    throw new Error(errormsg);
}

export {}