var logic = require('./logic');

describe('addTodo', function() {
  it('should do addTodo', function() {
    var todos = [];
    var newTodo = { description: 'make smoothie out of things that should really be cooked' };
    var updatedTodos = logic.addTodo(todos, newTodo);
    result = [
         {
           id: 1,
           description: "make smoothie out of things that should really be cooked",
           done: false,
         }
       ]
       console.log("R: ",result)
       console.log("New R: ",updatedTodos)
    expect(updatedTodos).toEqual(result);
  });
});
describe('sortTodosByTrueAnFalse', function() {
  it('should do sortTodosByTrue', function() {
    var todos = [
      {
        id: 2,
        description: "make smoothie out of things that should really be cooked",
        done: false,
      }
    ,
      {
        id: 1,
        description: "make smoothie out of things that should really be cooked",
        done: true,
      }
    ];

    var updatedTodos = logic.sortTodos(todos, function(arr){
     return arr.sort((a, b) => {
      if (a.done > b.done) return -1
      return a.done < b.done ? 1 : 0
    })
      })

    result = [
      {
        id: 1,
        description: "make smoothie out of things that should really be cooked",
        done: true,
      }
    ,
      {
        id: 2,
        description: "make smoothie out of things that should really be cooked",
        done: false,
      }
    ];
       console.log("R: ",result)
       console.log("New R: ",updatedTodos)
    expect(updatedTodos).toEqual(result);
}),
  it('should do sortTodosByFalse', function() {
    var todos = [
      {
        id: 2,
        description: "make smoothie out of things that should really be cooked",
        done: true,
      }
    ,
      {
        id: 1,
        description: "make smoothie out of things that should really be cooked",
        done: false,
      }
    ];

    var updatedTodos = logic.sortTodos(todos, function(arr){
     return arr.sort((a, b) => {
      if (a.done < b.done) return -1
      return a.done > b.done ? 1 : 0
    })
      })

    result = [
      {
        id: 1,
        description: "make smoothie out of things that should really be cooked",
        done: false,
      }
    ,
      {
        id: 2,
        description: "make smoothie out of things that should really be cooked",
        done: true,
      }
    ];
       console.log("R: ",result)
       console.log("New R: ",updatedTodos)
    expect(updatedTodos).toEqual(result);
});
});