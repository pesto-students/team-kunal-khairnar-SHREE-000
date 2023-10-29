class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    append(data) {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
        return;
      }
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  
    removeDuplicates() {
      let current = this.head;
      while (current) {
        let runner = current;
        while (runner.next) {
          if (runner.next.data === current.data) {
            runner.next = runner.next.next;
          } else {
            runner = runner.next;
          }
        }
        current = current.next;
      }
    }
  
    toArray() {
      const result = [];
      let current = this.head;
      while (current) {
        result.push(current.data);
        current = current.next;
      }
      return result;
    }
  }
  
  // Example usage:
  
  const linkedList = new LinkedList();
  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(3);
  linkedList.append(2);
  linkedList.append(4);
  linkedList.append(1);
  
  console.log("Original Linked List:");
  console.log(linkedList.toArray());
  
  linkedList.removeDuplicates();
  
  console.log("Linked List after removing duplicates:");
  console.log(linkedList.toArray());
  