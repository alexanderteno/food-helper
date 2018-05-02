import { shallow } from 'enzyme';
import * as React from 'react';
import { match } from 'react-router';
import App from './App';

const mockMatch: match<{restaurantId?: string}> = {
  isExact: false,
  params: {
    restaurantId: undefined,
  },
  path: '/',
  url: '/',
};

describe('App', () => {

  const shallowWrapper = shallow(<App match={mockMatch}/>);

  it('should render', () => {
    expect(shallowWrapper.find('.app')).toHaveLength(1);
  });

});
