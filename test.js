var logic = require('./logic');



describe('Marking a to do', function() {
  it('Marking element 1', function() {
    var expected = [{id: 0, description: 'make tea', done: true},
                    {id: 1, description: 'make eggs', done: false},
                    {id: 2, description: 'smash avocado', done: false}]
    var actual = [{id: 0, description: 'make tea', done: false},
                  {id: 1, description: 'make eggs', done: false},
                  {id: 2, description: 'smash avocado', done: false}]
    expect(expected).toEqual(logic.markTodo(actual,0));
  });
});
