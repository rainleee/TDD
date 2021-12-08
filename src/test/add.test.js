const { test } = require('@jest/globals');
const add = require('../add.js');

test('', () => {
  expect(add(1, 2)).toBe(3);
});
