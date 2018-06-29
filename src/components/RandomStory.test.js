import React from 'react';
import {shallow, mount} from 'enzyme';

import RandomStory from './RandomStory';

describe('<RandomStory />', () => {
    it('Renders without crashing', () => {
        shallow(<RandomStory />);
    });
});