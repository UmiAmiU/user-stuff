class Entity {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }
}

class Stuff extends Entity {
    constructor(name, stuff = []) {
        super(name);
        this._stuff = stuff; 
    }

    addItem(item) {
        this._stuff.push(item);
    }

    deleteItem(item) {
        if(this._stuff.includes(item)) {
            this._stuff.splice(this._stuff.indexOf(item), 1);
        }
    }

    displayItems() {
        console.group(`Category: ${this.name}`);
        this._stuff.forEach(item => console.log(item));
        console.groupEnd();
    }
}

class User extends Entity {
    constructor(username, firstName) {
        super(username);
        this._firstName = firstName;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        this._firstName = value;
    }
}

class Box extends Entity {
    constructor(name, user, stuff = []) {
        super(name);
        this._user = user;
        this._stuff = stuff;
    }

    get user() {
        return this._user.firstName;
    }

    get stuff() {
        this._stuff.forEach(el => {
            el.displayItems();
        });
    }

    addStuff(stuff) {
        this._stuff.push(stuff);
    }
}

const user1 = new User("user1", "Pete");
const user2 = new User("user2", "Sasha");
const user3 = new User("user3", "Volga");

const stuff1 = new Stuff("food");
stuff1.addItem("banan");
stuff1.addItem("apple");
stuff1.addItem("strawberry");
const stuff2 = new Stuff("books", ["Alice in Wonderland", "How to live"]);
const stuff3 = new Stuff("games", ["cards", "uno", "football", "chess"]);

const box1 = new Box("box1", user1);
box1.addStuff(stuff1);
box1.addStuff(stuff3);
const box2 = new Box("box2", user3, [stuff2, stuff3]);

console.log("Stuff");
console.group("Box 1");
box1.stuff;
console.groupEnd();
console.group("Box 2");
box2.stuff;
console.groupEnd();
console.log("Users");
console.group("Box 1");
console.log(box1.user);
console.groupEnd();
console.group("Box 2");
console.log(box2.user);
console.groupEnd();