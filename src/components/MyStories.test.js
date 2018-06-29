import React from 'react';
import {shallow, mount} from 'enzyme';

import MyStories from './MyStories';

describe('<MyStories />', () => {
    it('Renders without crashing', () => {
        shallow(<MyStories />);
    });
});