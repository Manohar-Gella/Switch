
class Animal {
  constructor(name, legCount) {
    this.name = name
    this.legCount = legCount
  }
  describe() {
    return `${this.name} has ${this.legCount} legs`
  }
}

// my exp



class students {
	constructor(name, age, grade){
		this.name = name
		this.age = age
		this.grade = grade
	}
	who(){
		console.log("name: "+this.name);
		console.log("age: "+this.age);
		console.log("grade: "+this.grade);
	}
	wgender(){
		console.log(this.name + " Geder is " + this.grade)
	}
}

let s1 = new students("Manohar Gella", 18, "male");
let s2 = new students("Neriyya Gella", 50, "male");
s1.wgender();
s1.who();
s2.who();
s2.wgender();

