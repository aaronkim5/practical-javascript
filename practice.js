var todos = ['item 1', 'item 2', 'item 3', 'item 4'];

function displayTodos() {
  console.log('These are my todos:', todos);
};

function addTodo(item1) {
  todos.push(item1);
  displayTodos();
};

function changeTodo(position, newValue) {
  todos[position] = newValue;
  displayTodos();
};

function deleteTodo(position) {
  todos.splice(position, 1);
  displayTodos();
}

deleteTodo(0);


var aaron = {
  name: 'Aaron',
  sayName: function() {
    console.log(this.name);
  }
};


var itemList = {
  items: ['item 1', 'item 2', 'item 3'],
  displayItems: function(){
    console.log('my items:', this.items);
  },
  addItem: function(newItem) {
    this.items.push(newItem);
    this.displayItems();
  }
};

itemList.addItem('newwwwww item');
