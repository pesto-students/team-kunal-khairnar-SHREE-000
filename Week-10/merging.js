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
  }
  
  function mergeSortedLinkedLists(list1, list2) {
    const mergedList = new LinkedList();
    let current1 = list1.head;
    let current2 = list2.head;
  
    while (current1 && current2) {
      if (current1.data < current2.data) {
        mergedList.append(current1.data);
        current1 = current1.next;
      } else {
        mergedList.append(current2.data);
        current2 = current2.next;
      }
    }
  
    while (current1) {
      mergedList.append(current1.data);
      current1 = current1.next;
    }
  
    while (current2) {
      mergedList.append(current2.data);
      current2 = current2.next;
    }
  
    return mergedList;
  }
  
  const input1 = [1, 3, 5];
  const input2 = [2, 4, 6];
  
  const list1 = new LinkedList();
  for (const element of input1) {
    list1.append(element);
  }
  
  const list2 = new LinkedList();
  for (const element of input2) {
    list2.append(element);
  }
  
  const mergedList = mergeSortedLinkedLists(list1, list2);
  const resultArray = mergedList.toArray();
  
  console.log(resultArray); 
  