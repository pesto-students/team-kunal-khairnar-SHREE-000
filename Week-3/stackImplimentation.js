// function createStack() {
//     return {
        // items:[],
//         push(item) {
//             this.items.push(item);
//         },
//         pop() {
//             return this.items.pop();
//         }
//     };
// }
// const stack = createStack();
// console.log(stack, 'stack');
// stack.push(10);
// stack.push(5);
// stack.pop(); // => 5
// stack.items;// => [10]
// stack.items= [10,100,1000];// Encapsulation broken!

function createStack() {
    // Write your code here...
    const items = [];
    return {
        // item: items,
        push(item) {
            items.push(item);
        },
        pop() {
            return items.pop();
        },
        item() {
            return items
        }
    };
}
const stack = createStack();
// console.log(stack.push(10), "stack.push(10);");
// console.log(stack.push(5), "stack.push(5)");
// console.log(stack.pop(), "stack.pop()");
stack.push(10);
stack.push(5);
stack.pop();// => 5
stack.item;// => undefined
// console.log(stack.item());




