const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/


class Node {
  constructor (data) {
  this.data = data;
  this.left = null;
  this.right = null;
  }
}

  module.exports = class BinarySearchTree {
  // class BinarySearchTree {
    
    constructor () {
      this.treeRoot = null;
    }
    
    root() {
       return this.treeRoot;
    }
  
    add(data) {    
      let newNode = new Node (data);
      if (this.treeRoot === null) {
        this.treeRoot = newNode;
      } else {
      this.addNode (this.treeRoot, newNode);
      }
    }
    addNode (node, newNode) {
      if (newNode.data < node.data) {
        if (node.left === null) {
        node.left = newNode;
        } else {
        this.addNode(node.left, newNode)
        }
      } else {
        if (node.right === null) {
        node.right = newNode;
        } else {
        this.addNode(node.right, newNode)
      }}}
  
  
    has(data) {      
      return this.hasNode (this.treeRoot, data);      
    }
    hasNode (node, data) {
    	if (node === null) {
      		/* console.log(node)  */         
          return false;
        } else if (data < node.data) {
          return this.hasNode (node.left, data)
        } else if (data > node.data) {
          return this.hasNode (node.right, data)
        } else  {
          return true;
        } 
    }
  
    find(data) {      
      return this.findNode (this.treeRoot, data);
    }
    findNode (node, data) {
      if (node === null) {
          return null;
        } else if (data < node.data) {
          return this.findNode (node.left, data)
        } else if (data > node.data) {
          return this.findNode (node.right, data)
        } else  {
          return node;
        } 
    }
    minNode(node) {
      if (node.left === null)
        return node;
      else 
        return this.minNode(node.left);
    }
    maxNode(node) {
      if (node.right === null)
        return node;
      else 
        return this.maxNode(node.right);
    } 
    remove(data) {
      this.treeRoot = this.removeNode(this.treeRoot, data);
    }
    removeNode(node, data) {
      if (node === null) {
        return null;
      } else if (data < node.data) {
        node.left = this.removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = this.removeNode(node.right, data);
        return node;
      } else {
        if (node.left === null && node.right === null) {
          node = null;
          return node;
        }
        if (node.left === null) {
          node = node.right;
          return node;
        } else if (node.right === null) {
          node = node.left;
          return node;
        }
        let newNode = this.minNode(node.right);
        node.data = newNode.data;
        node.right = this.removeNode(node.right, newNode.data);
        return node;
      }
    }
     
    min() {
      return this.minNode(this.treeRoot).data;
    }
    max() {
      return this.maxNode(this.treeRoot).data;
    }
  }
  