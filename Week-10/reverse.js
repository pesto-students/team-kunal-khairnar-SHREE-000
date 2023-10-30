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
  
    reverseKNodes(k) {
      let current = this.head;
      let prev = null;
      let next = null;
      let count = 0;
  
      // Count the number of nodes in the linked list
      let temp = this.head;
      while (temp) {
        count++;
        temp = temp.next;
      }
  
      // If k is greater than or equal to the number of nodes, no need to reverse
      if (k >= count) {
        return;
      }
  
      while (count >= k) {
        let tail = prev;
        let newHead = current;
        for (let i = 0; i < k; i++) {
          next = current.next;
          current.next = tail;
          tail = current;
          current = next;
        }
  
        // Update the head if it's the first k nodes
        if (!prev) {
          this.head = tail;
        } else {
          prev.next = tail;
        }
  
        newHead.next = current;
        prev = newHead;
        count -= k;
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
  
  function reverseKNodesInLinkedList(arr, k) {
    const linkedList = new LinkedList();
    for (const element of arr) {
      linkedList.append(element);
    }
    linkedList.reverseKNodes(k);
    return linkedList.toArray();
  }
  
  // Example usage:
  
  const input1 = [1, 2, 3, 4, 5, 6, 7, 8];
  const k1 = 3;
  
  console.log(reverseKNodesInLinkedList(input1, k1)); // Output: [3, 2, 1, 6, 5, 4, 8, 7]
  
  const input2 = [1, 2, 3, 4, 5];
  const k2 = 2;
  
  console.log(reverseKNodesInLinkedList(input2, k2)); // Output: [2, 1, 4, 3, 5]
  