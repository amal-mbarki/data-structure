// There are four steps:
/*1. Arrays: Finding the sum of distinct elements from two sets */

function sumOfDistinctElements(set1, set2) {
   
    let distinctElements = new Set([...set1, ...set2]);

    let sum = 0;
    distinctElements.forEach(element => {
        sum += element;
    });

    return sum;
}


let set1 = [3, 1, 7, 9];
let set2 = [2, 4, 1, 9, 3];
console.log(sumOfDistinctElements(set1, set2)); 



/*2. Dot Product and verifying orthogonality between two vectors */

function dotProduct(v1, v2) {
   
    if (v1.length !== v2.length) {
        return "Error: Vectors must have the same length.";
    }

  
    let ps = 0;
    for (let i = 0; i < v1.length; i++) {
        ps += v1[i] * v2[i];
    }

    if (ps === 0) {
        return `The vectors are orthogonal. Dot product: ${ps}`;
    } else {
        return `The vectors are not orthogonal. Dot product: ${ps}`;
    }
}

let v1 = [1, 2, 3];
let v2 = [-2, 4, -1];
console.log(dotProduct(v1, v2)); 


/*3. Linked List: Delete a node from a specific location */

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function deleteNode(head, position) {
    if (head === null || position < 0) {
        return head;
    }

    if (position === 0) {
        head = head.next;
        return head;
    }

    let current = head;
    for (let i = 0; i < position - 1; i++) {
        if (current === null) return head;
        current = current.next;
    }

    if (current === null || current.next === null) {
        return head;
    }
    current.next = current.next.next;

    return head;
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);

head = deleteNode(head, 2);

let current = head;
while (current !== null) {
    console.log(current.data);
    current = current.next;
}



/*4. Use the stack to reverse a text string */

class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items.pop();
    }

   
    isEmpty() {
        return this.items.length === 0;
    }
    peek() {
        return this.items[this.items.length - 1];
    }
}

function reverseString(str) {
    let stack = new Stack();

    for (let char of str) {
        stack.push(char);
    }
    let reversedStr = '';
    while (!stack.isEmpty()) {
        reversedStr += stack.pop();
    }

    return reversedStr;
}

let s = "hello";
console.log(reverseString(s));  



