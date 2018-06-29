import React from 'react';
import {shallow, mount} from 'enzyme';

import SingleStory from './SingleStory';

describe('<SingleStory />', () => {
    it('Renders without crashing', () => {
        shallow(<SingleStory />);
    });
});