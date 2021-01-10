import React from 'react'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Category from './Category';
import Item from '../Item/Item';

configure({ adapter: new Adapter() });

const numberOfYears = new Date().getFullYear() - 2005;

let wrapper

describe('<Category/>', () => {
    beforeEach(() => {
        wrapper = shallow(<Category filterValues={[]} />);
    })
    it('should render 2 <Item/> elements', () => {
        wrapper.setProps({ filterValues: ["true", "false"] })
        expect(wrapper.find(Item)).toHaveLength(2);
    })
    it(`should render ${numberOfYears} <Item/> elements`, () => {
        wrapper.setProps({ filterValues: new Array(numberOfYears).fill(1) })
        expect(wrapper.find(Item)).toHaveLength(numberOfYears);
    })

    it('should render a <Item/> element in active state', () => {
        wrapper.setProps({ filterValues: ["true", "false"], activeItem: "true" })
        expect(wrapper.containsMatchingElement(<Item value="true" isActive={true} />)).toEqual(true);
    })
})
