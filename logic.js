var todoFunctions = {
    // todoFunctions.generateId() will give you a unique id
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
        const newTodoObj = [{
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