// class User {
//     public email: string 
//     name: string // automatically public if you don't specify
//     private readonly city: string = 'Belo Horizonte'
//     constructor(email: string, name: string){
//         this.email = email;
//         this.name = name;
//     }
// }

class User {
    protected _courseCount = 1
    readonly city: string = 'Belo Horizonte'
    constructor(
        public email: string, 
        public name: string,
        // private userId: string
    ){}
    
    private deleteToken(){
        console.log('Token deleted')
    }

    get getAppleEmail(): string{
        return `apple${this.email}`
    }

    get courseCount(): number {
        return this._courseCount
    }

    set courseCount(courseNum): void {
        if(courseNum <= 1){
            throw new Error("Course count should be greater than 1")
        }
        this._courseCount = courseNum
    }

}

class SubUser extends User {
    isFamily: boolean = true
    changeCourseCount(){
        this._courseCount = 4
    }
}
const laura = new User('laura@gmail.com','laura');

// laura.deleteToken()

// protected x private
