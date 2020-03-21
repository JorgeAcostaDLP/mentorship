//Binary Search Trees

class Node {
  constructor(data, right = null, left = null) {
    (this.data = data), (this.right = null), (this.left = null);
  }
}

class Bst {
  constructor() {
    this.root = null;
  }

  //left is less than or equal to, right is more than
  add(data) {
    let leafNode = new Node(data);

    if (this.root === null) {
      this.root = leafNode;
    } else {
      this.insert(this.root, leafNode);
    }
  }
  insert(node, nodeToInsert) {
    if (nodeToInsert.data <= node.data) {
      if (node.left === null) {
        node.left = nodeToInsert;
      } else {
        this.insert(node.left, nodeToInsert);
      }
    } else {
      if (node.right === null) {
        node.right = nodeToInsert;
      } else {
        this.insert(node.right, nodeToInsert);
      }
    }
  }
}

function bstInorder(node) {
  if (node !== null) {
    bstInorder(node.left || null);
    console.log(node.data);
    bstInorder(node.right || null);
  }
}

function bstPreorder(node) {
  if (node !== null) {
    console.log(node.data);
    bstPreorder(node.left || null);
    bstPreorder(node.right || null);
  }
}

function bstPostorder(node) {
  if (node !== null) {
    bstPostorder(node.left || null);
    bstPostorder(node.right || null);
    console.log(node.data);
  }
}
let bst = new Bst();
bst.add(2);
bst.add(1);
bst.add(3);
bst.add(5);
bst.add(0);
bst.add(4);
bst.add(6);
bst.inorder(bst.root);
//inverse a tree homework
/*      2
    1       3
0               5
            4       6



            2
        3       1
    5               0
6       4

*/

function reverse(node) {
  //base case
  if (node === null) {
    return;
  }
  //store temporary node
  let temporary = node.left;
  //recursive calls
  node.left = reverse(node.right);
  node.right = reverse(temporary);
  //returns root node (eventually)
  return node;
}

let a = reverse(bst.root);
bstInorder(a);
