class Stack {
    constructor() {
        this.items = ['Islamabad', 'Lahore', 'Faislabad'];
        // this.size = 8;
    }
    push(item) {
        this.items.push(item);

    }
    pop() {
        this.items.pop();
    }
    peek() {
        console.log(this.items[this.items.length - 1]);
    }
    isEmpty() {
        if (this.items.length == 0) {
            console.log("Its Empty");
        } else {
            console.log("Its NOT Empty");
        }
    }
    printStack() {
        for (let i = 0; i < this.items.length; i++) {
            console.log(this.items[i])
        }
    }
    size() {
        return this.size;
    }


}
let myStack = new Stack();
myStack.push('karachi');
// myStack.printStack();
// myStack.pop();
// myStack.printStack();
myStack.peek();
//myStack.printStack();
//myStack.size();
myStack.isEmpty();