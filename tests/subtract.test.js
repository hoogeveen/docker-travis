function subtract(a, b) {
  return a - b;
}

test('subtracting 3 - 1 to equal 2', () => {
  expect(subtract(3, 1)).toBe(2);
});
