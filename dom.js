(function() {
    var container = document.getElementById('todo-container');
    var addTodoForm = document.getElementById('add-todo');

    var state = [];

    var createTodoNode = function(todo) {
        var todoNode = document.createElement('li');
        var spanNode = document.createElement('span');
        var checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');

        checkbox.addEventListener('click', function(event) {
            todoFunctions.markTodo(state, todo.id);
        });

        spanNode.textContent = todo.description;

        todoNode.appendChild(checkbox);
        todoNode.appendChild(spanNode);

        // this adds the delete button
        var deleteButtonNode = document.createElement('button');
        deleteButtonNode.textContent = "Delete";

        deleteButtonNode.addEventListener('click', function(event) {
            var newState = todoFunctions.deleteTodo(state, todo.id);
            update(newState);
        });

        todoNode.appendChild(deleteButtonNode);

        // add markTodo button

        // add classes for css

        return todoNode;
    };

    // bind create todo form
    if (addTodoForm) {
        addTodoForm.addEventListener('submit', function(event) {
            // https://developer.mozilla.org/en-US/docs/Web/Events/submit
            // what does event.preventDefault do?
            // what is inside event.target?

            event.preventDefault();

            // hint: todoFunctions.addTodo
            var newState = todoFunctions.addTodo(state, {
                description: event.target.description.value
            });

            update(newState);
        });
    }

    // you should not need to change this function
    var update = function(newState) {
        state = newState;
        renderState(state);
    };

    // you do not need to change this function
    var renderState = function(state) {
        var todoListNode = document.createElement('ul');

        state.forEach(function(todo) {
            todoListNode.appendChild(createTodoNode(todo));
        });

        // you may want to add a class for css
        container.replaceChild(todoListNode, container.firstChild);
    };

    if (container) renderState(state);
})();