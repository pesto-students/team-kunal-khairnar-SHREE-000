function createIncrement() {
    let count = 0;
    function increment() {
        count++;
    }
    let message = `Count is${count}`;
    function log() {
        console.log(message);
    }
    return [increment,log];
}
const [increment,log] = createIncrement();
increment();
increment();
increment();
log();// What is logged?
// It will logg by "Count is 0"
// The count is increment in function increment only
// Outsid function increment count value will zero only

