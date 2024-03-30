class Family{
    constructor(name, age, work){
        this.name = name;
        this.age = age;
        this. work = work;
    }
    fam(){
        console.log(`${this.name}, ${this.age}, ${this.work}`)
    }
}

let Daddy = new Family("Neriyya", 50, "Banker"); // createing object
Daddy.fam(); // create function call