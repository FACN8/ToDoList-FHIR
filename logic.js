// Part 1. Fill in any missing parts of the todoFunction object!
// you can access these on todo.todoFunctions
// For part one we expect you to use tdd

var todoFunctions = {
    // todoFunctions.generateId() will give you a unique id
    // You do not need to understand the implementation of this function.
    generateId: (function() {
        var idCounter = 0;

        function incrementCounter() {
            return (idCounter += 1);
        }

        return incrementCounter;
    })(),

    //cloneArrayOfObjects will create a copy of the todos array 
    //changes to the new array don't affect the original
    cloneArrayOfObjects: function(todos) {
        return todos.map(function(todo) {
            return JSON.parse(JSON.stringify(todo));
        });
    },

    addTodo: function(todos, newTodo) {
        // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
        // returns a new array, it should contain todos with the newTodo added to the end.
        // add an id to the newTodo. You can use the generateId function to create an id.
        // hint: array.concat
        let newTodoObj = [{
            id: todoFunctions.generateId(),
            description: newTodo.description,
            done: false
        }]
        return todos.concat(newTodoObj)

    },
    deleteTodo: function(todos, idToDelete) {

        return todos.filter(function(x) {
            return x["id"] !== idToDelete;
        });
        // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
        // return a new array, this should not contain any todo with an id of idToDelete
        // hint: array.filter
    },
    markTodo: function(todos, idToMark) {
        return todos.map(function(curr) {
                if (curr["id"] == idToMark) {
                    if (curr["done"] == false)
                        curr["done"] = true;
                    else
                        curr["done"] = false;
                }
                return curr;
            })
            // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
            // in the new todo array, all elements will remain unchanged except the one with id: idToMark
            // this element will have its done value toggled
            // hint: array.map
    },
    sortTodos: function(todos, sortFunction) {

        //sort be Done/unDone 

        return sortFunction(todos)
    },
    sortByFalse: function(arr) {
        // sort by false
        return arr.sort((a, b) => {
            if (a.done < b.done) return -1
            return a.done > b.done ? 1 : 0
        })
    },

    sortByTrue: function(arr) {
        // sort by true
        return arr.sort((a, b) => {
            if (a.done > b.done) return -1
            return a.done < b.done ? 1 : 0
        })
    },
};

if (typeof module !== 'undefined') {
    module.exports = todoFunctions;
}