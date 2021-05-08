import React from 'react';
import { shallow } from 'enzyme';
import { ImagesComponent } from './Images';

describe('Component Images', () => {
  it('should render without crashing', () => {
    const component = shallow(<ImagesComponent />);
    expect(component).toBeTruthy();
  });
});
