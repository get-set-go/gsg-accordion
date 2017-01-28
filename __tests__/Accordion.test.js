import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

import { AccordionSession } from '../src';

describe('<Accordion /> component', function() {

  it('should accordion exist', function() {
    let _instance = ReactTestUtils.renderIntoDocument(<AccordionSession />);
    expect(ReactTestUtils.isCompositeComponent(_instance)).toBeTruthy();
  });

});
