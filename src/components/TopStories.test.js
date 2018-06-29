import React from 'react';
import {shallow, mount} from 'enzyme';

import TopStories from './TopStories';

describe('<TopStories />', () => {
    it('Renders without crashing', () => {
        shallow(<TopStories />);
    });
});