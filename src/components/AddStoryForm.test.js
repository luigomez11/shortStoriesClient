import React from 'react';
import {shallow, mount} from 'enzyme';

import AddStoryForm from './AddStoryForm';

describe('<AddStoryForm />', () => {
    it('Renders without crashing', () => {
        shallow(<AddStoryForm />);
    });
});
