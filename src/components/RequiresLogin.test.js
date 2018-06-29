import React from 'react';
import {shallow, mount} from 'enzyme';

import RequiresLogin from './RequiresLogin';

describe('<RequiresLogin />', () => {
    it('Renders without crashing', () => {
        shallow(<RequiresLogin />);
    });
});