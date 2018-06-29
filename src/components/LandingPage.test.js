import React from 'react';
import {shallow, mount} from 'enzyme';

import LandingPage from './LandingPage';

describe('<LandinPage />', () => {
    it('Renders without crashing', () => {
        shallow(<LandingPage />);
    });
});