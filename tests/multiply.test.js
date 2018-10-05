function multiply(a, b) {
  return a * a;
}

test('multiplying 2 * 3 to equal 6', () => {
  expect(multiply(2, 3)).toBe(6);
});
