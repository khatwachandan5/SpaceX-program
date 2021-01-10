import React from 'react'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import List from './List';
import Item from './Item/Item';

configure({ adapter: new Adapter() });

const launchData = new Array(10).fill().map((_, i) => { return { flight_number: i } });

describe('<List/>', () => {
    beforeEach(() => {
        global.IntersectionObserver = class IntersectionObserver {
            constructor() { }

            disconnect() {
                return null;
            }

            observe() {
                return null;
            }

            takeRecords() {
                return null;
            }

            unobserve() {
                return null;
            }
        };
    })
    it(`should render ${launchData.length} <Item/> elements`, () => {
        const wrapper = shallow(<List launchData={launchData} />);
        expect(wrapper.find(Item)).toHaveLength(launchData.length);
    })
})
