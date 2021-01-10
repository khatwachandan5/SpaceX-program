import React from 'react'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Filter from './Filters'
import Category from './Category/Category';

configure({ adapter: new Adapter() });

const filterData = new Array(5).fill({type:"test"});

describe('<Filter/>', () => {
    it(`should render ${filterData.length} <Category/> elements`, () => {
        const wrapper = shallow(<Filter filterData={filterData} />);
        expect(wrapper.find(Category)).toHaveLength(filterData.length);
    })
})
