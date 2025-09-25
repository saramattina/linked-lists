class Node {
  constructor(newData, newNode = null) {
    // a Node starts with a given data property
    // a Node also has a .next property initialized as null
    this.data = newData;
    this.next = newNode;
  }
}

class LinkedList {
  constructor() {
    // a Linked List starts with a "head" property intialized as null
    this.head = null;
  }

  appendNode(data) {
    // creates a new node with the given data and adds it to back of the list
    let newNode = new Node(data);
    if (!this.head)  return this.head = newNode;
    let temp = this.head;
        while (temp.next) {
            temp = temp.next;
        }
         temp.next = newNode;
  }
  prependNode(data) {
    // creates a new node with the given data and adds it to the front of the list
    let newNode = new Node(data, this.head);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }
  pop() {
    // removes the last node from the list and returns it
    if (!this.head) {
      return null;
    }
    if (!this.head.next) {
     let temp = this.head;
     this.head = null;
      return temp;
    }
    let prev = null;
    let curr = this.head;
    while (curr.next) {
      prev = curr;
      curr = curr.next;
    }
    prev.next = null;
    return curr;
  }

  removeFromFront() {
    // remove the head node from the list and return it
    // the next node in the list is the new head node
    if (!this.head) {
        return null;
    }
    let temp = this.head;
    this.head = this.head.next;
    return(temp);
  }

  insertAt(x, data) {
    // insert a new node into the list with the given data
    // place it after X nodes in the list
    // if X exceeds the bounds of the list, put the node at the end
    // insertAt(0, 7) would add the new node as the head
   let newNode = new Node(data);

    if (!this.head) {
        this.head = newNode;
    } 

    // if to insert becomes this.head
    if (x === 0) {
        newNode.next = this.head;
        this.head = newNode;
        return;
    }
   
    
    let curr = this.head;
    let iterator = 1;
  
        while (curr.next && iterator < 1) {
            curr = curr.next;
            iterator++;
        }
    if (!curr.next) {
        return curr.next = newNode;
    }

    let next = curr.next;
    newNode.next = next;
    curr.next = newNode;
    
    }
  
  removeAt(x) {
    // remove the Xth node from the list, considering 0 to be the first node
    // return the node that has been removed
    if (!this.head) {
        return null;
    }
    if (x === 0) {
        const temp = this.head;
        this.head = this.head.next;
        return temp;
    } else {
        let prev = null;
        let curr = this.head;
        while (x && curr.next) {
            prev = curr;
            curr = curr.next;
            x--;
        }
        if (x) {
            return null;
        } else {
            prev.next = curr.next;
            curr.next = null;
            return(curr)
        }
    }
  }

  search(data) {
    // searches the list for a node with the given data
    // if it is found, return the "index" of the node, considering 0 to be the first node
    // if not, return false
    if (!this.head) {
        return false;
    }
    let index = 0;
    let curr = this.head;

    while(curr) {
        if (curr.data === data) {
            return index;
        } else {
            curr = curr.next;
            index++;
        }
    }
    return false;
  }

  sort() {
    // sort the Linked List in ascending order of data values
    if (!this.head) {
        return null;
    }

    let i = this.head;
    while(i.next) {
        let j = i.next;
            while(j) {
                if (i.data > j.data) {
                    let temp = i.data;
                    i.data = j.data;
                    j.data = temp;
                }
                j = j.next
            }
            i = i.next;
    }

    
  }
    
  }


module.exports = {
  Node,
  LinkedList,
};
