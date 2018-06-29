import React from 'react';
import {shallow, mount} from 'enzyme';

import SingleStoryPage from './SingleStoryPage';

describe('<SingleStoryPage />', () => {
    it('Renders without crashing', () => {
        shallow(<SingleStoryPage />);
    });
});