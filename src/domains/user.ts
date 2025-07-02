export class User {
    constructor(
        public readonly id: string, //$ A "readonly" is a property that cannot be changed in the future
        public email: string,
        public username: string, 
        public password: string
        
    ){}
}