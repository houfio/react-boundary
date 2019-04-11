import * as React from 'react';
import { render } from 'react-testing-library';

import { boundary, useError } from '../src';

type Props = {
  crash: boolean
};

const Component = boundary(({ crash }: Props) => {
  const [error, info] = useError();

  if (crash && !error) {
    throw new Error('CRASHED!');
  }

  return error && info ? (
    <span>
      Oh no! Something happened: {error.message}
      {info.componentStack}
    </span>
  ) : (
    <span>
      Everything is fine
    </span>
  );
});

it('renders the component', () => {
  const { asFragment } = render(
    <Component crash={false}/>
  );

  expect(asFragment()).toMatchSnapshot();
});

it('renders the errored component', () => {
  const { asFragment } = render(
    <Component crash={true}/>
  );

  expect(asFragment()).toMatchSnapshot();
});
