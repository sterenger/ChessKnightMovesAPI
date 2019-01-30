const calculatePossibilies = require('../calculatePossibilies');

test('Check a1 position', () => {
  expect(calculatePossibilies("a","1")) == ([ 'c2', 'b3' ]);
});

