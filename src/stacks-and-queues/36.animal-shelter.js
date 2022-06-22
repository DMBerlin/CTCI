/**
 * Animal Shelter:
 * An animal shelter, which holds only dogs and cats, operates on a strictly "first in, first out" basis.
 * People must adopt either the "oldest" (based on arrival time) of all animals at the shelter,
 * or they can select whether they would prefer a dog or a cat (and will receive the oldest animal
 * of that type). They cannot select which specific animal they would like. Create the data
 * structures to maintain this system and implement operations such as enqueue, dequeueAny,
 * dequeueDog, and dequeueCat. You may use the built-in Linked list data structure.
 */

// 1 - People always get the oldest (from time of arrival)
// 2 - People can choose to pick either a dog or a car (the oldest of either one)
// 3 - People can't select a specific animal to pick (obey FIFO order)

// Operations:
// - enqueue
// - dequeueAny
// - dequeueDog
// - dequeueCat

class AnimalShelterQueue {
    constructor () {
        this.data = [];
    }

    get () {
        return this.data;
    }

    enqueue (record) {
        this.data.unshift(record);
    }

    dequeueAny () {
        return this.data.pop();
    }

    dequeueDog () {
        let animal;
        let length = this.data.length - 1;
        while (length !== 0) {
            animal = this.data[length];
            if (animal === 'DOG') {
                this.data.splice(length, 1);
                return animal;
            }
            length--;
        }
        return null;
    }

    dequeueCat () {
        let animal;
        let length = this.data.length - 1;
        while (length !== 0) {
            animal = this.data[length];
            if (animal === 'CAT') {
                this.data.splice(length, 1);
                return animal;
            }
            length--;
        }
        return null;
    }
}

const shelter = new AnimalShelterQueue();

['DOG', 'CAT', 'CAT', 'DOG', 'DOG', 'DOG', 'DOG', 'CAT', 'DOG']
    .forEach((animal) => shelter.enqueue(animal));

const testQueue = () => {
    console.log('ALL: ', shelter.get());    
    shelter.dequeueAny();    
    console.log('dequeueAny: ', shelter.get());    
    shelter.dequeueCat();    
    console.log('dequeueCat: ', shelter.get());    
    shelter.dequeueCat();    
    console.log('dequeueCat: ', shelter.get());    
    shelter.dequeueCat();    
    console.log('dequeueCat: ', shelter.get());    
    shelter.dequeueDog();    
    console.log('dequeueDog: ', shelter.get());
}

// testQueue();

class Node {
    constructor (data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class AnimalShelterList {
    constructor () {
        this.head = null;
    }

    get () {
        let buffer = '';
        let node = this.head;
        while (node) {
            buffer += ' ' + node.data + ' ';
            node = node.next;
        }
        return buffer;
    }

    enqueue (data) {
        this.head = new Node(data, this.head);
    }

    dequeueAny () {
        let node = this.head;
        while (node) {
            if (node.next && !node.next.next) {
                node.next = null;
                return;
            }
            node = node.next;
        }
    }

    dequeueCat () {
        let node = this.head.next;
        let prev = this.head;

        if (this.head.data === 'CAT') {
            let cat = this.head;
            this.head = this.head.next;
            return cat;
        }
        
        while (node) {
            if (node.data === 'CAT') {
                let cat = node;
                prev.next = node.next;
                return cat;
            }
            prev = prev.next;
            node = node.next;
        }
        return null;
    }

    dequeueDog () {
        let node = this.head.next;
        let prev = this.head;

        if (this.head.data === 'DOG') {
            let dog = this.head;
            this.head = this.head.next;
            return dog;
        }

        while (node) {
            if (node.data === 'DOG') {
                let dog = node;
                prev.next = node.next;
                return dog;
            }
            prev = prev.next;
            node = node.next;
        }
        return null;
    }
}

const testLinkedList = () => {
    const shelterList = new AnimalShelterList();

    ['DOG', 'CAT', 'CAT', 'DOG', 'DOG', 'DOG', 'DOG', 'CAT', 'DOG']
        .forEach((animal) => shelterList.enqueue(animal));

    console.log(shelterList.get());
    shelterList.dequeueAny();
    console.log('dequeueAny:', shelterList.get());
    shelterList.dequeueCat();
    console.log('dequeueCat:', shelterList.get());
    shelterList.dequeueCat();
    console.log('dequeueCat:', shelterList.get());
    shelterList.dequeueDog();    
    console.log('dequeueDog:', shelterList.get());
}

testLinkedList();