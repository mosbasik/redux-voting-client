import React from 'react';
import ReactDOM from 'react-dom';
import {
    renderIntoDocument,
    Simulate
} from 'react-addons-test-utils';
import {List, Map} from 'immutable';
import {expect} from 'chai';

import Management from '../../src/components/Management';

describe('Management', () => {

    it('invokes the next callback when the next button is clicked', () => {
        let nextInvoked = false;
        const next = () => nextInvoked = true;

        const component = renderIntoDocument(
            <Management next={next} />
        );
        Simulate.click(ReactDOM.findDOMNode(component.refs.next));

        expect(nextInvoked).to.equal(true);
    });

})
