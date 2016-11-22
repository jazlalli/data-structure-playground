import TreeNode from './TreeNode';
import Queue from '../Queue';

function Tree(root) {
  var node = new TreeNode(root);
  this._root = node;
}

Tree.prototype.traverse = function(callback) {
  var queue = new Queue();

  queue.enqueue(this._root);

  currentTree = queue.dequeue();

  while(currentTree){
    for (var i = 0, length = currentTree.children.length; i < length; i++) {
      queue.enqueue(currentTree.children[i]);
    }

    callback(currentTree);
    currentTree = queue.dequeue();
  }
};

Tree.prototype.contains = function(callback) {
  this.traverse.call(this, callback);
};

Tree.prototype.add = function(data, toData) {
  var child = new TreeNode(data),
      parent = null,
      callback = function(node) {
        if (node.data === toData) {
          parent = node;
        }
      };

  this.contains(callback, this.traverse);

  if (parent) {
    parent.children.push(child);
    child.parent = parent;
  } else {
    throw new Error('Cannot add node to a non-existent parent.');
  }
};

export default Tree;
