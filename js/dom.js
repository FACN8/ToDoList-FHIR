(function() {
    var container = document.getElementById('todo-container');
    var addTodoForm = document.getElementById('add-todo');


    var state = [];

    var createTodoNode = function(todo) {
        var todoNode = document.createElement('li');
        todoNode.setAttribute('style', 'list-style-type:none;');
        var spanNode = document.createElement('span');
        var checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');

        if (todo.done)
            checkbox.checked = true;

        checkbox.addEventListener('click', function(event) {
            todoFunctions.markTodo(state, todo.id);
        });

        spanNode.textContent = todo.description;

        todoNode.appendChild(checkbox);
        todoNode.appendChild(spanNode);

        var deleteButtonNode = document.createElement('button');
        deleteButtonNode.textContent = "Delete";

        deleteButtonNode.addEventListener('click', function(event) {
            var newState = todoFunctions.deleteTodo(state, todo.id);
            update(newState);
        });

        todoNode.appendChild(deleteButtonNode);

        console.log(state);

        return todoNode;
    };

    if (addTodoForm) {
        addTodoForm.addEventListener('submit', function(event) {
            event.preventDefault();
            if (event.target.description.value === '')
                return;
            var newState = todoFunctions.addTodo(state, {
                description: event.target.description.value
            });
            update(newState);
            event.target.description.value = '';
        });
    }

    document.getElementById("filter").addEventListener('click', function(event) {
        filterMode = document.getElementById("filter").textContent;
        console.log(filterMode)
        if (filterMode.includes("UnDone")) {
            var newState = todoFunctions.sortTodos(state, arr => todoFunctions.sortByFalse(arr))
            console.log(newState)
            document.getElementById("filter").textContent = "Filter By Done"
        } else {
            var newState = todoFunctions.sortTodos(state, arr => todoFunctions.sortByTrue(arr))
            console.log(newState)
            document.getElementById("filter").textContent = "Filter By UnDone"
        }
        update(newState);
    });

    var update = function(newState) {
        state = newState;
        renderState(state);
    };

    var renderState = function(state) {
        var todoListNode = document.createElement('ul');

        state.forEach(function(todo) {
            todoListNode.appendChild(createTodoNode(todo));
        });

        container.replaceChild(todoListNode, container.firstChild);
    };

    if (container) renderState(state);
})();