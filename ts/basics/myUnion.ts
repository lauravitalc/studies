let score: number | string = 33;
score = 44;
score = "55";

type User1 = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

let laura: User1 | Admin = {name: "laura", id: 342};

laura = {username: "lc", id: 342}

function getDbId(id: number | string){
    console.log(`DB id is: ${id}`);
}

getDbId(3);
getDbId("4");

function getDbId2(id: number | string){
    if(typeof id === "string"){
        id.toLowerCase();
    }
}

// array

const data: (string | number)[] = [1,2,3,4,5,"6"];

let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle";

