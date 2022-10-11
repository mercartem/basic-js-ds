const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data) {
      this.data = data;
      this.left = null; 
      this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.rootTree = null;
  }

  root() {
    return this.rootTree;
  }

  add(data) {
    const newNode = new Node(data);
    this.rootTree = addInside(this.rootTree, data);
    function addInside(node, data) {
      if (!node) {
        return newNode;
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        node.left = addInside(node.left, data);
      } else {
        node.right = addInside(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    let res = hasInside(this.rootTree, data);
    return res;
    function hasInside(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
      if (data < node.data) {
        return hasInside(node.left, data);
      } else {
        return hasInside(node.right, data);
      }
    }
  }

  find(data) {
    let res = findInside(this.rootTree, data);
    return res;
    function findInside(node, data) {
      if (!node) {
        return null;
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        return findInside(node.left, data);
      } else {
        return findInside(node.right, data);
      }
    }
  }

  remove(data) {
    this.rootTree = removeInside(this.rootTree, data);
    function removeInside(node, data) {
      if (!node) {
        return null;
      }
      if (data < node.data) {
        node.left = removeInside(node.left, data);
        return node;
      } 
      if (data > node.data) {
        node.right = removeInside(node.right, data);
        return node;
      } else {
          if (!node.left && !node.right) {
            node = null;
            return node;
          }
          if (!node.left) {
            node = node.right;
            return node;
          } 
          if (!node.right) {
            node = node.left;
            return node;
          }
          let minRightNode = node.right;
          while (minRightNode.left) {
            minRightNode = minRightNode.left;
          }
          node.data = minRightNode.data;
          node.right = removeInside(node.right, minRightNode.data);
          return node;
      }
    }
  }

  min() {
    let res = findMin(this.rootTree);
    return res;
    function findMin(node) {
      if (!node.left) {
        return node.data;
      } else {
        return findMin(node.left)
      }
    }
  }

  max() {
    let res = findMax(this.rootTree);
    return res;
    function findMax(node) {
      if (!node.right) {
        return node.data;
      } else {
        return findMax(node.right)
      }
    }
  }
}

const tree = new BinarySearchTree()
tree.add(9);
tree.add(14);
tree.add(2);
tree.add(6);
tree.add(128);
tree.add(8);
tree.add(31);
tree.add(54);
tree.add(1);
tree.remove(2);

module.exports = {
  BinarySearchTree
};