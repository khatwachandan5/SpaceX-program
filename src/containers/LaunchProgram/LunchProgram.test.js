import React from 'react'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { LaunchProgram } from './LaunchProgram';
import List from '../../components/List/List';
import Filters from '../../components/Filters/Filters';
import Loader from '../../components/Loader/Loader'

configure({ adapter: new Adapter() });

let wrapper

describe('<LaunchProgram/>', () => {
    beforeEach(() => {
        wrapper = shallow(<LaunchProgram fetchLaunchData={() => { }} query={{}} launchProgram={{ loading: true }} />);
    })
    it('should render <List/> when receiving launchData', () => {
        wrapper.setProps({ launchProgram: { success: true, launchData:[{},{}] } })
        expect(wrapper.containsMatchingElement(<List launchData={[{},{}]}/>)).toEqual(true);
    })
    it('should render an error message in case of error', () => {
        wrapper.setProps({ launchProgram: { error: true } })
        expect(wrapper.containsMatchingElement(<div className="no-data"><h2>Error occurred while fetching data</h2></div>)).toEqual(true);
    })
    it('should render <Loader/> when loading', () => {
        wrapper.setProps({ launchProgram: { loading: true } })
        expect(wrapper.containsMatchingElement(<Loader/>)).toEqual(true);
    })
    it('should render <Filters/>', () => {
        expect(wrapper.containsMatchingElement(<Filters/>)).toEqual(true);
    })
})
