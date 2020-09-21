// -21-
// JavaScript Accessors Getters & Setters:

/* class user{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    sayHello(){
        return `Hello ${this.name}`;
    }
    showInfo(){
        return `Name: ${this.name}, Email: ${this.email}`;
    }
}
let user1 = new user("nihad","nihad@live.com");
console.log(user1.name);
console.log(user1.email);
console.log(user1.sayHello());
console.log(user1.showInfo()); */

// Other Example With Get Dinamic Property:
/* class user {
    constructor(name,email) {
        this.name = name;
        this.email = email;
    }
    get sayHello() {
        return `Hello ${this.name}`;
    }
    get showInfo() {
        return `Name: ${this.name}, Email: ${this.email}`;
    }
    changeName(newName){
        this.name = newName;
    }
    set changeEmail(newEmail){ // With Set Dinamic Property
        this.email = newEmail;
    }
}
let user1 = new user("samir","@live.com");
console.log(user1.name);
console.log(user1.email);
console.log(user1.sayHello);
console.log(user1.showInfo);

user1.changeName("Mahmoud");
// user1.name = "Anas"; // Andere Lösung
console.log(user1.name);
console.log(user1.email);
console.log(user1.sayHello);
console.log(user1.showInfo);

user1.changeEmail = "@gmail.com";
console.log(user1.name);
console.log(user1.email);
console.log(user1.showInfo); */

// -22-
// Object Meta Data And Descriptor:
// Object.defineProperty(obj, prop, descriptor)

/* const myObject = {
    a: 1,
    b: 2,
};
Object.defineProperty(myObject,"c",{
    writable: false,
    enumerable: false,
    configurable: true,
    value: 3,
});
Object.defineProperty(myObject,"c",{
    writable: true,
    // enumerable:true,
    // value: 65,
});
myObject.c = 500; // Will Not Change Because Writable Is False

console.log(myObject);

for(let key in myObject){
    console.log(key,myObject[key]);
}

console.log(Object.getOwnPropertyNames(myObject));
console.log(delete myObject.c); // Will Not Delete Because Configurable Is False

console.log(Object.getOwnPropertyNames(myObject)); // Has Been Deleted Because Configurable Is True */

// -23-
// Object Define Properties And Training's:

/* const myObject = {
    a: 1,
    b: 2,
};
Object.defineProperty(myObject,"a",{
    writable: false,
    enumerable: false,
    configurable: false,
    value: 500,
});

Object.defineProperty(myObject,"c",{
    value: 3,
});

myObject.d = 4;

Object.defineProperties(myObject, {
    e: {
        writable: false,
        enumerable: false,
        configurable: false,
        value: 5,
    },
    f: {
        writable: false,
        enumerable: false,
        configurable: false,
        value: 6,
    },
    g: {
        writable: true,
        enumerable: true,
        configurable: true,
        value: 7,
    }
});
console.log(myObject);
console.log(Object.getOwnPropertyDescriptor(myObject,"a"));
console.log(Object.getOwnPropertyDescriptor(myObject,"c"));
console.log(Object.getOwnPropertyDescriptor(myObject,"d"));

console.log(Object.getOwnPropertyNames(myObject));
console.log(Object.keys(myObject)); */

// -24-
// Important Info And The End:
/* Importants Notes And The End

-1- Arrow Functions Do Not Have A Prototype Property

-2- You Can Use Objects Inside Constructor Freely

-3- f = function () {} ==== f () {} */

/* class user {
    constructor(fname,lname,age,email) {
        this.name = {
            first: fname,
            last: lname,
        };
        this.age = age;
        this.email = email;
    }
    sayHello = function(){
        return `Say Hello`;
    };
    sayHi(){
        return `Say Hi`;
    };
}
let user1 = new user("kinan","ashkar",37, "kinan-ashkar@live.com");
console.log(user1.name.first);
console.log(user1.name.last);
console.log(user1.age);
console.log(user1.email);
console.log(user1.sayHello());
console.log(user1.sayHi()); */