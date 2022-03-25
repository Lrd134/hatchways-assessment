import React from 'react';
import renderer from 'react-test-renderer';
test('renders characters', () => {
  const component = renderer.create(
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
