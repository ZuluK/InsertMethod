function BST(value){
  this.value = value;
  this.left = null;
  this.right = null;
}

BST.prototype.insert = function(value){
  if(value <= this.value){
    if(!this.left) this.left = new BST(value);//if no child node then put the value there
    else this.left.insert(value);
  }
  else if (value > this.value){
    if(!this.right) this.right = new BST(value);//if no child node then put the value there
    else this.right.insert(value);
  }
};

BST.prototype.contains = function(value){
  if(value === this.value) return true;
  else if(value < this.value){
    if(!this.left) return false;
    else return this.left.contains(value);
  }
  else if (value > this.value){
    if(!this.right) return false;
    else return this.right.contains(value);
  }
};
BST.prototype.depthFirstTraversal = function(iteratorFunc, order){
  if (order === 'pre-order') iteratorFunc(this.value); 
  if (this.left) this.left.depthFirstTraversal(iteratorFunc, order);
  if (order === 'in-order') iteratorFunc(this.value);
  if (this.right) this.right.depthFirstTraversal(iteratorFunc, order);
};











var bst = new BST(50);

bst.insert(302);
bst.insert(30);
bst.insert(3);
bst.insert(100);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(53);
bst.insert(85);
bst.insert(105);
bst.insert(10);
bst.insert(70);

bst.depthFirstTraversal(log);

function log(value){
  console.log(value)
};
