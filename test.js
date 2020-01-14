var logic = require('./logic');



describe('delete object', function() {
  it('should delete the object with the givin id', function() {
    var expected = [
      {
        id: 1,
        description: 'make coffee',
        done: false,
      },
        {
        id: 7,
        description: 'make coffee',
        done: false,
      },
    ];
    var actual = [
      {
        id: 0,
        description: 'smash avocados',
        done: true,
      },
      {
        id: 1,
        description: 'make coffee',
        done: false,
      },
        {
        id: 7,
        description: 'make coffee',
        done: false,
      },
    ];
    expect(expected).toEqual(logic.deleteTodo(actual,0));
  });
});
